const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const {
  STATUS_CREATED,
  SALT_ROUND,
  ERROR_CONFLICT,
  ERROR_VALIDATION,
  NODE_ENV,
  JWT_SECRET,
} = require('../utils/constants');

const ValidationError = require('../errors/ValidationError');

module.exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((data) => res.send(data))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  return bcrypt.hash(password, SALT_ROUND)
    .then((hash) => User.create({ name, email, password: hash }))
    .then((user) => {
      res.status(STATUS_CREATED).send({
        name: user.name,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        return res.status(ERROR_CONFLICT).send({ message: 'Пользователь с переданным email уже существует' });
      }
      if (err.statusCode === ERROR_VALIDATION) {
        return next(new ValidationError('Переданы некорректные данные'));
      }
      return next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((data) => res.send(data))
    .catch((err) => {
      if (err.statusCode === ERROR_VALIDATION) {
        return next(new ValidationError('Переданы некорректные данные'));
      }
      return next(err);
    });
};

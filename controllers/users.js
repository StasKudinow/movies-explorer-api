/* eslint-disable linebreak-style */
const User = require('../models/user');

module.exports.getUser = (req, res) => {
  User.findById(req.user._id)
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Ошибка получения пользователя' }));
};

module.exports.createUser = (req, res) => {
  const { name, email, password } = req.body;
  User.create({ name, email, password })
    .then((user) => {
      res.status(201).send({
        name: user.name,
        email: user.email,
      });
    })
    .catch(() => res.status(500).send({ message: 'Ошибка создания пользователя' }));
};

module.exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      const error = new Error();
      error.statusCode = 404;
      throw error;
    })
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Ошибка обновления пользователя' }));
};

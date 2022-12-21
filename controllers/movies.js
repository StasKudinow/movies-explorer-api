const Movie = require('../models/movie');

const { STATUS_CREATED, ERROR_VALIDATION } = require('../utils/constants');

const ValidationError = require('../errors/ValidationError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((data) => res.send(data))
    .catch(next);
};

module.exports.postMovie = (req, res, next) => {
  const owner = req.user._id;
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.status(STATUS_CREATED).send(movie))
    .catch((err) => {
      if (err.statusCode === ERROR_VALIDATION) {
        return next(new ValidationError('Переданы некорректные данные'));
      }
      return next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params._id)
    .then((data) => {
      if (!data) {
        throw new NotFoundError('Запрашиваемый фильм не найден');
      }
      if (data.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Нет доступа');
      }
      return res.send(data);
    })
    .then(() => Movie.findByIdAndDelete(req.params._id))
    .catch(next);
};

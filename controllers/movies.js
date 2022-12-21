/* eslint-disable linebreak-style */
const Movie = require('../models/movie');

module.exports.getMovies = (req, res) => {
  Movie.find({})
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Ошибка получения фильмов' }));
};

module.exports.postMovie = (req, res) => {
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
    .then((movie) => res.status(201).send(movie))
    .catch(() => res.status(500).send({ message: 'Ошибка добавления фильма' }));
};

module.exports.deleteMovie = (req, res) => {
  Movie.findByIdAndDelete(req.params.movieId)
    .then((movie) => res.send(movie))
    .catch(() => res.status(500).send({ message: 'Ошибка удаления фильма' }));
};

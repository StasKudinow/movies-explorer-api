/* eslint-disable linebreak-style */
const router = require('express').Router();

const { getMovies, postMovie, deleteMovie } = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', postMovie);
router.delete('/movies/:movieId', deleteMovie);

module.exports = router;

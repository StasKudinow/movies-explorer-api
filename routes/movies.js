const router = require('express').Router();

const { getMovies, postMovie, deleteMovie } = require('../controllers/movies');
const { movieIdValidator, moviePostValidator } = require('../middlewares/validators/movie-validators');

router.get('/movies', getMovies);
router.post('/movies', moviePostValidator, postMovie);
router.delete('/movies/:_id', movieIdValidator, deleteMovie);

module.exports = router;

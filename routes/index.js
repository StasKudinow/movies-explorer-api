const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { userCreateValidator, userLoginValidator } = require('../middlewares/validators/user-validators');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', userCreateValidator, createUser);
router.post('/signin', userLoginValidator, login);

router.use(auth);

router.use('/', userRouter);
router.use('/', movieRouter);

router.all('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;

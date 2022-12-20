/* eslint-disable linebreak-style */
const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');

router.use('/', userRouter);
router.use('/', movieRouter);

module.exports = router;

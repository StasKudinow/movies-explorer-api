/* eslint-disable linebreak-style */
const router = require('express').Router();

const { getUser, createUser, updateUser } = require('../controllers/users');

router.get('/users/me', getUser);
router.post('/users', createUser);
router.patch('/users/me', updateUser);

module.exports = router;

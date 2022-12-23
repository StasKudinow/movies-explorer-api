const router = require('express').Router();

const { getUser, updateUser } = require('../controllers/users');
const { userUpdateValidator } = require('../middlewares/validators/user-validators');

router.get('/users/me', getUser);
router.patch('/users/me', userUpdateValidator, updateUser);

module.exports = router;

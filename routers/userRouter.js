const router = require('express').Router();
const { login, signUp } = require('../controllers/userController');

router.route('/login')
    .post(login)

router.route('/signUp')
    .post(signUp)

module.exports = router;
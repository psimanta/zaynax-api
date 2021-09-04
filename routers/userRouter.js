const router = require('express').Router();
const { login, signUp, adminLogin } = require('../controllers/userController');

router.route('/login')
    .post(login)

router.route('/signUp')
    .post(signUp)

router.route('/admin/login')
    .post(adminLogin)

module.exports = router;
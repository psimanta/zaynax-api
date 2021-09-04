const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/user');

module.exports.signUp = async (req, res) => {
    let user = {};
    user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send({
        error: 'SIGN_UP_FAILED',
        message: 'user already exists'
    });

    user = new User(_.pick(req.body, ['username', 'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const result = await user.save();
    return res.status(201).send({
        message: "user created!"
    })
}

module.exports.login = async (req, res) => {
    let user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send({
        error: "LOGIN_FAILED",
        message: "invalid credentials"
    })

    const validUser = await bcrypt.compare(req.body.password, user.password);
    if (!validUser) return res.status(400).send({
        error: "LOGIN_FAILED",
        message: "invalid credentials"
    })

    const activeUser = user.active
    if (!activeUser) return res.status(400).send({
        error: "LOGIN_FAILED",
        message: "user is not active"
    })

    const token = user.generateJWT();
    return res.status(200).send({
        message: "login successful",
        token: token,
        user: _.pick(user, ["username", "role"])
    })
}

module.exports.adminLogin = async (req, res) => {
    let user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send("Invalid Credentials");

    const validUser = await bcrypt.compare(req.body.password, user.password);
    if (!validUser) return res.status(400).send("Invalid Credentials")

    const role = user.role
    if (role !== "admin") return res.status(400).send("Not Authorized")

    const token = user.generateJWT();
    return res.status(200).send({
        message: "login successful",
        token: token,
        user: _.pick(user, ["username", "role"])
    })
}
const router = require("express").Router();
const { addOrder, getOrders, getOrderDetail, updateOrder } = require("../controllers/orderController");
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

router.route("/")
    .post([authorize, admin], addOrder)
    .get([authorize, admin], getOrders)

router.route("/:id")
    .get([authorize, admin], getOrderDetail)
    .patch([authorize, admin], updateOrder)

module.exports = router
const router = require("express").Router();
const { addOrder, getOrders, getOrderDetail } = require("../controllers/orderController");

router.route("/")
    .post(addOrder)
    .get(getOrders)

router.route("/:id")
    .get(getOrderDetail)

module.exports = router
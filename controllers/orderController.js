const _ = require("lodash");
const { Order } = require("../models/order");

module.exports.addOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        return res.status(201).send("Order created successfully");
    } catch (err) {
        return res.status(400).send(err);
    }
}

module.exports.getOrders = async (req, res) => {
    const orders = await Order.find();
    return res.status(200).send(orders);
}

module.exports.getOrderDetail = async (req, res) => {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    return res.status(200).send(order);
}
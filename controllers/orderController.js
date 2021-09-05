const _ = require("lodash");
const { Order } = require("../models/order");

module.exports.addOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        return res.status(201).send("Order created successfully");
    } catch (err) {
        return res.status(400).send(err._message);
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

module.exports.updateOrder = async (req, res) => {
    const orderId = req.params.id;
    const status = req.body.status;
    try {
        const order = await Order.updateOne({ _id: orderId }, { status: status });
        return res.status(200).send("Order Updated");
    } catch (err) {
        console.log(err);
        return res.status(400).send("Something went wrong!");
    }

}
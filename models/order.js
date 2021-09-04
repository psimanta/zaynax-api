const { Schema, model } = require('mongoose');

const orderSchema = Schema({
    orderNo: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Cancelled"],
        default: "Pending",
    }
}, { timestamps: true })

module.exports.Order = model('Order', orderSchema);
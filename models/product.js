const { Schema, model } = require('mongoose');

const productSchema = Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    shipping: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    active: {
        type: Boolean,
    }
}, { timestamps: true });

module.exports.Product = model('Product', productSchema);
const { Schema, model } = require('mongoose');

const promoSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    useTime: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true });

module.exports.Promo = model('Promo', promoSchema);
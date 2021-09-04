const _ = require("lodash");
const { Promo } = require("../models/promo");

module.exports.addPromo = async (req, res) => {
    let promo = await Promo.find({ name: req.body.name })
    if (promo) return res.status(400).send("Promo exists!");
    promo = new Promo(req.body);

    try {
        await promo.save();
        return res.status(201).send("Promo created successfully");
    } catch (err) {
        return res.status(400).send(err._message);
    }
}

module.exports.getPromos = async (req, res) => {
    const promos = await Promo.find();
    return res.status(200).send(promos);
}

module.exports.getPromoDetail = async (req, res) => {
    const promoId = req.params.id;
    const promo = await Promo.findById(promoId);
    return res.status(200).send(promo);
}
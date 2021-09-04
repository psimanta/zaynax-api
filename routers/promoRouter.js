const router = require("express").Router();
const { addPromo, getPromos, getPromoDetail } = require("../controllers/promoController");
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

router.route("/")
    .post([authorize, admin], addPromo)
    .get([authorize, admin], getPromos)

router.route("/:id")
    .get(getPromoDetail)

module.exports = router
const router = require("express").Router();
const { addPromo, getPromos, getPromoDetail } = require("../controllers/promoController");

router.route("/")
    .post(addPromo)
    .get(getPromos)

router.route("/:id")
    .get(getPromoDetail)

module.exports = router
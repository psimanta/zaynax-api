const router = require('express').Router();
const {
    getProducts,
    getImage,
    addProduct
} = require("../controllers/productController");
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

router.route("/")
    .post([authorize, admin], addProduct)
    .get(getProducts);

router.route("/image/:id")
    .get(getImage);


module.exports = router

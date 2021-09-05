const router = require('express').Router();
const {
    getProducts,
    getImage,
    addProduct,
    searchResult
} = require("../controllers/productController");
const authorize = require("../middlewares/authorize");
const admin = require("../middlewares/admin");

router.route("/")
    .post([authorize, admin], addProduct)
    .get(getProducts);

router.route("/image/:id")
    .get(getImage);

router.route("/search")
    .get(searchResult);


module.exports = router

const router = require('express').Router();
const {
    getProducts,
    getImage,
    addProduct
} = require("../controllers/productController");

router.route("/")
    .post(addProduct)
    .get(getProducts);

router.route("/image/:id")
    .get(getImage);


module.exports = router

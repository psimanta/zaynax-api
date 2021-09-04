const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");
const { Product } = require("../models/product");

module.exports.addProduct = async (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) return res.status(400).send("Something went wrong!");
        const product = new Product(fields);

        if (files.image) {
            fs.readFile(files.image.path, (err, data) => {
                if (err) return res.status(400).send("Problem in file data!");
                product.image.data = data;
                product.image.contentType = files.image.type;
                product.save((err, result) => {
                    if (err) return res.status(500).send("Internal Server error!");
                    else return res.status(201).send({
                        message: "Product Created Successfully!",
                        data: _.pick(result, ["name", "price"])
                    })
                })
            })
        } else {
            return res.status(400).send("No image provided!");
        }
    })
}

module.exports.getProducts = async (req, res) => {
    const products = await Product.find({ active: true })
        .select({ image: 0 })
    return res.status(200).send(products);
}


module.exports.getImage = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId)
        .select({ image: 1, _id: 0 })
    res.set('Content-Type', product.image.contentType);
    return res.status(200).send(product.image.data);
}
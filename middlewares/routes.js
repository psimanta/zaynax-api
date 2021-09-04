const userRouter = require('../routers/userRouter');
const productRouter = require("../routers/productRouter");
const promoRouter = require("../routers/promoRouter");
const orderRouter = require("../routers/orderRouter");

module.exports = (app) => {
    app.use('/api/v1/user', userRouter);
    app.use("/api/v1/product", productRouter);
    app.use("/api/v1/promo", promoRouter);
    app.use("/api/v1/order", orderRouter);
}
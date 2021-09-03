const userRouter = require('../routers/userRouter');
const productRouter = require("../routers/productRouter");

module.exports = (app) => {
    app.use('/api/v1/user', userRouter);
    app.use("/api/v1/product", productRouter);
}
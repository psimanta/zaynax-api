const userRouter = require('../routers/userRouter');

module.exports = (app) => {
    app.use('/api/v1/user', userRouter);
}
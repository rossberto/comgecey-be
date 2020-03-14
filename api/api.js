const express = require('express');
const apiRouter = express.Router();

//const usersRouter = require('./images/images');
const newsletterRouter = require('./newsletter/newsletter')
const usersRouter = require('./users/users');
const authRouter = require('./auth/auth');
//apiRouter.use('/imgs', usersRouter);

apiRouter.use('/newsletter', newsletterRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;

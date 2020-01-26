const express = require('express');
const apiRouter = express.Router();

//const usersRouter = require('./images/images');
const newsletterRouter = require('./newsletter/newsletter')
const usersRouter = require('./users/users');

//apiRouter.use('/imgs', usersRouter);

apiRouter.use('/newsletter', newsletterRouter);
apiRouter.use('/users', usersRouter);


module.exports = apiRouter;

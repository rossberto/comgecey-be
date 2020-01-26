const express = require('express');
const apiRouter = express.Router();

const usersRouter = require('./images/images');
const newsletterRouter = require('./newsletter/newsletter')

apiRouter.use('/imgs', usersRouter);

apiRouter.use('/newsletter', newsletterRouter);


module.exports = apiRouter;

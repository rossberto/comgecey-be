const express = require('express');
const apiRouter = express.Router();

//const usersRouter = require('./images/images');
const newsletterRouter = require('./newsletter/newsletter')
const usersRouter = require('./users/users');
const authRouter = require('./auth/auth');
const convocatoriesRouter = require('./convocatories/convocatories');
const placesRouter = require('./convocatories/places');
const convHasPlaceRouter = require('./convocatories/conv_has_place');
//apiRouter.use('/imgs', usersRouter);

apiRouter.use('/newsletter', newsletterRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/convocatories', convocatoriesRouter);
apiRouter.use('/places', placesRouter);
apiRouter.use('/conv_has_place', convHasPlaceRouter);

module.exports = apiRouter;

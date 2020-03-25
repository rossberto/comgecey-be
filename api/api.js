const express = require('express');
const apiRouter = express.Router();

//const usersRouter = require('./images/images');
const newsletterRouter = require('./newsletter/newsletter')
const usersRouter = require('./users/users');
const authRouter = require('./auth/auth');
const convocatoriesRouter = require('./convocatories/convocatories');
const placesRouter = require('./convocatories/places');
const convHasPlaceRouter = require('./convocatories/conv_has_place');

const withAuth = require('./middleware');

// Routes require auth
apiRouter.use('/users', withAuth, usersRouter);
apiRouter.use('/convocatories', withAuth, convocatoriesRouter);
apiRouter.use('/places', withAuth, placesRouter);
apiRouter.use('/conv_has_place', withAuth, convHasPlaceRouter);

// Routes do not require auth
apiRouter.use('/auth', authRouter);
apiRouter.use('/newsletter', newsletterRouter);

module.exports = apiRouter;

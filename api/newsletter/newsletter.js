const express = require('express');
const newsletterRouter = express.Router();

newsletterRouter.post('/register', (req, res, next) => {
  let sql = `INSERT INTO Suscribers (email) VALUES ('${req.body.email}')`;
  res.status(201).send();
});


module.exports = newsletterRouter;

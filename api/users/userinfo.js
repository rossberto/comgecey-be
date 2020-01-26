const express = require('express');
const userinfoRouter = express.Router();

userinfoRouter.get('/address', (req, res, next) => {
  res.status(200).send('ok')
});

module.exports = userinfoRouter;

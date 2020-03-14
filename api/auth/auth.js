const express = require('express');
const authRouter = express.Router();

const db = require('../../db/database');

// GET /api/auth
authRouter.post('/', (req, res, next) => {
  console.log(req.body);
  const sql = `SELECT * FROM Users WHERE email='${req.body.email}'`;
  db.query(sql, function(err, users) {
    if (err) {
      next(err);
    } else {
      console.log(users);
      if (users.length === 1) {
        if (users[0].password === req.body.password && users[0].confirmed > 3) {
          delete users[0]['password'];
          delete users[0]['confirmed'];
          res.status(201).send({user: users[0]});
        } else {
          res.status(401).send();
        }
      } else {
        res.status(404).send();
      }
    }
  });
});

module.exports = authRouter;

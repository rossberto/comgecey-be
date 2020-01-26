const express = require('express');
const usersRouter = express.Router();

const db = require('../../db/database');
const uuidv1 = require('uuid/v1'); // Timebase

usersRouter.get('/', (req, res, next) => {
  const sql = 'SELECT * FROM Users';
  db.query(sql, function(err, results) {
    if (err) {
      next(err);
    } else {
      res.status(200).send({users: results});
    }
  });
});

//user_arr = [name, father_lname, mother_lname, birthdate, birth_city, birth_state]

usersRouter.post('/', (req, res, next) => {
  const id = uuidv1();
  let sql = `INSERT INTO Users (id, email, password) VALUES ("${id}", "${req.body.email}", "${req.body.password}")`;
  db.query(sql, function(err, result) {
    if (err) {
      next(err);
    } else {
      sql = `SELECT id, email FROM Users WHERE id="${id}"`;
      db.query(sql, function(err, insertedUser) {
        if (err) {
          next(err);
        } else {
          res.status(201).send({user: insertedUser[0]})
        }
      });
    }
  });
});

module.exports = usersRouter;

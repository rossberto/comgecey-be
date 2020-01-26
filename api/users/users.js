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
          res.status(201).send({user: insertedUser[0]});
        }
      });
    }
  });
});

usersRouter.param('userId', (req, res, next, userId) => {
  const sql = `SELECT * FROM Users WHERE id="${userId}" LIMIT 1`;
  db.query(sql, function(err, result) {
    if (err) {
      next(err);
    } else {
      if (result.length > 0) {
        req.userId = userId;
        req.user = result[0];
        delete req.user['password'];
        next();
      } else {
        res.status(404).send();
      }
    }
  });
});

usersRouter.get('/:userId', (req, res, next) => {
  res.status(200).send({user: req.user});
});

module.exports = usersRouter;

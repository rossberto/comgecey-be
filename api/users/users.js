const express = require('express');
const usersRouter = express.Router();

const db = require('../../db/database');
const uuidv1 = require('uuid/v1'); // Timebase

const sendConfirmation = require('../mailer');

// GET /api/users
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
// POST /api/users
usersRouter.post('/', (req, res, next) => {
  const id = uuidv1();
  let sql = `INSERT INTO Users (id, email, password) VALUES ("${id}", "${req.body.email}", "${req.body.password}")`;
  db.query(sql, function(err, result) {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(209).send('ER_DUP_ENTRY');
      } else {
        next(err);
      }
    } else {
      sql = `SELECT id, email FROM Users WHERE id="${id}"`;
      db.query(sql, function(err, insertedUser) {
        if (err) {
          next(err);
        } else {
          sendConfirmation(id);
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

// GET /api/users/:userId
usersRouter.get('/:userId', (req, res, next) => {
  res.status(200).send({user: req.user});
});

// PUT /api/users/:userId
usersRouter.put('/:userId', (req, res, next) => {
  console.log(req.body);
  let sql = `UPDATE Users SET ? WHERE id="${req.userId}"`;
  db.query(sql, req.body, function(err, result) {
    if (err) {
      next(err);
    } else {
      res.status(200).send('ok');
    }
  });
});

const addressRouter = require('./address');
usersRouter.use('/:userId/address', addressRouter);

const mailRouter = require('./mail');
usersRouter.use('/:userId/mail', mailRouter);

const professionalRouter = require('./professional');
usersRouter.use('/:userId/professional', professionalRouter);

// DELETE /api/users/:userId

module.exports = usersRouter;

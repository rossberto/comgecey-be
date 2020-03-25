const express = require('express');
const suscribersRouter = express.Router();

const db = require('../../db/database');

// GET /api/convocatories/:convocatoryId/suscribers
suscribersRouter.get('/', (req, res, next) => {
  //let sql = `SELECT * FROM Users_has_Convocatories WHERE Convocatories_id='${req.convocatoryId}'`;
  const sql = 'SELECT Users.id, Users.name, Users.father_lname, Users.mother_lname, Users_has_Convocatories.status ' +
              'FROM Users_has_Convocatories JOIN Users ON Users_has_Convocatories.Users_id = Users.id ' +
	            `WHERE Convocatories_id="${req.convocatoryId}"`;
  console.log(sql);
  db.query(sql, function(err, convUsers) {
    if (err) {
      next(err);
    } else {
      console.log(convUsers);
      const suscribers = convUsers.map(convUser => {
        return {
          id: convUser.id,
          completeName: convUser.name + ' ' + convUser.father_lname + ' ' + convUser.mother_lname,
          status: convUser.status
        };
      });
      res.status(200).send({suscribers: suscribers});
    }
  });
});


suscribersRouter.param('userId', (req, res, next, userId) => {
  const sql = `SELECT * FROM Users_has_Convocatories WHERE Users_id='${userId}' AND Convocatories_id='${req.convocatoryId}'`;
  db.query(sql, function(err, results) {
    if (err) {
      next(err);
    } else {
      if (results.length > 0) {
        req.userId = userId;
        next();
      } else {
        res.status(404).send();
      }
    }
  });
});

// DELETE /api/convocatories/:convocatoryId/suscribers/:userId
suscribersRouter.delete('/:userId', (req, res, next) => {
  const sql = `DELETE FROM Users_has_Convocatories WHERE Users_id='${req.userId}' AND Convocatories_id='${req.convocatoryId}'`;
  db.query(sql, function(err, result) {
    if (err) {
      next();
    } else {
      res.status(204).send();
    }
  });
});

module.exports = suscribersRouter;
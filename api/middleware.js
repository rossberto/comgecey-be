const jwt = require('jsonwebtoken');
const secret = 'C0MG3C3YPL4TF0RM';

const withAuth = function(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}

module.exports = withAuth;

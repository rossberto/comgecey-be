const express = require('express');
const multer = require('multer');

const filesRouter = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'documentos' + req.path)
  },
  filename: function (req, file, cb) {
    console.log(file);
    console.log(req.path);
    type = file.mimetype.split('/');
    cb(null, 'curp-' + req.userId + '.pdf'); //file.fieldname + '-' + Date.now() + '.' + type[1]);
  }
})

const upload = multer({storage: storage});

filesRouter.post('/curp', upload.single('file'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)

  }
  res.send(file)
});

filesRouter.post('/rfc', upload.single('file'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)

  }
  res.send(file)
});

filesRouter.post('/domicilio', upload.single('file'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)

  }
  res.send(file)
});

filesRouter.post('/profesional', upload.single('file'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)

  }
  res.send(file)
});

filesRouter.post('/pago', upload.single('file'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)

  }
  res.send(file)
});
/*
const curpRouter = require('./files/curp');
filesRouter.use('/curp', curpRouter);
*/
module.exports = filesRouter;

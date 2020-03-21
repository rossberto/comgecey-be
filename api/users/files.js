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
    cb(null, req.path + '-' + req.userId + '.pdf');
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

filesRouter.use('/curp', express.static('documentos/curp'), (req, res) => {
  res.status(404).send();
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

filesRouter.use('/rfc', express.static('documentos/rfc'), (req, res) => {
  res.status(404).send();
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

filesRouter.use('/domicilio', express.static('documentos/domicilio'), (req, res) => {
  res.status(404).send();
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

filesRouter.use('/profesional', express.static('documentos/profesional'), (req, res) => {
  res.status(404).send();
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

filesRouter.use('/pago', express.static('documentos/pago'), (req, res) => {
  res.status(404).send();
});
/*
const curpRouter = require('./files/curp');
filesRouter.use('/curp', curpRouter);
*/
module.exports = filesRouter;

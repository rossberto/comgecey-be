const express = require('express');
const documentsRouter = express.Router();

documentsRouter.use('/', express.static('documentos/solicitudes'));

module.exports = documentsRouter;

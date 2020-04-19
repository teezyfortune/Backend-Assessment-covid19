const express = require('express');
const covid19ImpactEstimator = require('./json.controller')

const jsonRouter = express.Router();

jsonRouter.post('/', covid19ImpactEstimator);
jsonRouter.post('/json', covid19ImpactEstimator);

module.exports = jsonRouter;
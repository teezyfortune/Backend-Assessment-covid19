const express = require('express');
const covid19ImpactxmlEstimator = require('../xml/xml.controller')

const xmlRouter = express.Router();

xmlRouter.post('/xml', covid19ImpactxmlEstimator);

module.exports = xmlRouter;
const express = require('express');
const { loggerResponse }  = require('./log.controller')

const logRoutes = express.Router()

logRoutes.get('/logs', loggerResponse)

module.exports = logRoutes;
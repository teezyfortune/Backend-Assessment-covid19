const express = require('express');
const jsonRouter = require('../json/json.route');
const xmlRouter = require('../xml/xmlroute');
const logRoutes = require('../logs/logs.route');

const routes = express.Router();

routes.use(jsonRouter)
routes.use(xmlRouter)
routes.use(logRoutes)

module.exports = routes
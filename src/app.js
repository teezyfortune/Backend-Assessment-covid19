const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../src/modules/routes/index')
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1/on-covid-19', routes);
app.use(morgan('tiny', {
	stream: fs.createWriteStream(path.join(__dirname,'./access.log'), {flags: 'a'})
}));


app.get('/', (req, res) => {
  Response(res, { status: 200, message: 'Welcome to covid19 estimator API' });
});
const PORT = 7000
const server = `http://localhost:${PORT}`;


app.listen(PORT, () => {
	console.log(`app running on ${server}`)
});

module.exports = app;

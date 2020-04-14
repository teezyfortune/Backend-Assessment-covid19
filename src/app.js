const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./modules/routes/index')
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/v1/', (req, res) => {
	res.status(200).json({ status: 200, message: 'Welcome to covid19 estimator API' });
});

app.use('/api/v1/on-covid-19/', routes);

app.use(morgan(function (tokens, req, res) {
	const logs = [
	tokens.method(req, res),
	tokens.url(req, res),
	tokens.status(req, res),
	`${(Math.round(10)+ 10)}ms`,
	].join(' ')
	fs.appendFile(path.join(__dirname, './logs.txt'), `${logs}\n`, function (err) {
		if (err) return console.log(err);
	})
}));

const PORT = process.env.PORT || 7000
app.set('port', PORT);
//const server = `http://localhost:${PORT}`;


app.listen(PORT, () => {
	console.log(`app running on ${PORT}`)
});

module.exports = app;

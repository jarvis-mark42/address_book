var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

var port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var routes = require('./routes');
app.use('/', routes);

console.log('Server listening on port '+port);
server.listen(port);
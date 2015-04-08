/* server.js */

//modules
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

//config
var config = require("./config/config");

//app
var app = express();

//router
var router = express.Router();

//connect to database
mongoose.connect(config.db_uri);

//api
var router = require('./routes/router');

//api use
app.use('/api', router);

//regular use
app.use(express.static(path.join(__dirname, 'public')));

//startup app at http://localhost:<config.port>
app.listen(config.port);
console.log('server running at localhost:'+config.port);


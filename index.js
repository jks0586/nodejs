var express = require('express');
var	http = require('http'); 
var	path = require('path');
//var	config = require('./config')();
var	app = express();
var mysql=require('mysql');

app.use(app.router);
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ost',
  database: 'oc23'
});


db.connect(function(err,db) {
  if (err){ throw err
	console.log('You are not connected with database...');
	} else {
		/*req.db = db;
		app.all('/', function(req, res, next) {
			console.log('This is home page');
		});
	
		http.createServer(app).listen(config.port, function() {
		  	console.log(
		  		'Successfully connected to mysql://' + config.mongo.host + ':' + config.mongo.port,
		  		'\nExpress server listening on port ' + config.port
		  	);
		});
		*/
	}
});

http    = require('http');
fs      = require('fs')
os      = require('os');
path    = require('path');
express = require('express');
escpos  = require('escpos');
serialport = require('serialport');

var bodyParser = require('body-parser');
var timeout    = require('connect-timeout');
var cors       = require('cors');


process.on('uncaughtException', function (err) {
	console.log('uncaughtException : ' + err);
});
process.on('SIGINT', function() {
	process.exit();
});



function haltOnTimedout (req, res, next) {
    if (!req.timedout) next()
}

var app = express();
app.use(cors());
app.use(timeout('5s'));
app.use(haltOnTimedout);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit: '100kb', extended:false}));
app.use(bodyParser.json({limit: '100kb'}));

app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
});


var commsrvRest  = require(__dirname+"/rest");
app.use("/", commsrvRest);


var httpServer = http.createServer(app).listen(8080, function(){
		console.log(" Server Started ");
});
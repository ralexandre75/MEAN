var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')))


mongoose.connect('mongodb://angulardyma:123123@ds227469.mlab.com:27469/angulardyma', {
	KeepAlive: true,
	reconnectTries: Number.MAX_VALUE,
	useMongoClient: true
}, function(error) {
	if(error){
		console.log(error);
	} else {
		console.log("connexion opened to mongodb !");
	}
});


app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'))
})



module.exports = app;

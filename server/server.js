var express = require('express'); //build a bridge to the library
var app = express();//hey express- gimme those blueprints
var bodyParser = require('body-parser');//body parser transforms data from front end to make readable to server
var path = require('path');//who knows....
var index = require('./routes/index.js')//buiding a bridge
var listings = require('./routes/listings.js')//buiding a bridge to listings
var rentals = require('./routes/rentals.js')//buiding a bridge to rentals

var mongoose = require('mongoose');//bringing in mongoose aka the devil

//middleware
app.use(express.static(path.join(__dirname, './public'))); //static pointing to public folder that doesn't change "static"
app.use(bodyParser.json()); //transforms data from front end to server readable

//express routes
app.use('/', index); //just a route to the front end
app.use('/rental', rentals);
app.use('/listing', listings);
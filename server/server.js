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

//mongoose connection
var databaseUrl = 'mongodb://localhost:27017/realestate';//uses the name of our db from robo 3t
mongoose.connect(databaseUrl,
{
    useMongoClient: true
});
// optional- check to make sure connections are working
mongoose.connection.on('connected', function() {
    console.log('mongoose connected to : ', databaseUrl);    
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connection error to : ', err);
});
//start me up a dang server
app.set('port', process.env.PORT || 5000);//process.env.PORT = process is an object that uses the environment variable to set port for production environment || or use 5000
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
    
});
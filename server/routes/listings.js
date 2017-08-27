var express = require('express'); //bringing in express
var router = express.Router(); //using the express library/package. object to provide tools "express" to do what we need to do
var mongoose = require('mongoose');//bring on the devil
var Listing = require('../models/listings.js');

router.get('/', function(req, res){ //building a door to get stuff through and has callback function
    //get me some dang listins 
    Listing.find({}, function(err, data) {//find requires an object and a callback function.  cb cun has 2 params it will use(err, data)
        if (err) {
            console.log('find error: ', err);//if there is an error, tell me what it is
            res.sendStatus(500);    
        } else {
            console.log('found data: ', data);//if we are good, gimme the damn data
            res.send(data);
        }
    });
});

router.post('/', function(req, res){ //building a door to get stuff through and has callback function
    console.log('new listing to store: ', req.body); //logs body of req object with data from the browser ie.- input fields
    var saveListing = new Listing(req.body);//built a new listing from schema object to create new data
    saveListing.save(function(err, data){//puts new listing in to db  'make it'
        console.log('saved to listings', data);//logs the data 'save it'
        if(err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201)
        }
    })
});

// router.put('/:id', function(req, res){ //building a door to get stuff through and has callback function
//     var listingID = req.params.id;
//     console.log('update');
    


// });

// router.delete('/', function(req, res){ //building a door to get stuff through and has callback function
    


// });

module.exports = router;
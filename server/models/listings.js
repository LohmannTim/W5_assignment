
var mongoose = require('mongoose');//brings in mongoose
var Schema = mongoose.Schema; //sets up to build a schema/data model

// create the Schema aka build a data model
var listingsSchema = new Schema({
    cost: {type: Number, required: true},
    sqft: {type: Number, required: true},
    city: {type: String, required: true}
    
});

//give access to get this data elsewhere
module.exports = mongoose.model('Listings', listingsSchema);
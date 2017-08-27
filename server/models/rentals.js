var mongoose = require('mongoose');
var Schema = mongoose.Schema;//object to create an object. below is the layout of the object

// create the Schema aka build a data model
var rentalSchema = new Schema({
    rent: {type: Number, required: true},
    sqft: {type: Number, required: true},
    city: {type: String, required: true}
    
});
module.exports = mongoose.model('Rentals', rentalSchema);
var mongoose = require('mongoose');
var geocoder = require('geocoder');

// define the schema for our user model
var issueSchema = mongoose.Schema({

	useremail		: String,
	title 			: String,
	description	: String,
	address			: String,
	city				: String,
  state				: String,
	lat					: Number, 
	long				: Number
});

// Methods
// Generate lat and long 
issueSchema.methods.generateLatLong = function(address, city, state) {
	// locationString = address.concat(city, state);
	console.log("Location String: " + address);
	locationJSON = geocoder.geocode(locationString);
	lat = locationJSON.results[geometry][location][lat];
	long = locationJSON.results[geometry][location][long];
	var latlong = new Array();
	latlong[0] = lat;
	latlong[1] = long;
	return latlong;
};


module.exports = mongoose.model('Issue', issueSchema);

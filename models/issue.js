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
	long				: Number, 
	date 				: Date
});

// Methods
// Generate lat and long 
issueSchema.methods.generateLatLong = function(address, city, state, callback) {
	locationString = address + " " + city + " " + state;
	geocoder.geocode(locationString, function(err, data) {
		console.log("locationJSON: " + data.results[0].geometry.location.lat);
		lat = data.results[0].geometry.location.lat;
		long = data.results[0].geometry.location.lng;
		var latlong = new Array();
		latlong[0] = lat;
		latlong[1] = long;
		callback(err, latlong);
	});
};

module.exports = mongoose.model('Issue', issueSchema);

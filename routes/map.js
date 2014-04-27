var mongoose = require('mongoose');
mongoose.connect('oceanic.mongohq.com:10010/techsource');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	 var locationSchema = mongoose.Schema({
	    latitude: String,
	    longitude: String
	})

});

module.exports = function(app){
	app.get('/map', function(req,res){

		// var locations = [
		// 	[43.069174, -89.408193, "Title", "Description"],
	 //      	[43.076008, -89.399524, "Title", "Description"],
		// 	[43.075569, -89.385018, "Title", "Description"]
		// ];
		res.render('map');
	});

	app.post('/map/get-markers', function(req, res){

	});
}


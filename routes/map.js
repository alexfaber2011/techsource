var Issue = require('../models/issue.js');

module.exports = function(app){
	app.get('/map', function(req,res){

		// var locations = [
		// 	[43.069174, -89.408193, "Title", "Description"],
	 //      	[43.076008, -89.399524, "Title", "Description"],
		// 	[43.075569, -89.385018, "Title", "Description"]
		// ];
		res.render('map');
	});

	app.get('/map/get-markers', function(req, res){
		Issue.find({}, function(error, issues){
			if(error)
				res.json({error: "unable to fetch issues"});
			else
				res.json(issues);
		})
	});
}


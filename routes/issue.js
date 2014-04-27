var Issue       		= require('../models/issue.js');
var User       		= require('../models/user.js');

module.exports = function(app) {

	app.get('/issues', function(req, res) {
		res.render('issues/index.ejs', {
			issues : req.user.getIssues()
		});
	});
	
	app.get('/issues/new', function(req, res){
		res.render('issues/new.ejs');
	});
	
	app.post('/issues/new', function(req, res){
		var newIssue         = new Issue();
		newIssue.useremail   = 'anthony@fuck.com';
		newIssue.title       = req.body.title;
		newIssue.description = req.body.description;
		newIssue.address     = req.body.address;
		newIssue.city        = req.body.city;
		newIssue.state       = req.body.state;
		// newIssue.lat         = newIssue.generateLatLong()[0];
		// newIssue.long        = newIssue.generateLatLong()[1];
		
		// save the user
    newIssue.save(function(err) {
        if (err)
            throw err;
    });

		// res.render('issues/show.ejs', {
		// 	issue : Issue.find({'ObjectId': newIssue.ObjectID})
		// });
		
		res.redirect('/issues');					
	});
		
		app.get('issues/show/:id', function(req, red){
			res.render('issues/show.ejs', {
				issue : issue.find({'ObjectId': req.id})
			});
		});
}
var User          = require('../models/user.js');
var Issue         = require('../models/issue.js');

module.exports = function(app, passport){
	
  // used to serialize the user for the session
  // passport.serializeUser(function(user, done) {
		// console.log("foobar");
  //     done(null, user.id);
  // });

  // used to deserialize the user
  // passport.deserializeUser(function(id, done) {
  //     User.findById(id, function(err, user) {
  //         done(err, user);
  //     });
  // });
	
	
	app.get('/map', isLoggedIn, function(req,res) {

		if(req.user.local.isFixer == true) {
			res.render('map');
		}
		else{
			res.render('profile.ejs');
		}
	});

	app.get('/map/get-markers', function(req, res){
		Issue.find({}, function(error, issues){
			if(error)
				res.json({error: "unable to fetch issues"});
			else
				res.json(issues);
		})
	});
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

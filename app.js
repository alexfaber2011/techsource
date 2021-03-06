
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var issue = require('./routes/issue')
var http = require('http');
var path = require('path');
var passport = require('passport');
var flash 	 = require('connect-flash');

// Database configuration ===============================================================
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url); // connect to our database

var app = express();

require('./config/passport')(passport); // pass passport for configuration

// Used for EJS form helpers
require('express-helpers')(app);

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

//required for passport
app.configure(function(){
	app.use( express.cookieParser() );
	app.use(express.session({ secret: 'foobar' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routes ======================================================================
app.get('/', routes.index);
app.get('/users', user.list);
require('./routes/passport.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./routes/map.js')(app, passport);
require('./routes/issue.js')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

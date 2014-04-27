var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var issue 	 = require('./issue.js')
// var issue = mongoose.model('Issue', issueSchema);

// define the schema for our user model
var userSchema = mongoose.Schema({

    local         : {
        email			: String,
				isFixer		: Boolean,
        password	: String
    }
	});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// return all issues that belong to this user
userSchema.methods.getIssues = function(callback) {
	return issue.find({email: this.email}, callback);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

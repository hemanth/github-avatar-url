'use strict';
var emailRegex = require('email-regex');
var githubUsername= require('github-username');
var ghGot = require('gh-got');

module.exports = function (str, token, cb) {

	if (typeof token === 'function') {
		cb = token;
		token = {};
	}

	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	var fetchAvatar =  function (err, data) {
		if(err) return cb(err,null);
		return cb(null,data.avatar_url)
	};

	emailRegex({exact: true}).test(str) ?
	githubUsername(str,function(err,userName){
		ghGot('users/' + userName, token, fetchAvatar)
	}) : ghGot('users/' + str, token, fetchAvatar);
	
};

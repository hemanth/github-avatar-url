'use strict';
var emailRegex = require('email-regex');
var githubUsername= require('github-username');
var ghGot = require('gh-got');

module.exports = function (str) {
	
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}
	// There is some scope to mv ghGot to a func.
	return new Promise((reject, resolve) => {
		emailRegex({exact: true}).test(str) ?
		githubUsername(str)
			.then(userName => ghGot('users/' + userName, token)
			.then(resp => resolve(resp.body.avatar_url)))
			.catch(e => reject(e))
		: ghGot('users/' + str, token)
			.then(resp => resolve(resp.body.avatar_url))
			.catch(err => reject(err));
	});
};

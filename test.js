'use strict';
var assert = require('assert');
var githubAvatarUrl = require('./');

it('should return the avatar URL for given username', function (done) {
	githubAvatarUrl('hemanth', function(err,avatar) {
		assert.strictEqual(avatar,'https://avatars.githubusercontent.com/u/18315?v=3');
		done();
	});
});

it('should return the avatar URL for given email', function (done) {
	this.timeout(15000);
	githubAvatarUrl('hemanth.hm@gmail.com', function(err,avatar) {
		assert.strictEqual(avatar,'https://avatars.githubusercontent.com/u/18315?v=3');
		done();
	});
});

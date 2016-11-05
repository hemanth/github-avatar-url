'use strict';
var assert = require('assert');
var githubAvatarUrl = require('./');

it('should return the avatar URL for given username', function (done) {
  this.timeout(15000);
	githubAvatarUrl('hemanth')
  .then(avatar => {
    assert.strictEqual(avatar,'https://avatars.githubusercontent.com/u/18315?v=3');
    setTimeout(done, 500);
  })
  .catch(err => console.error);
});

it('should return the avatar URL for given email', function (done) {
  this.timeout(15000);
	githubAvatarUrl('hemanth.hm@gmail.com')
  .then(avatar => {
		assert.strictEqual(avatar,'https://avatars.githubusercontent.com/u/18315?v=3');
    setTimeout(done, 500);
	})
  .catch(err => console.error);
});

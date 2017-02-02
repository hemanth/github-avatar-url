'use strict';
import test from 'ava'
var githubAvatarUrl = require('./');


test(t => {
		return githubAvatarUrl('hemanth')
  .then(avatar => {
    t.is(avatar,'https://avatars.githubusercontent.com/u/18315?v=3');
  })
  .catch(err => console.error);
});

test(t => {
		return githubAvatarUrl('hemanth.hm@gmail.com')
  .then(avatar => {
    t.is(avatar,'https://avatars.githubusercontent.com/u/18315?v=3');
  })
  .catch(err => console.error);
});

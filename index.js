'use strict';
var emailRegex = ((m) => (m && m.default) ? m.default : m)(require('email-regex'));
var githubUsername = ((m) => (m && m.default) ? m.default : m)(require('github-username'));
var ghGot = ((m) => (m && m.default) ? m.default : m)(require('gh-got'));

module.exports = function (str, token) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  var opts = token ? { token: token } : undefined;
  return new Promise((resolve, reject) => {
    (emailRegex({exact: true}).test(str)
      ? githubUsername(str, token).then(userName => ghGot('users/' + userName, opts))
      : ghGot('users/' + str, opts)
    )
      .then(resp => resolve(resp.body.avatar_url))
      .catch(err => reject(err));
  });
};

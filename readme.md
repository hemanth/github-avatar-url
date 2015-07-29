# github-avatar-url [![Build Status](https://travis-ci.org/hemanth/github-avatar-url.svg?branch=master)](https://travis-ci.org/hemanth/github-avatar-url)

> Get github's avatar URL either by `username` or `email`.


## Install

```
$ npm install --save github-avatar-url
```


## Usage

```js
var githubAvatarUrl = require('github-avatar-url');

githubAvatarUrl('hemanth', {token:'foo'}, function(err,avatarURL){
	if(!err) console.log(avatarURL);
});

githubAvatarUrl('hemanth.hm@gmail.com', {token:'foo'}, function(err,avatarURL){
	if(!err) console.log(avatarURL);
});
```


## API

### githubAvatarUrl(input, [token], <cb>)

#### input

*Required*  
Type: `string`

Either `email` or `username`

### token

Type: `string`

GitHub [access token](https://github.com/settings/tokens/new).

Can be overriden globally with the `GITHUB_TOKEN` environment variable.


## License

MIT © [Hemanth.HM](http://h3manth.com)

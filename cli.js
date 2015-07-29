#!/usr/bin/env node
'use strict';
var meow = require('meow');
var githubAvatarUrl = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ github-avatar-url [input]',
		'',
		'Examples',
		'  $ github-avatar-url',
		'  unicorns & rainbows',
		'',
		'  $ github-avatar-url ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(githubAvatarUrl(cli.input[0] || 'unicorns'));

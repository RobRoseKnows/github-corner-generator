"use strict";

var GitHubCornerCdns = require('./get_cdn.js');
var Enum = require('./enum.js');

const corner_side = new Enum('LEFT', 'RIGHT');

class GitHubCorner {
    constructor(repo_url = "example.com", bg_color = "#151513", octocat_color = "#fff", use_cdn = false) {
    	this.repo_url = repo_url;
    	this.bg_color = bg_color;
    	this.octocat_color = octocat_color;
    	this.use_cdn = use_cdn;
    }
}

module.exports = GitHubCorner;


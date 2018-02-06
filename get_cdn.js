let cdn_list = require('./cdn_list.json');

class GitHubCornerCdns {
	getSvgUrl(bg_color, octocat_color) {
		if(bg_color.toUpperCase() in cdn_list && octocat_color.toUpperCase() in cdn_list[bg_color]) {
			return cdn_list[bg_color.toUpperCase()][octocat_color.toUpperCase()];
		} else {
			return "NONE";
		}
	}
}

module.exports = GitHubCornerCdns;
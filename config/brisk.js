//var fs = require("fs"),
//	path = require("path");

//var DEV = !(process.env.NODE_ENV == 'production');
//var deploy = (DEV) ? env.development : env.production;

module.exports = {
	oauth: {
		routes: {
			"authorize": "/oauth/authorize", // path for the authorize form, default: <host>/authorize' (get/post)
			"access_token": "/oauth/access_token", // path for the access token url endpoint, default: <host>/access_token
			"refresh_token": "/oauth/refresh_token",
			"request_token": "/oauth/request_token", // path for the request token url endpoint, default: <host>/request_token
		},
		store: "memory"
	}
}

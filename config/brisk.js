//var fs = require("fs"),
//	path = require("path");

//var DEV = !(process.env.NODE_ENV == 'production');
//var deploy = (DEV) ? env.development : env.production;

module.exports = {
	oauth: {
		// custom OAuth2 routes overriding default set connect-oauth2
		/*
		routes: {

		},
		*/
		store: "memory"
	}
}

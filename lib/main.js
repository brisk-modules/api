var Module = require("brisk").getHelper("module"),
	oauth = require("connect-oauth2");

var Main = Module.extend({
	dir : __dirname,
	oauth: oauth,
	config: function( obj ){
		var config = require("../config/brisk") // this wouldn't be required if brisk auto-loads configs from plugins
		// extend (with underscore?)
		obj.auth = config.oauth;
		return obj;
	}
});


module.exports = new Main();
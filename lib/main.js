var Module = require("brisk").getHelper("module"),
	oauth = require("connect-oauth2"),
	config = require("../config/brisk");

var Main = Module.extend({
	dir : __dirname,
	oauth: oauth,
	config: function( obj ){
		// extend (with underscore?)
		obj = config.oauth;
		return obj;
	}
});


module.exports = new Main();
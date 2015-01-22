var Module = require("brisk").getHelper("module"),
	config = require("../config/brisk"),
	oauth = require("connect-oauth2"),
	utils = require("./utils");

var Main = Module.extend({
	dir : __dirname,
	oauth: oauth,
	config: function( obj ){
		// extend (with underscore?)
		obj = utils.extend({}, config.oauth, obj);
		return obj;
	}
});


module.exports = new Main();
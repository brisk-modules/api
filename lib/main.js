var Module = require("brisk").getHelper("module"),
	oauth = require("connect-oauth2");

var Main = Module.extend({
	dir : __dirname,
	oauth: oauth
});


module.exports = new Main();
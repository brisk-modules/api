var brisk = require("brisk"),
	Parent = brisk.getBaseController("main");

var controller = Parent.extend({
	name: "api",

	options: {
		private: ["isAuthenticated"] // list of inaccessible methods
	},

	index : function(req, res){

		if( !this.isAuthenticated(req, res) ) return res.end('{}');
		//
		//res.view = "json";
		//this.render( req, res );

	},

	// custom authentication method, based on tokens
	isAuthenticated: function(req, res){
		var oauth = req.oauth || false;
		return ( oauth ) ? true : false;
	}
});


// Helpers


module.exports = controller;

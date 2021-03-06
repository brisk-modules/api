var brisk = require("brisk"),
	Parent = brisk.getBaseController("data");

var controller = Parent.extend({
	name: "api",

	options: {
		private: ["isAuthenticated", "ensureAuthenticated"] // list of inaccessible methods
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
	},

	// like isAuthenticated but with a callback... (deprecate?)
	ensureAuthenticated: function(req, res, next) {
		next = next || function(){};
		return( this.isAuthenticated(req, res) ) ? next() : res.end('{}');
	}

});


// Helpers


module.exports = controller;

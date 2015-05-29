var brisk = require("brisk"),
	Parent = brisk.getBaseController("main");

var controller = Parent.extend({
	name: "oauth",

	index : function(req, res){

		// no root available for this endpoint
		return res.redirect('/');

	},

	authorize : function(req, res){

		if( !this.isAuthenticated(req, res) ) return res.redirect('/account/login?redirect='+ encodeURIComponent( req.originalUrl) );
		//

		//add locals (validate?)
		res.locals.oauth = req.oauth.params;
		res.locals.user = req.user.id;
		// custom layout
		res.options = { layout: 'oauth' }; // fallbacks to default layout if not available
		res.view = "oauth-authorize";
		// render the page
		this.render( req, res );

	}

});


// Helpers


module.exports = controller;

var _ = require('underscore'),
	Parent = require("brisk").getClass("main");

var helper = Parent.extend({
	init: function( site ){

		this.site = site;

	},

	// returns the item with the key/secret creds
	getItem: function( model, callback ){
		// extend with your own logic
	},

	// returns the user with the username/password creds
	getUser: function( model, callback ){
		// extend with your own logic
	},

	self: function() {
		var self = this;

		return function( data, callback ){
			// key can be: client_id, client_secret, username, password
			if( data["client_id"] && data["client_secret"] ){
				self.getItem({
					key: data["client_id"],
					secret: data["client_secret"]
				}, callback );
			} else if( data["client_id"] ){
				self.getItem({
					key: data["client_id"]
				}, callback );
			} else if( data["username"] && data["password"] ){
				self.getUser({
					email: data["username"],
					token: data["password"]
				}, callback );
			}
		};
	}

});


module.exports = helper;

var brisk = require("brisk"),
	redis = require("redis"),
	Main = brisk.getClass("main");

var helper = Main.extend({

	options: {
	},

	data: {}, // convert this to a model?

	init: function( options ){

		// currently only Redis is supported, with no plans for extending support to other DBs
		// get options from site config?
		//var options = site.getConfig...

		var store = options.store || redis.createClient( options );
		this.store = store;
		// this is returning an empty object...
		return store;
	},

	self: function() {
		return this;
	},


});

// Helpers


module.exports = helper;

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
		/*
		// select a different database (with option?)
		store.select(1, function(err,res){
			// you'll want to check that the select was successful here
			// if(err) return err;
			//store.set('key', 'string'); // this will be posted to database 1 rather than db 0
		});
		//
		*/
		return store;
	},

	self: function() {
		return this;
	},


});

// Helpers


module.exports = helper;

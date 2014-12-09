var brisk = require("brisk"),
	redis = require("redis"),
	Main = brisk.getClass("main");

var helper = Main.extend({

	options: {
	},

	data: {}, // convert this to a model?

	init: function( options ){
		options = options || {};
		var db;
		//
		// get options from site config?
		//var options = site.getConfig...

		// currently only Memory & Redis is supported, with no plans for extending support to other DBs

		if( options.store == "redis" ){
			db = options.db || redis.createClient( options );
			this.db = db;
		}
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
		return db;
	},

	self: function() {
		return this;
	},


});

// Helpers


module.exports = helper;

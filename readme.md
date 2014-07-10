# Brisk: API

An extension for [Brisk](http://github.com/makesites/brisk) that creates API endpoints, authenticated with OAuth2.


## Dependencies

* [Brisk](https://github.com/makesites/brisk)
* [Connect OAuth2](https://github.com/makesites/connect-oauth2)
* [Redis](http://redis.io/)


## Install

Using npm:
```
npm install brisk-api
```

## Usage

Use the OAuth2 middleware in your express helper, as such:
```
var oauth = require("brisk-api").oauth;

oauth({
	authority: function(){...},
	store: ...
	model: ...
});
```


## Options

The oauth helper shares the same options as the [connect-oauth2](https://github.com/makesites/connect-oauth2) dependency.


## Methods

...


## Credits

Initiated by Makis Tracend ( [@tracend](http://github.com/tracend) )

Distributed through [Makesites](http://makesites.org)

Released under the [MIT license](http://makesites.org/licenses/MIT)

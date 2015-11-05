var browser = require("./browser");

var hooks = function() {

	this.BeforeFeatures(function(scenario, next) {
		browser.init().then(function() {
			next();
		});;
	});

	this.AfterFeatures(function(scenario, next) {
		browser.end().then(function() {
			next();
		})
	});
};

module.exports = hooks;

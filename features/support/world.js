var browser = require("./browser");

var World = function(){
	this.browser = browser;
};

module.exports = function() {
	this.World = World;
};

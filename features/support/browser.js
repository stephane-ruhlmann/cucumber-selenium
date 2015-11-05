var webdriver = require("webdriverio");

var webdriverOpts = {
	host: process.env.WEBDRIVER_HOST || "127.0.0.1",
	port: process.env.WEBDRIVER_PORT || 4444,
	user: process.env.BROWSERSTACK_USERNAME || "",
	key: process.env.BROWSERSTACK_ACCESS_KEY || "",
	desiredCapabilities: {
		browserName: process.env.BROWSER || "firefox"
	}
};

var browser = webdriver.remote(webdriverOpts);

module.exports = browser;

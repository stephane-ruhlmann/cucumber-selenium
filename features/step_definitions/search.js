var chai = require("chai").expect;

module.exports = function() {

	this.Given(/^I am on the home page$/, function() {
		return this.browser.url("http://duckduckgo.com");
	});

	this.When(/^I search (.*)$/, function(searchQuery) {
		return this.browser
				.setValue("#search_form_input_homepage", searchQuery)
				.click("#search_button_homepage")
	});

	this.Then(/^search results should be displayed$/, function() {
		this.browser.isExisting("#links").then(function(exists) {
			return expect(exists).to.equal(true);
		});
	});
};

Feature: Duckduckgo search

	Scenario: Simple search
		Given I am on the home page
		When I search Github
		Then search results should be displayed

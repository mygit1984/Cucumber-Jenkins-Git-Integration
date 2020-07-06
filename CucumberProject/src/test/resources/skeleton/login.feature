Feature: Login Feature File
Scenario: A valid login user scenario
Given The URL of demo web shop application
When User enters kannan2@gmail.com as username
And User enters test9999 as password
And User click on login button
Then User login shall be success along with kannan2@gmail.com displayed in next page

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/skeleton/login.feature");
formatter.feature({
  "name": "Login Feature File",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A valid login user scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The URL of demo web shop application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinition.the_URL_of_demo_web_shop_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters kannan1@gmail.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_kannan_gmail_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters test1234 as password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_test_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login shall be success along with kannan1@gmail.com displayed in next page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_login_shall_be_success(String)"
});
formatter.result({
  "status": "passed"
});
});
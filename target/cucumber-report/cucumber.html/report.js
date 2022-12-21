$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktop.feature");
formatter.feature({
  "line": 1,
  "name": "Page Functionality",
  "description": "As user I want to check all products page working as per requirement",
  "id": "page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4951841800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User can access computer page as per functionality",
  "description": "",
  "id": "page-functionality;user-can-access-computer-page-as-per-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@smoke"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I get text computers",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select Notebooks as in submenu",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 95636300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iGetTextComputers()"
});
formatter.result({
  "duration": 2288627500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iSelectNotebooksAsInSubmenu()"
});
formatter.result({
  "duration": 593760500,
  "status": "passed"
});
formatter.after({
  "duration": 675301300,
  "status": "passed"
});
formatter.before({
  "duration": 3676708400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User can check Desktops page functionality",
  "description": "",
  "id": "page-functionality;user-can-check-desktops-page-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@sanity"
    },
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on computer and desktops",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I would get text Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I sort product by Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I get display page size",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I get product title list",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1650600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iClickOnComputerAndDesktops()"
});
formatter.result({
  "duration": 2384522500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iWouldGetTextDesktops()"
});
formatter.result({
  "duration": 48679700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iSortProductByZToA()"
});
formatter.result({
  "duration": 1133226600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iGetDisplayPageSize()"
});
formatter.result({
  "duration": 187286700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsPageSteps.iGetProductTitleList()"
});
formatter.result({
  "duration": 1331710600,
  "status": "passed"
});
formatter.after({
  "duration": 750706100,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3449732900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully and get error message",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully-and-get-error-message",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can see welcome message \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter email in email Id field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1785600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 431125700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 27
    }
  ],
  "location": "LoginSteps.iCanSeeWelcomeMessage(String)"
});
formatter.result({
  "duration": 45367800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterEmailInEmailIdField()"
});
formatter.result({
  "duration": 188674800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 74777500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 333789300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iCanSeeErrorMessage()"
});
formatter.result({
  "duration": 45073800,
  "status": "passed"
});
formatter.after({
  "duration": 662970800,
  "status": "passed"
});
formatter.uri("topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "TopMenu Test",
  "description": "As user I want to login into nop commerce website",
  "id": "topmenu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2998184300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User can check all links",
  "description": "",
  "id": "topmenu-test;user-can-check-all-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check login link display display or not",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Register link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on MyAccount link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Logout link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I check logout link is display or not",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 1264700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 443379500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iCheckLoginLinkDisplayDisplayOrNot()"
});
formatter.result({
  "duration": 2136409000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 2313680900,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dbc2130463d70ded025785f8ea30032a, getElementText {id\u003d472acf2e-919d-4ded-a08b-d21bf4b63b78}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\H\\AppData\\Local\\Te...}, goog:chromeOptions: {debuggerAddress: localhost:58150}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58150/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (dbc2130463d70ded025785f8ea30032a)] -\u003e link text: Register]\nSession ID: dbc2130463d70ded025785f8ea30032a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:207)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.master.pages.HomePage.clickOnRegisterLink(HomePage.java:67)\r\n\tat com.nopcommerce.demo.master.steps.HomePageSteps.iClickOnRegisterLink(HomePageSteps.java:22)\r\n\tat ✽.And I click on Register link(topmenu.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.iClickOnLogoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.iCheckLogoutLinkIsDisplayOrNot()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 956208200,
  "status": "passed"
});
});
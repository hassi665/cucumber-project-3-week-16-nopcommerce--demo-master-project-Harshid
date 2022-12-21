package com.nopcommerce.demo.master.steps;

import com.nopcommerce.demo.master.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

    LoginPage loginPage = new LoginPage();

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {

    }


    @When("^I click on login link$")
    public void iClickOnLoginLink() {

    loginPage.clickOnLoginLink();

    }

    @And("^I can see welcome message \"([^\"]*)\"$")
    public void iCanSeeWelcomeMessage(String arg0)  {

            loginPage.getWelcomeText();

    }

    @And("^I enter email in email Id field$")
    public void iEnterEmailInEmailIdField() {

        loginPage.enterEmailId("harshid.prime1@gmail.com");

    }

    @And("^I enter password in password field$")
    public void iEnterPasswordInPasswordField() {

        loginPage.enterPassword("Harshid@123");


    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {

    loginPage.clickOnLoginButton();


    }

    @Then("^I can see error message$")
    public void iCanSeeErrorMessage() {

        loginPage.getErrorMessage();

    }
}

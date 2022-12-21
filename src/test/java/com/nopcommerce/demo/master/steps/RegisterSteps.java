package com.nopcommerce.demo.master.steps;

import com.nopcommerce.demo.master.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterSteps {

    RegisterPage registerPage = new RegisterPage();

    @When("^I click on register link$")
    public void iClickOnRegisterLink() {

        registerPage.clickOnRegisterLink();

    }


    @And("^I enters following users details$")
    public void iEntersFollowingUsersDetails() {

        registerPage.registrationForm();

    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() throws InterruptedException {

        Thread.sleep(800);
        registerPage.clickOnRegisterButton();
    }

    @And("^I can see registration successful message$")
    public void iCanSeeRegistrationSuccessfulMessage() throws InterruptedException {

        Thread.sleep(800);
        registerPage.getYourRegCompletedText();
    }

    @Then("^I can click on continue to back to the homepage$")
    public void iCanClickOnContinueToBackToTheHomepage() {

        registerPage.clickOnContinueButton();
    }


}

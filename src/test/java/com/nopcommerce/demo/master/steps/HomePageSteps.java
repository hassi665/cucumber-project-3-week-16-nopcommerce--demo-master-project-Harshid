package com.nopcommerce.demo.master.steps;

import com.nopcommerce.demo.master.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class HomePageSteps {

    HomePage homePage = new HomePage();

    @And("^I check login link display display or not$")
    public void iCheckLoginLinkDisplayDisplayOrNot() throws InterruptedException {

        Thread.sleep(2000);
        homePage.isLogInLinkDisplay();
    }

    @And("^I click on Register link$")
    public void iClickOnRegisterLink() throws InterruptedException {

        Thread.sleep(2000);
        homePage.clickOnRegisterLink();
    }

    @And("^I click on MyAccount link$")
    public void iClickOnMyAccountLink() throws InterruptedException {

        Thread.sleep(1500);
        homePage.clickOnMyAccountLink();
    }

    @And("^I click on Logout link$")
    public void iClickOnLogoutLink() throws InterruptedException {

        Thread.sleep(1500);
        homePage.clickOnLogOutLink();
    }

    @Then("^I check logout link is display or not$")
    public void iCheckLogoutLinkIsDisplayOrNot() throws InterruptedException {

        Thread.sleep(1500);
        homePage.isLogOutLinkDisplay();
    }
}

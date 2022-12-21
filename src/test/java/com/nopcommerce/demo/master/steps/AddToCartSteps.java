package com.nopcommerce.demo.master.steps;

import com.nopcommerce.demo.master.pages.BuildYourOwnComputerPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddToCartSteps {

    BuildYourOwnComputerPage buildYourOwnComputerPage = new BuildYourOwnComputerPage();

    @When("^I click on \"([^\"]*)\" product$")
    public void iClickOnProduct(String arg0) {

        buildYourOwnComputerPage.clickOnProduct();

    }

    @And("^I can see Product text \"([^\"]*)\"$")
    public void iCanSeeProductText(String arg0) {

        buildYourOwnComputerPage.getProductNameText();
    }

    @And("^I scroll down and choose processor$")
    public void iScrollDownAndChooseProcessor() {
        buildYourOwnComputerPage.selectProcessor("2.2 GHz Intel Pentium Dual-Core E2200");
    }

    @And("^I scroll down and choose of computer Ram$")
    public void iScrollDownAndChooseOfComputerRam() {
        buildYourOwnComputerPage.selectRam("8GB [+$60.00]");
    }

    @And("^I scroll down and choose of HDD$")
    public void iScrollDownAndChooseOfHDD() {
        buildYourOwnComputerPage.selectHDD("400 GB [+$100.00]");
    }

    @And("^I scroll down and select OS$")
    public void iScrollDownAndSelectOS() {
        buildYourOwnComputerPage.selectOS("Vista Home [+$50.00]");
    }

    @And("^I scroll down and select software of computer$")
    public void iScrollDownAndSelectSoftwareOfComputer() {
        buildYourOwnComputerPage.selectSoftware("Acrobat Reader [+$10.00]");
    }

    @Then("^I click on add to cart option$")
    public void iClickOnAddToCartOption() {
        buildYourOwnComputerPage.clickOnAddToCartButton();
    }
}

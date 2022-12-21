package com.nopcommerce.demo.master.steps;

import com.nopcommerce.demo.master.pages.ComputerPage;
import com.nopcommerce.demo.master.pages.DesktopsPage;
import com.nopcommerce.demo.master.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DesktopsPageSteps {

    DesktopsPage desktopsPage = new DesktopsPage();

    ComputerPage computerPage = new ComputerPage();

    HomePage homePage = new HomePage();

    @When("^I click on computer and desktops$")
    public void iClickOnComputerAndDesktops() throws InterruptedException {

        homePage.clickOnMenuTab("Computers");
        Thread.sleep(1000);
        computerPage.clickOnSubMenu("Desktops");

    }

    @And("^I would get text Desktops$")
    public void iWouldGetTextDesktops() {

        desktopsPage.getPageTitleText();

    }


    @And("^I sort product by Z to A$")
    public void iSortProductByZToA() throws InterruptedException {

        desktopsPage.selectSortBy("Name: Z to A");
        Thread.sleep(1000);
    }

    @And("^I get display page size$")
    public void iGetDisplayPageSize() {
        desktopsPage.selectDisplayPerPage("6");
    }

    @Then("^I get product title list$")
    public void iGetProductTitleList() {
        desktopsPage.selectProduct("Lenovo IdeaCentre 600 All-in-One PC");
    }


}

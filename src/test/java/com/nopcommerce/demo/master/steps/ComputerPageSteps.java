package com.nopcommerce.demo.master.steps;

import com.nopcommerce.demo.master.pages.ComputerPage;
import com.nopcommerce.demo.master.pages.DesktopsPage;
import com.nopcommerce.demo.master.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class ComputerPageSteps {

    ComputerPage computerPage = new ComputerPage();
    HomePage homePage = new HomePage();

    DesktopsPage desktopsPage = new DesktopsPage();

    @When("^I get text computers$")
    public void iGetTextComputers() throws InterruptedException {

        homePage.clickOnMenuTab("Computers");
        Thread.sleep(1000);
        String expectedMessage = "Computers";
        String actualMessage = computerPage.getPageTitleText();
        Assert.assertEquals(expectedMessage, actualMessage, "Computers page not displayed");

    }


    @Then("^I select Notebooks as in submenu$")
    public void iSelectNotebooksAsInSubmenu() {
        computerPage.clickOnSubMenu("Desktops");
        String expectedMessage = "Desktops";
        String actualMessage = desktopsPage.getPageTitleText();
        Assert.assertEquals(expectedMessage, actualMessage, "Desktops page not displayed");
    }

}



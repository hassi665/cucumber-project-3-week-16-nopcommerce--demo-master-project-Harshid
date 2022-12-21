package com.nopcommerce.demo.master.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.master.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

/**
 * Created by Jay Vaghani
 */
public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() { PageFactory.initElements(driver, this);}

    @CacheLookup
    @FindBy(xpath = " //div[@class = 'header-menu']/ul[1]/li[1]/a[1]")
    WebElement computerPageLink;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement pageTitle;

    @CacheLookup
    @FindBy(xpath = "//div[@class='category-grid sub-category-grid']//h2/a")
    List<WebElement> subMenuLinks;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Notebooks')]")
    WebElement pageSubMenuTitle;



    public void clickComputerOnLink() {

        clickOnElement(computerPageLink);
        log.info("Clicking on login link " + computerPageLink.getText() + "<br>");
    }

    public String getPageTitleText() {
        String message = getTextFromElement(pageTitle);
        Reporter.log("Get pageTitle text : " + pageTitle.getText() + "<br>");
        return message;
    }

    public void clickOnSubMenu(String subTab) {
        for (WebElement menu : subMenuLinks) {
            if (menu.getText().contains(subTab)) {
                Reporter.log("Click on '" + subTab + "' link <br>");
                clickOnElement(menu);
                break;
            }
        }
    }

    public String getSubMenuPageTitleText() {
        String message = getTextFromElement(pageSubMenuTitle);
        Reporter.log("Get pageTitle text : " + pageSubMenuTitle.getText() + "<br>");
        return message;
    }

}

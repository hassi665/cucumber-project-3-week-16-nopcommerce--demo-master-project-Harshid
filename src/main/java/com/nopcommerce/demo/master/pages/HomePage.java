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
public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @CacheLookup
    @FindBy(linkText = "Register")
    WebElement registerLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement logo;

    @CacheLookup
    @FindBy(linkText = "My account")
    WebElement myAccountLink;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Log out']")
    WebElement logOutLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='header-menu']/child::ul[1]/li/a")
    List<WebElement> topMenuList;


    public void clickOnLoginLink() {

        clickOnElement(loginLink);
        log.info("Clicking on login link " + loginLink.getText() + "<br>");
    }

    public boolean isLogInLinkDisplay() {

        boolean b = loginLink.isDisplayed();
       log.info("Checking is loginLink displayed : " + loginLink.getText() + "<br>");
        return b;
    }

    public void clickOnRegisterLink() {

        clickOnElement(registerLink);
        log.info("Clicking on register link " + registerLink.getText() + "<br>");

    }

    public void clickOnMyAccountLink() {

        clickOnElement(myAccountLink);
        log.info("Clicking on myAccountLink : " + myAccountLink.getText() + "<br>");
    }

    public HomePage clickOnLogOutLink() {

        clickOnElement(logOutLink);
        log.info("Clicking on logOutLink : " + logOutLink.getText() + "<br>");
        return new HomePage();
    }

    public boolean isLogOutLinkDisplay() {

        boolean b = logOutLink.isDisplayed();
       log.info("Checking is logOutLink displayed : " + logOutLink.getText() + "<br>");
        return b;
    }

    public boolean isLogoDisplayed() {

        boolean b = logo.isDisplayed();
       log.info("Checking logo is Displayed <br>");
        return b;
    }

    public void clickOnMenuTab(String tab) {
        for (WebElement menu : topMenuList) {
            if (menu.getText().contains(tab)) {
                clickOnElement(menu);
                log.info("Click on '" + tab + "' tab <br>");
                break;
            }
        }
    }

}

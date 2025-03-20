package com.portfolio.tests.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import java.util.List;

public class HomePage {
    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(css = "h1")
    private WebElement heading;

    @FindBy(css = "a[href='#contact']")
    private WebElement contactButton;

    @FindBy(css = "a[href='#about']")
    private WebElement learnMoreButton;

    @FindBy(css = ".nav-link")
    private List<WebElement> navigationLinks;

    @FindBy(css = "a[href='https://github.com/danijeldragojevic']")
    private WebElement githubLink;

    @FindBy(css = "a[href='https://www.linkedin.com/in/danijel-dragojevic-71636a239/']")
    private WebElement linkedinLink;

    @FindBy(css = "header a[href='https://github.com/danijeldragojevic/portfolio']")
    private WebElement repoLink;

    public HomePage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    public void navigateTo(String url) {
        driver.get(url);
        wait.until(ExpectedConditions.visibilityOf(heading));
    }

    public String getHeadingText() {
        return heading.getText();
    }

    public void clickContactButton() {
        wait.until(ExpectedConditions.elementToBeClickable(contactButton)).click();
    }

    public void clickLearnMoreButton() {
        wait.until(ExpectedConditions.elementToBeClickable(learnMoreButton)).click();
    }

    public boolean isGithubLinkPresent() {
        return wait.until(ExpectedConditions.visibilityOf(githubLink)).isDisplayed();
    }

    public boolean isLinkedinLinkPresent() {
        return wait.until(ExpectedConditions.visibilityOf(linkedinLink)).isDisplayed();
    }

    public int getNavigationLinksCount() {
        return navigationLinks.size();
    }

    public String getRepoLinkText() {
        return wait.until(ExpectedConditions.visibilityOf(repoLink)).getText();
    }

    public boolean isRepoLinkPresent() {
        return wait.until(ExpectedConditions.visibilityOf(repoLink)).isDisplayed();
    }
} 
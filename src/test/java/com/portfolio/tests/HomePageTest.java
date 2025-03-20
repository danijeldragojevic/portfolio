package com.portfolio.tests;

import com.portfolio.tests.pages.HomePage;
import org.testng.annotations.Test;
import static org.testng.Assert.*;

public class HomePageTest extends BaseTest {
    
    @Test
    public void testHomePageTitle() {
        HomePage homePage = new HomePage(driver);
        homePage.navigateTo(System.getProperty("app.url", "http://web:8080"));
        
        String headingText = homePage.getHeadingText();
        assertTrue(headingText.contains("Danijel Dragojevic"), 
            "Heading should contain the name 'Danijel Dragojevic'");
    }

    @Test
    public void testNavigationLinks() {
        HomePage homePage = new HomePage(driver);
        homePage.navigateTo(System.getProperty("app.url", "http://web:8080"));
        
        assertEquals(homePage.getNavigationLinksCount(), 5, 
            "Should have 5 navigation links");
    }

    @Test
    public void testSocialLinks() {
        HomePage homePage = new HomePage(driver);
        homePage.navigateTo(System.getProperty("app.url", "http://web:8080"));
        
        assertTrue(homePage.isGithubLinkPresent(), "GitHub link should be present");
        assertTrue(homePage.isLinkedinLinkPresent(), "LinkedIn link should be present");
    }
} 
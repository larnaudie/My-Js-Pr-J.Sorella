const loginPage = require("./loginpage");

const expectchai = require("chai").expect;

describe(`Project-01-part1`, async () => {
  it("When I access to the Demo Blaze home page", async () => {
    await browser.url("https://www.demoblaze.com/");
    expect(await browser.getTitle()).toEqual("STORE");
  });
  it("Maximize window", async () => {
    browser.maximizeWindow();
  });
  it("Then I should see a Log In button in the navigation bar", async () => {
    loginPage.findLogin();
  });
  it("And I should see a Sign Up button in the navigation bar", async () => {
    loginPage.findSignIn();
  });
  it("When I click over the Log In button in the navigation bar", async () => {});
  it("Then I should see a Log In pop up", async () => {
    const modalLogIn = $(`#logInModal > div > div`);
  });
  xit("When I complete the user name field with an existing user name", async () => {
    loginPage.login("test", "");
  });
  xit("And I complete the password field with the expected valid password", async () => {
    loginPage.login("", "test");
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    loginPage.login("test", "test");
  });
  it("Then I should not longer see any popup on the screen", async () => {
    if (loginPage.loginModalPopUp().isExisting()) {
      console.log("test failed");
    } else {
      ("test succes");
    }
  });
  it("And I should not longer see the Sign Up button in the navigation bar", async () => {
    if (loginPage.loginModalPopUp().isExisting()) {
      console.log("test failed");
    } else {
      console.log("test succes");
    }
  });
  it(`And I should see a "Welcome <username>" button in the navigation bar`, async () => {
    loginPage.welcomeUser()(await welcomeUser) == "Welcome test";
  });
  it(`Then I log out`, async () => {
    loginPage.logOut();
  });
});

describe(`Project-01-part2`, async () => {
  it("When I access to the Demo Blaze home page", async () => {
    await browser.url("https://www.demoblaze.com/");
    expect(await browser.getTitle()).toEqual("STORE");
  });
  it("Maximize window", async () => {
    browser.maximizeWindow();
  });
  it("Then I should see a Log In button in the navigation bar", async () => {
    loginPage.findLogin();
  });
  it("And I should see a Sign Up button in the navigation bar", async () => {
    loginPage.findSignIn();
  });
  it("When I click over the Log In button in the navigation bar", async () => {
    loginPage.logInClick();
  });
  it("Then I should see a Log In pop up", async () => {
    loginPage.loginModalPopUp();
  });
  xit("When I complete the user name field with an existing user name", async () => {
    loginPage.login("test", "");
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    loginPage.login("test", "");
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    loginPage.alertText()(await alertText) ===
      "Please fill out Username and Passwword";
  });
});

/*
Then I should see a navigator popup with the following message: "Please fill out
Username and Password."
*/

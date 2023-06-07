const loginPage = require("../pageobjects/loginpage");
//import LoginPage from "../pageobjects/loginpage.js";

describe("Project-01-part1", async () => {
  it("When I access to the Demo Blaze home page", async () => {
    await browser.url("https://www.demoblaze.com/");
    expect(await browser.getTitle()).toEqual("STORE");
  });

  it("Maximize window", async () => {
    await browser.maximizeWindow();
  });
  it("Then I should see a Log In button in the navigation bar", async () => {
    await loginPage.findLogIn;
  });
  it("And I should see a Sign Up button in the navigation bar", async () => {
    await loginPage.findSigIn;
  });
  it("When I click over the Log In button in the navigation bar", async () => {
    await loginPage.logInClick;
  });
  it("Then I should see a Log In pop up", async () => {
    await loginPage.modalLogIn;
  });
  it("When I complete the user name field with an existing user name", async () => {
    await loginPage.login("test", "test");
  });
  it("And I complete the password field with the expected valid password", async () => {
    await expect(loginPage.inputUsername.toHaveTextContaining("test"));
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    await expect(loginPage.inputPassword.toHaveTextContaining("test"));
  });
  it("Then I should not longer see any popup on the screen", async () => {
    if ((await loginPage.modalLogIn).isExisting()) {
      console.log("test failed");
    } else {
      ("test succes");
    }
  });
  it("And I should not longer see the Sign Up button in the navigation bar", async () => {
    if ((await loginPage.findLogIn).isExisting()) {
      console.log("test failed");
    } else {
      console.log("test succes");
    }
  });
  it(`And I should see a "Welcome <username>" button in the navigation bar`, async () => {
    await expect(
      loginPage.welcomeUser.toHaveTextContaining(
        `welcome ${await loginPage.inputUsername}`
      )
    );
  });
  it(`Then I log out`, async () => {
    await loginPage.logOut;
  });
});

describe(`Project-01-part2`, async () => {
  it("When I access to the Demo Blaze home page", async () => {
    await browser.url("https://www.demoblaze.com/");
    expect(await browser.getTitle()).toEqual("STORE");
  });
  it("Maximize window", async () => {
    await browser.maximizeWindow();
  });
  it("Then I should see a Log In button in the navigation bar", async () => {
    await loginPage.findLogIn;
  });
  it("And I should see a Sign Up button in the navigation bar", async () => {
    await loginPage.findSigIn;
  });
  it("When I click over the Log In button in the navigation bar", async () => {
    await loginPage.logInClick;
  });
  it("Then I should see a Log In pop up", async () => {
    await loginPage.modalLogIn;
  });
  it("When I complete the user name field with an existing user name", async () => {
    await loginPage.login("test", "");
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    await expect(loginPage.inputPassword.toHaveTextContaining("test"));
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    (await loginPage.alertText) === "Please fill out Username and Passwword";
  });
});

/*
Then I should see a navigator popup with the following message: "Please fill out
Username and Password."
*/

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
    const login = findLogin;
  });
  it("And I should see a Sign Up button in the navigation bar", async () => {
    const sigin = findSignIn;
  });
  it("When I click over the Log In button in the navigation bar", async () => {
    const logInClick = (await $(`//*[@id="login2"]`)).click();
  });
  it("Then I should see a Log In pop up", async () => {
    const modalLogIn = $(`#logInModal > div > div`);
  });
  it("When I complete the user name field with an existing user name", async () => {
    const user = $(`//*[@id="loginusername"]`);
    await (await user).setValue(`test`);
  });
  it("And I complete the password field with the expected valid password", async () => {
    const pass = $(`//*[@id="loginpassword"]`);
    await (await pass).setValue(`test`);
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    const submitBtn = $(`//*[@id="logInModal"]/div/div/div[3]/button[2]`);
    await (await submitBtn).click();
  });
  it("Then I should not longer see any popup on the screen", async () => {
    if ($(`#logInModal > div > div`).isExisting()) {
      console.log("test failed");
    } else {
      ("test succes");
    }
  });
  it("And I should not longer see the Sign Up button in the navigation bar", async () => {
    if ($("#signin2").isExisting()) {
      console.log("test failed");
    } else {
      console.log("test succes");
    }
  });
  it(`And I should see a "Welcome <username>" button in the navigation bar`, async () => {
    const welcomeUser = $(`//*[@id="nameofuser"]`);
    (await welcomeUser) == "Welcome test";
  });
  it(`Then I log out`, async () => {
    const logOut = (await $(`//*[@id="logout2"]`)).click();
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
    const login = $("#login2");
  });
  it("And I should see a Sign Up button in the navigation bar", async () => {
    const sigin = $("#signin2");
  });
  it("When I click over the Log In button in the navigation bar", async () => {
    const logInClick = (await $(`//*[@id="login2"]`)).click();
  });
  it("Then I should see a Log In pop up", async () => {
    const modalLogIn = $(`#logInModal > div > div`);
  });
  it("When I complete the user name field with an existing user name", async () => {
    const user = $(`//*[@id="loginusername"]`);
    await (await user).setValue(`test`);
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    const submitBtn = $(`//*[@id="logInModal"]/div/div/div[3]/button[2]`);
    await (await submitBtn).click();
  });
  it("And I click over the Log In button in the Log In popup", async () => {
    const alertText = await browser.getAlertText();
    (await alertText) === "Please fill out Username and Passwword";
  });
});

/*
Then I should see a navigator popup with the following message: "Please fill out
Username and Password."
*/

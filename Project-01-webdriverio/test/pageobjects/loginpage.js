const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $(`//*[@id="logInModal"]/div/div/div[3]/button[2]`);
  }

  get findLogIn() {
    return $("#login2");
  }

  get findSigIn() {
    return $("#signin2");
  }

  get logInClick() {
    return $(`//*[@id="login2"]`).click();
  }

  get modalLogIn() {
    return $(`#logInModal > div > div`);
  }

  get welcomeUser() {
    return $(`//*[@id="nameofuser"]`);
  }

  get logOut() {
    return $(`//*[@id="logout2"]`).click();
  }

  get alertText() {
    return browser.getAlertText();
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();

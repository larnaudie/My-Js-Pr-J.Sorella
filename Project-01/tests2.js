const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");

async function project_1_part2() {
  let driver = await new Builder().forBrowser("chrome").build();

  //When I access to the Demo Blaze home page
  await driver.get("https://www.demoblaze.com/");

  //maximizar pestaña
  await driver.manage().window().maximize();
  //Then I should see a Log In button in the navigation bar
  await driver.findElement(By.id("login2"));

  if (await driver.findElement(By.id("login2"))) {
    console.log("Test #1 success, I should see a Log In button");
  } else {
    console.log("Test #1 failed, I can not see a Log In button");
    return;
  }

  // And I should see a Sign Up button in the navigation bar
  await driver.findElement(By.id("signin2"));

  if (await driver.findElement(By.id("signin2"))) {
    console.log("Test #2 success, I should see a Sign Up");
  } else {
    console.log("Test #2 failed, I can not see a Sign Up");
    return;
  }

  //When I click over the Log In button in the navigation bar

  await driver.findElement(By.id("login2")).click();

  //Then I should see a Log In pop up
  if (await driver.findElement(By.className("modal-content"))) {
    console.log("Test #3 success, I click over the Log In button");
  } else {
    console.log("Test #3 failed, I can not do click over the Log In button");
    return;
  }

  // When I complete the user name field with an existing user name
  const user1 = await driver
    .findElement(By.id("loginusername"))
    .sendKeys("test");

  //And I click over the Log In button in the Log In popup

  const log1 = await driver
    .findElement(By.xpath(`//*[@id="logInModal"]/div/div/div[3]/button[2]`))
    .click();

  //Then i Should see a navigator popup with the following message: "Please fill out Username and Password

  //Intento 2:
  await driver.wait(until.alertIsPresent());
  const alert = driver.switchTo().alert();
  console.log(await alert.getText());

  if ((await alert.getText()) === "Please fill out Username and Password.") {
    console.log("Test #4 succes, alert is present");
    await alert.accept();
  } else {
    console.log("Test #4 failed, alert is not present");
  }
}

project_1_part2();

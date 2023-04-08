/**Lo primero que hicismo fue abrir el visual studio code,
 * Luego abrimos la carpeta donde queremos hacer el tutorial, yo la llame selenium curse
 * Luego adentro de ella llamamos a la terminal ctl+shift+p,
 * Alli lo primero que hicimos fue instalar node js, npm y luego selenium
 * Para instalar el node JS priemero vamos a su pagina web y lo descargamos e instalamos,
 * luego instalamos el npm escribienod en la terminal: npm init -y, lo que hace esl inicializar 
  npm y a lo que pregunte le damos -y que es yes, vemos que se agrega el package.json,
 * Luego vamos a instalar el selenium-driver y el chrome driver, el gekodriver es para firefox, 
  asique en la terminal escribimos: npm install --save selenium-webdriver chrome driver,
 *Vamos a ver como se nos agrega una carpeta node_modules, son modulos que vamos a estar usando en el codigo.
 *vamos a crear una carepta tests y dentro un archivo test.js
 *Luego en la terminal escribiremos cd tests pera setear el camino de la carpeta.
 *Ahora vamos a escribir codigo:
 */

/* ¡¡¡¡¡¡¡¡¡¡¡¡¡SE ROMPE SI CORRO LOS DOS AL MISMO TIEMPO!!!!!!!!!!! */
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function project_1_part1() {
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
  //And I complete the password field with the expected valid password
  const pass1 = await driver
    .findElement(By.id("loginpassword"))
    .sendKeys("test");
  //And I click over the Log In button in the Log In popup

  const log1 = await driver
    .findElement(By.xpath(`//*[@id="logInModal"]/div/div/div[3]/button[2]`))
    .click();

  //And I complete the password field with the expected valid password
  if (await driver.findElement(By.xpath(`//*[@id="nameofuser"]`))) {
    console.log("Test #4 success, User can access");
  } else {
    console.log("Test #4 failed, User can not access");
  }

  //Then I should not longer see any popup on the screen
  await driver.findElement(By.xpath(`//*[@id="logInModal"]/div/div`));

  if (await driver.findElement(By.xpath(`//*[@id="logInModal"]/div/div`))) {
    console.log("Test #5 success, I can not see a pop up");
  } else {
    console.log("Test #5 failed, I can see a pop up");
    return;
  }

  //And I should not longer see the Sign Up button in the navigation bar
  await driver.findElement(By.xpath(`//*[@id="signin2"]`));

  if (await driver.findElement(By.xpath(`//*[@id="signin2"]`))) {
    console.log("Test #6 success, I can not see a Sign Up");
  } else {
    console.log("Test #6 failed, I should see a Sign Up");
    return;
  }

  //And I should see a "Welcome <username>" button in the navigation bar
  await driver.findElement(By.xpath(`//*[@id="nameofuser"]`));
  if (
    (await driver.findElement(By.xpath(`//*[@id="nameofuser"]`))) ===
    `Welcome ${await driver.findElement(By.id("loginusername"))}`
  ) {
    console.log("Test #10 success, I am in");
  } else {
    console.log("Test #10 failed, I am not in");
    return;
  }
}
project_1_part1();

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

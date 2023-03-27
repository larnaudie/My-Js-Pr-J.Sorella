const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_case2() {
  let driver = await new Builder().forBrowser("chrome").build();

  /**Aca estamos accediendo a github, el resto es como tests2.js */
  await driver.get("https://github.com");

  /**Aca empezamos a buscar el elemento Sign In mediante una busqueda partialLinkText que
   * lo que hace es buscar un string que contenga ese string, y cuando lo encuentra le da click
   **/
  await driver.findElement(By.partialLinkText("Sign in")).click();

  /** Una vez que hizo click en el boton nos enviara a una nueva pagina, por lo que obtendremos
   *su titulo al que tambien vamos a mostrar ese titulo en la consola.*/
  console.log(await driver.getTitle());

  /**Ahora vamos a testear ese titulo, asi que si ese titulo es el que esperamos que sea
   * le vamos a decir que imprima en la consola; "test #q success" sino "failed"
   */
  if ((await driver.getTitle()) === "Sign in to GitHub") {
    console.log("Test #1 success");
  } else {
    console.log("Test #1 failed");
    return;
  }

  /* Ahora vamos a buscar dos elementos mas por su nombre! en este caso el nombre login y cuando lo encuentre escribira SteamCode
(que refiere al nombre de la pagina de youtube el tutorial, le puedo decir que escriba pablolarnaudie)*/
  await driver.findElement(By.name("login")).sendKeys("SteamCode");
  /**Aca hara lo mismo pero con la contraseña, le escribiremos asteriscos, una vez que escriba steamcode y los astericos,
   * le diremos que presione la tecla enter (key.return)*/
  await driver.findElement(By.name("password")).sendKeys("****", Key.RETURN);

  /**Aca la conicion indica que si en el driver encuentra el elemento por el nombre de clase "flash-close js-flash-close" y se muestra (isDisplayed()
   * entonces le diremos que imprima en la consola que fue satisfactorio el test case.
   * ACALARACION:
   * Para saber el nombre de className exacto, podremos ir a la pagina web, inspect element, buscar en html el nombre de la clase
   * que nos interesa.
   * */

  if (
    await driver
      .findElement(By.className("flash-close js-flash-close"))
      .isDisplayed()
  ) {
    console.log("Test #2 success");
  }

  driver.quit();
}

test_case2();

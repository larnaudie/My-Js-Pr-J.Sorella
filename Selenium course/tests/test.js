/**Lo primero que hicismo fue abrir el visual studio code,
 * Luego abrimos la carpeta donde queremos hacer el tutorial, yo la llame selenium curse
 * Luego adentro de ella llamamos a la terminal ctl+shift+p,
 * Alli lo primero que hicimos fue instalar node js, npm y luego selenium
 * Para instalar el node JS priemero vamos a su pagina web y lo descargamos e instalamos,
 * luego instalamos el npm escribienod en la terminal: npm init -y, lo que hace esl inicializar npm y a lo que pregunte le damos -y que es yes, vemos que se agrega el package.json,
 * Luego vamos a instalar el selenium-driver y el chrome driver, el gekodriver es para firefox, asique en la terminal escribimos: npm install --save selenium-webdriver chrome driver,
 *Vamos a ver como se nos agrega una carpeta node_modules, son modulos que vamos a estar usando en el codigo.
 *vamos a crear una carepta tests y dentro un archivo test.js
 *Luego en la terminal escribiremos cd tests pera setear el camino de la carpeta.
 *Ahora vamos a escribir codigo:
 */

/**Aca estaremos llamando al paquete instalado de selenium y su webdriver,
 * entre corchetes colocamos las funciones que vamos autilizar */
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver"); //llamamos al driver que estaremos usando

/**Comenzaremos a escribir el codigo ahora si, esperando una promesa
 * Al codigo le llamaremos test_case
 */
async function test_case() {
  /*Ahora crearemos una variable let que tome los parametros del objeto Builder,
   *tiene la palabra await por que es algo que pide y lleva tiempo la respuesta
   Luego llama a la funcion forBrowser que me pide un navegador y luego le diremos que accedemos
   a la propiedad build de forBrowser que tambien es otro metodo.*/
  let driver = await new Builder().forBrowser("chrome").build();

  /**Ahora tendremos que llamar a la pagina que queremos testear por ejemplo, google.com */
  await driver.get("https://google.com");

  /**Ahora vamos a decirle que elemento queremos que encuentre mediante la funcion findElement,
   * Luego que lo encuentre por su nombre "q" (refiere al campo donde escribimos informacion) y cuando la encuentre que envie "Hello World!" y
   * que al final presione la tecla enter=RETURN.
   */
  await driver.findElement(By.name("q")).sendKeys("Hello World!", Key.RETURN);
  /*Si hechamos un vistazo vemos que estamos usando la funcion By, Key y Builder, ya podriamos correrlo colocanto driver-quit,
   
  pero vamos a colocar un comando para que espere unos segundos, (10) 10000 ms*/
  setInterval(function () {
    //Esto lo qe hace es cerrar todas las pruebas que esten terminadas y cierra la pestaña
    driver.quit();
  }, 10000);
}

//Ahora vamos a correrlo
test_case();
//Por ultimo vamos a la terminal y le escribimos: node tests.js

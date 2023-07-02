/*
Aca continuamos explicando
Vamos a crear un bloque describe() que es en el lenguaje mocha para especificar los test cases, entre comillas va el nombre del test case y luego una funcion async
 */

describe("haremos un login test", () => {
  /**lo primero que haremos sera llamar a un it block, que pertenece al lenguaje mocha, que lo que hace es, primero, crear una descripcion en string y luego en una funcion especificar los pasos del test case
   *
   No precisamos especificar aca que es async por que ya lo pusimos antes y si no lo pusimos antes lo ponemos ahora*/
  it("debera validar el titulo de la pagina", async () => {
    /*Cuando colocamos un punto no tenemos una sugerencia automatica, 
    podemos buscar en la documentacion como activarlo, buscamos en search de la
     web autocompletion, podemos elegir entre intellij o visual studio code, seleccionamos, VS code.
    https://webdriver.io/docs/autocompletion/#visual-studio-code-vscode, dice que si usamos
     vanilla Javascript creemos una direccion jsconfig.json y le copiemos:
     {
    "compilerOptions": {
        "types": [
            "node",
            "@wdio/globals/types",
            "@wdio/mocha-framework"
        ]
    }}
    ES IMPORTANTE CREARLO FUERA DE TODAS LAS CARPETAS, SOLO EN LA MISMA DIRECCION DONDE ESTAN LOS OTROS JSON,
     en eldirectorio del proyecto.
    Vamos a agregearle debajo de "@wdio/mocha-framework"
    una linea de codigo: "expect-webdriverio"
    Ahora, abrimos y cerramos login.specs.js para actualizarlo y se supone que nos anda el autogenerador de sugerencia. 
    */
    //Aca estaremos haciendo las pruebas.
    await browser.url("https://the-internet.herokuapp.com/login");
    //Ahora aplicaremos un assertion, primero llamamos al await.
    expect(await browser.getTitle()).toEqual("The Internet");
    //Existe otro comino;
    //expect(browser).toHaveTitle(`The Internet`);

    /*para guardarlo haremos una variable const user
    luego para escribir un localizador de elementos necesitamos decir si
     es un elemento simple llamarlo con un $ y luego el elemento que lo
      localiza, css, xpath, id etc, utilizamos un css.*/
    const user = $("#username");
    const pass = $("#password");
    //Aca usamos un xpath
    const submitBtn = $(`//*[@id="login"]/button/i`);
    //Esta constante que crearemos es para almacenar el mensaje que ingresamos correctamente
    const flash = $("#flash");

    //Ahora precisamos hacer enter a los elementos e ingresarlos.
    await (await user).setValue(`tomsmith`);
    await (await pass).setValue(`SuperSecretPassword!`);
    await (await submitBtn).click();

    //Ahora buscamos si estamos dentro, getText() se puede usar pero tenemos toHaveTextConataining en webdriverio
    await expect(flash).toHaveTextContaining(`You logged into a secure area!`);
  });
});
/**
 * IMPORTANTE, a mi me funciono npm run wdio, pero lo siguiente no me funciono.
 *
 * IMPORTANTE, para correr el test abrimos la terminal y decimos npm test
 * si tenemos dos archivos adentro de specs va a correr los dos archivos que estan
 * adentro de la carpeta specs, si abrimos el archivo wdio.conf.js, vamos a la parte de specs,
 * en esa seccion esta definido que archivos va a correr, cualquier archivo que termine en .js que esté dentro de specs lo va a correr.
 */
//le podemos especificar dentro de allí que corra solo los que sean login.js asi; specs: ["./test/specs/**/login.js"]
//Pero lo dejaremos como estaba asi; specs: ["./test/specs/**/*.js"], y lo haremos desde la terminal
/**En la terminal podemos especificar que archivo queremos que se ejecute asi:
 *
 * npm test -- --spec ./test/specs/login.specs.js
 *
 * Lo que dice ali es: npm test; CORRE ESTE COMANDO (QUE ESTA ESPECIFICADO EN EL PACKAGE.JSON)
 *luego cuando digo spec, estoy definiendo solo un archivo especifico, y despues de eso le digo
 que vaya a test, a specs y acceda al archivo llamado login.specs.js
 */

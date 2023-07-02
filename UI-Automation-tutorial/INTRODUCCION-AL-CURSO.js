/*
Vamos a instalar las dependencias
npm init : me crea package.json, le cambie author por pablo y el git repository:"https://github.com/larnaudie/My-Javascript-practices/tree/main/WebDriverIo-course/UI-Automation-tutorial"
npm install webdriverio --save : me crea node_modules y package-lock.json; podemos ignoarar el modules si tenemos un proyecto compartido.
npm i @wdio/cli --save : es para instalar y configurar el framework. 
npx wdio config : Esto nos instalara y configurara la instalacion del wdio con preguntas.

---------------------------------------------------------------------------------------------------------------------------------
===============================
🤖 WDIO Configuration Wizard 🧙
===============================

? A project named "ui-automation-tutorial" was detected at 
"C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cursos 
Gloabnt\My-Javascript-practices\WebDriverIo-course\UI-Automation-tutorial", correct? Yes
? Where should your tests be launched? local - for e2e testing of web and mobile applications
? Where is your automation backend located? On my local machine
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? Yes */
//? Where should these files be located? ./test/specs/**/*.js
/*? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cursos 
Gloabnt\My-Javascript-practices\WebDriverIo-course\UI-Automation-tutorial\test\pageobjects\**\*.js  
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup?
? Do you want to add a service to your test setup? chromedriver
? What is the base url? http://localhost    
? Do you want me to run `npm install` Yes

--------------------------------------------------------------------------------------------------------

NOS CREA UNA CARPETA test, CON dos carpetas pageobjects y specs, alli tendremos nuestros archivos para principantes y entender como funciona webdriverio
NOS CREA UN ARCHIVO SUELTO LLAMADO WDIO.CONF.JS
UNA VEZ QUE SE INSTALA NOS DICE:

🤖 Successfully setup project at C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cursos Gloabnt\My-Javascript-practices\WebDriverIo-course\UI-Automation-tutorial 🎉

Join our Matrix community and instantly find answers to your issues or queries. Or just join and say hi 👋! 
  🔗 https://matrix.to/#/#webdriver.io:gitter.im

Visit the project on GitHub to report bugs 🐛 or raise feature requests 💡:
  🔗 https://github.com/webdriverio/webdriverio

To run your tests, execute:
$ cd C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cursos Gloabnt\My-Javascript-practices\WebDriverIo-course\UI-Automation-tutorial
$ npm run wdio

 -------------------------------------------------------------------------------------------------------------------------

IMPORTANTE, en la version de webdriverio 7 viene instalado el uso de la asincronia
si estas usando una version del node.js 16 o superior (tenemos 18 de momento) chrome no
soporta el modo sincronico, si estamos comenzando un nuevo poyecto se recomineda que usemos
el modo async, entonces @wdio/sync no se puede usar para chromium.

El curso va a ser con sync, entonces tendremos que transcribir todo a async/await.

*/

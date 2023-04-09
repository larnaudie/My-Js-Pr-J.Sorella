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
? Where should your tests be launched? browser - for unit and component testing in the browser  
                                                                                                rsos  
? Which framework do you use for building components? Other
? Where is your automation backend located? On my local machine
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? Yes
? Where should these files be located? (C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cu
? Where should these files be located? 
C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cursos                                    
Gloabnt\My-Javascript-practices\WebDriverIo-course\UI-Automation-tutorial\src\**\*.test.js    
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup?
? Do you want to add a service to your test setup? chromedriver
? Do you want me to run `npm install` Yes

--------------------------------------------------------------------------------------------------------
NOS CREA UNA CARPETA SRC, CON UN ARCHIVO COMPONENT.TEST.JS
NOS CREA UN ARCHIVO SUELTO LLAMADO WDIO.CONF.JS
UNA VEZ QUE SE INSTALA NOS DICE:

🤖 Successfully setup project at C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cursos 
Gloabnt\My-Javascript-practices\WebDriverIo-course\UI-Automation-tutorial 🎉

Join our Matrix community and instantly find answers to your issues or queries. Or just join and say hi 👋!
  🔗 https://matrix.to/#/#webdriver.io:gitter.im

Visit the project on GitHub to report bugs 🐛 or raise feature requests 💡:
  🔗 https://github.com/webdriverio/webdriverio

To run your tests, execute:
$ cd C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cursos Gloabnt\My-Javascript-practices\WebDriverIo-course\UI-Automation-tutorial
$ npm run wdio    ---> ella usa npx wdio run wdio.conf.js

PS C:\Users\pablo\OneDrive\Desktop\Estudios\Programacion\Cursos Gloabnt\My-Javascript-practices\WebDriverIo-course\UI-Automation-tutorial>

IMPORTANTE, en la version de webdriverio 7 viene instalado el uso de la asincronia
si estas usando una version del node.js 16 o superior (tenemos 18 de momento) chrome no
soporta el modo sincronico, si estamos comenzando un nuevo poyecto se recomineda que usemos
el modo async, entonces @wdio/sync no se puede usar para chromium.

El curso va a ser con sync, entonces tendremos que transcribir todo a async/await.

*/

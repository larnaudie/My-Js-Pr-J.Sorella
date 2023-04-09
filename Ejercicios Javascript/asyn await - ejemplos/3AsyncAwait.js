async function requestHandler(req, res) {
  /*Ahora vamos a manejar la consulta: 
    ¿Como lo manejo sin usar promesas? usando Async
    AWAIT: nos dice que el codigo que continua es un codigo que va a tomar tiempo, 
    antes lo manejabamos mediante un callback o una promesa, ahora con await es mas
     facil decir que el codigo que esta por escribirse llevara tiempo de procesarse.
     IMPORTANTE! Await funciona si la funcion tiene un precedente async.

    /*¿Como manejamos los errores en async/await?
    Tenemos las palabras claves TRY y CATCH, Try: trata de ejecutar un codigo si falla lo captura catch.
    Tenemos que separar entonces nuestro codigo con try y catch*/
  try {
    /*Podemos crear una varaible const user que reciba y almacene esa informacion procesada, 
    podemos crear o no una variable para almacenarlo
    Las consultas van a ser igual que en las promesas anteriores, solamente que ahora cada vez
    que una parte del codigo necesita una respuesta que lleve tiempo le colocaremos la palabra await,
    tambien podemos o no almacenarlo en una variable*/
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);

    /*Ahora lo que quiero hacer luego de obtener las id de las tareas le digo que quiero hacer, que sera actualizarlas:*/
    tasks.complete = true;

    /*Ahora para save tenemos que llamarlo con await por que es una funcion y la misma pide datos a la base de datos
   y su respuesta demora, es decir, es asincrono, no es necesario guardarlo, pero podria hacerlo si quiero.*/
    await tasks.save();
    res.send("task completed");
  } catch (e) {
    /* COMO MENCIONAMOS, ACA COLOCAMOS LA PARTE DEL CODIGO QUE ESTA FALLANDO, podemos manejar el error, enviarlo al servidor,
     catch requiere colocar un parametro.*/
    res.send(e);
  }
}

/* Esto es muy utilitazado para las API, bases de datos (mongoDB en este caso), Node.js y manipulacion de archivos, modificarlos,
crearlos, todas las operaciones asincronas o que lleven tiempo de ejecucion se utilizara estas funciones async/await.

Existe Async/Await Asincronico secuencual y de manera paralela, explicadas en la siguiente carpeta. */

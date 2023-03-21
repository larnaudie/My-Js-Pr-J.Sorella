/*Si estamos creand un servidor desde node.js en el cual manejamos peticiones de usuarios y intentaremos responder algo, para ello debemos consultar a la base de daots cambiar datos,
para ello debemos crear una funcion que recibe peticion de usuario y la info que envie el servidor a navegadores llamada rest
*/

function requestHandler(req, res) {
  User.findById(req.userId, function (err, user) {
    if (err) {
      res.send(err);
    } else {
      Tasks.findById(user.tasksId, function (err, tasks) {
        if (err) {
          return res.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function (err) {
            if (err) {
              return res.send(err);
            } else {
              res.send("task Completed");
            }
          });
        }
      });
    }
  });
}

/*Las promesas evitan ese codigo que se va hacia la derecha, vamos a reescribir el codigo pero con una promesa*/

function requestHandler2(req, res) {
  /*1) Busco un usuario por el id, a travez del id que me envia el usuario mediante el servidor:*/
  User.findById(req.userId)
    /*este then significa "entonces" o "cuando termine de ejecutarse User.findById(req.userId) ir a:"
     y manejara una funcion (por que espera respuesta del servidor) que adentro capture un true, las cosas buenas
     , si no es lo esperado comienza la funcion con catch para agarrar el error*/

    /*2) Una vez lo encuentre (entra el primer then) hara una consulta a la base de datos*/
    .then(function (user) {
      /*aca vamos a manejar el dato positivo en la funcion, then funciona cuando todo va bien.

      3) Ahora a la base de datos consultamos por Tasks buscandolo por el id del usuario que buscamos antes, y obtenemos la propiedad tasksid
      esto es una operacion asyncrona, tomara tiempo de la base de datos, asique vamos a intentar continuarla con una promesa
       asique necesitara un return y luego generaremos una funcion que tome las tareas devueltas por la consulta: return Tasks.findById(user.tasksId);*/
      return Tasks.findById(user.tasksId);
    })

    /*4) ahora actualizamos la tarea, una vez que la encuentre haremos lo siguiente, una promesa: */
    .then(function (tasks) {
      /*Si esperamos otro valor positivo volvemos a escribir then, */
      /*5) de las tareas del usuario voy a actualizar su estado completed a true si es que todo sale bien*/
      tasks.completed = true;
      /*6) Recordar que precisamos guardarlo y al estar llamando a la base de datos del servidor va a demorar tiempo asique hacemos una promesa con return */
      return tasks.save();
    })
    /*7) Vamos a continuarlo con otra promesa, es que devuelva al navegador un mensaje de que la tarea fue completada, si ningun then se cumple y hay un error
    pasara a la parte del catch. */
    .then(function () {
      res.send("Tasks Completed");
    })
    /*Este catch captura los errores tanto del primer como del ultimo then, por eso es errors el parametro y no lo llamamos error o err*/
    .catch(function (errors) {
      //aca manejamos la info del error y le decimos que capture el error y lo mande, asi:
      res.send(errors);
    });
}
/* TODO ESTO TAMBIEN SE PUEDE USAR CON ASYNC AWAIT QUE ES MUCHO MAS FACIL QUE LAS PROMESAS */

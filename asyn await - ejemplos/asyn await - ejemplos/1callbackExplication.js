/*Si estamos creand un servidor desde node.js en el cual manejamos peticiones de usuarios y intentaremos responder algo, para ello debemos consultar a la base de daots cambiar datos,
para ello debemos crear una funcion que recibe peticion de usuario y la info que envie el servidor a navegadores llamada rest
*/

function requestHandler(req, res) {
  /*supongamos que estamos conectados a base de datos y la queremos consultar, imaginemos que estamos usando MongoDB y tengo una consulta a user
  Aca le pedimos a user que encuentre la peticion mediante el user Id*/

  //User.findById(req.userId)

  /*En node.js no funciona asi, se maneja asyncronico,
    el codigo linea 8 toma tiempo de ejecucion y node.js no espera a que termine, 
    dice que esto va a ser ejecutado por la base de datos y cuando termine me enviara
     repsuesta de la info, esto se escribe con callbacks, agregando una funcion que 
     reciba un error o la respuesta del usuario encontrado a partir de la consulta.
     Entonces primero recibe el requerimiento por el id del usuario y lo procesa en error o info.*/
  User.findById(req.userId, function (err, user) {
    /*Cualquier codigo o funcion que dependa de esta otra funcion debemos escribirlo aca*/
    if (err) {
      // si hay un error que lo muestre.
      res.send(err);
    } else {
      /*si no hay error que continue con otras tareas, por ejemplo volver a consultar por otro dato, ej:tasks
      Esta nueva consulta va a tomar tiempo, por ende lo manejamos a travez de una funcion.*/
      Tasks.findById(user.tasksID, function (err, tasks) {
        if (err) {
          return res.send(err);
          //queremos que nos responda el error
        } else {
          //sino ocurre error vamos a intentar actualizarlo, modificarlo a true
          tasks.completed = true;
          tasks.save(function (err) {
            //para guardarlo es un proceso de la base de datos, llevaria tiempo y entonces precisa una operacion una funcion.
            //cada vez que utilicemos una biblioteca es importante leer la documentacion para saber que devuelve cada metodo, que valores devuelven.
            if (err) {
              return res.send(err);
            } else {
              //si no hay error devuelve completado.
              res.send("task Completed");
            }
          });
        }
      });
    }
  });
}
/*El codigo es dificil de leer y es una consulta sencilla, esto se le conoce como la piramide de la muerte, lo importante aca es entender el concepto de callback
Vamos ahora a entender el concepto de promesas en el archivo 2promisesExplication.js*/

import {
  getLocalList,
  setLocalList
} from "../utils/localStorage";

let personajes = [];

function guardadosController() {
  personajes = getLocalList("Personajes");

  for (let i = 0; i < personajes.length; i++) {
    const personaje = personajes[i];
    $("#tableBody").append(
      "<tr><td> " +
      i +
      "</td><td>" +
      personaje.nombre +
      "</td><td>" +
      personaje.genero +
      "</td><td>" +
      personaje.altura +
      "</td><td>" +
      personaje.peso +
      "</td><td>" +
      personaje.ojos +
      "</td><td><button class = 'btn btn-danger'>Elminar</button></td></tr>"
    );
  }
}

$("body").on("click", ".btn-danger", function () {
  let fila = $(this)
    .parent()
    .parent();

  let nombre = fila.children()[1].innerHTML;

  var posicionAEliminar;

  for (let i = 0; i < personajes.length; i++) {
    var eliminarPersonaje = personajes[i];
    if (nombre === eliminarPersonaje.nombre) {
      posicionAEliminar = i;
    }
  }

  personajes.splice(posicionAEliminar, 1);
  setLocalList("Personajes", personajes);

  fila.hide();
});

export default guardadosController;
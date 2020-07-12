import {
	setLocalList,
	getLocalList
} from "../utils/localStorage";
var personajes = [];

function characterListValidation(nameParam) {
	if (personajes.length === 0) return false;
	for (let i = 0; i < personajes.length; i++) {
		let savedCharacter = personajes[i];
		if (savedCharacter.nombre === nameParam) {
			return true;
		}
	}
	return false;
}

function peopleController() {
	var index = 1;
	var numeroPagina = 2;
	personajes = getLocalList("Personajes");
	$("#seeMore").click(function () {
		getData(numeroPagina);
		numeroPagina++;
		if (numeroPagina === 10) {
			$(this).attr("disabled", true);
		}
	});
	getData(1);

	function getData(numeroDePagina) {
		var request = $.ajax({
			url: "https://swapi.co/api/people/?page=" + numeroDePagina,
			method: "GET"
		});
		request.done(function (data) {
			console.log("Respuesta: ", data);
			var datos = data.results;
			for (let i = 0; i < datos.length; i++) {
				const personaje = datos[i];
				if (!characterListValidation(personaje.name)) {
					switch (personaje.gender) {
						case "male":
							personaje.gender = "hombre";
							break;
						case "female":
							personaje.gender = "mujer";
							break;
						case "hermaphrodite":
							personaje.gender = "hermafrodita";
							break;
						case "none":
							personaje.gender = "ninguno";
							break;
						case "n/a":
							personaje.gender = "no aplica";
							break;
					}
					switch (personaje.eye_color) {
						case "red":
							personaje.eye_color = "rojo";
							break;
						case "blue":
							personaje.eye_color = "azul";
							break;
						case "brown":
							personaje.eye_color = "marron";
							break;
						case "yellow":
							personaje.eye_color = "amarillo";
							break;
						case "blue-gray":
							personaje.eye_color = "azul grisaceo";
							break;
						case "black":
							personaje.eye_color = "negro";
							break;
						case "orange":
							personaje.eye_color = "naranja";
							break;
						case "hazel":
							personaje.eye_color = "avellana";
							break;
						case "pink":
							personaje.eye_color = "rosa";
							break;
						case "red, blue":
							personaje.eye_color = "rojo, azul";
							break;
						case "unknown":
							personaje.eye_color = "desconocido";
							break;
						case "gold":
							personaje.eye_color = "dorado";
							break;
						case "green, yellow":
							personaje.eye_color = "verde, amarillo";
							break;
						case "white":
							personaje.eye_color = "blanco";
							break;
						case "dark":
							personaje.eye_color = "oscuro";
							break;
					}
					if (personaje.mass === "unknown") {
						personaje.mass = "desconocido";
					} else {
						personaje.mass += " kg";
					}
					if (personaje.height === "unknown") {
						personaje.height = "desconocido";
					} else {
						personaje.height += " cm";
					}
					let tbody = $("#tableBody");
					tbody.append(
						"<tr><td>" +
						index +
						"</td><td>" +
						personaje.name +
						"</td><td>" +
						personaje.gender +
						"</td><td>" +
						personaje.height +
						"</td><td>" +
						personaje.mass +
						"</td><td>" +
						personaje.eye_color +
						'</td><td><button class="btn btn-success">Guardar</button></td></tr>'
					);
					let tr2 = tbody.children();
					tr2.attr("style", "overflow: hidden;");
					index++;
				}
			}
		});
		request.fail(function (error) {
			console.log("Error: ", error);
		});
	}
	$("body").on("click", ".btn", function () {
		let fila = $(this)
			.parent()
			.parent();
		var personaje = {
			nombre: fila.children()[1].innerHTML,
			genero: fila.children()[2].innerHTML,
			altura: fila.children()[3].innerHTML,
			peso: fila.children()[4].innerHTML,
			ojos: fila.children()[5].innerHTML
		};
		personajes.push(personaje);
		setLocalList("Personajes", personajes);
		console.log(personaje);
		$(this)
			.parent()
			.parent()
			.fadeOut(500, function () {
				console.log("Se completo la animación");
			});
	});
}
export default peopleController;
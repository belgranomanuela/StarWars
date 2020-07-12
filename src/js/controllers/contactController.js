function contactController() {
	console.log('Se cargo el formulario de contacto');

	var email = $('#email');

	var nombre = $('#firstName');

	var comentarios = $('#comments');

	var enviarBtn = $('#submitButton');

	enviarBtn.attr('disabled', true);

	nombre.keyup(function(event) {
		var input = event.target;

		if (input.value.length > 0) {
			input.className = 'form-control is-valid';
			console.log('Es un formato correcto');
		} else {
			input.className = 'form-control is-invalid';
			console.log('Es un formato incorrecto');
		}
		habilitarBoton();
	});

	nombre.blur(function(event) {
		var input = event.target;

		if (input.value.length > 0) {
			input.className = 'form-control is-valid';
			console.log('Es un formato correcto');
		} else {
			input.className = 'form-control is-invalid';
			console.log('Es un formato incorrecto');
		}
		habilitarBoton();
	});

	comentarios.keyup(function(event) {
		var input = event.target;

		if (input.value.length > 0) {
			input.className = 'form-control is-valid';
			console.log('Es un formato correcto');
		} else {
			input.className = 'form-control is-invalid';
			console.log('Es un formato incorrecto');
		}
		habilitarBoton();
	});

	comentarios.blur(function(event) {
		var input = event.target;

		if (input.value.length > 0) {
			input.className = 'form-control is-valid';
			console.log('Es un formato correcto');
		} else {
			input.className = 'form-control is-invalid';
			console.log('Es un formato incorrecto');
		}
		habilitarBoton();
	});

	email.keyup(function(event) {
		var input = event.target;
		if (input.value.indexOf('@') >= 0 && input.value.indexOf('.') >= 0) {
			input.className = 'form-control is-valid';
			console.log('Es un formato correcto');
		} else {
			input.className = 'form-control is-invalid';
			console.log('Es un formato incorrecto');
		}
		habilitarBoton();
	});

	email.blur(function(event) {
		var input = event.target;
		if (input.value.indexOf('@') >= 0 && input.value.indexOf('.') >= 0) {
			input.className = 'form-control is-valid';
			console.log('Es un formato correcto');
		} else {
			input.className = 'form-control is-invalid';
			console.log('Es un formato incorrecto');
		}
		habilitarBoton();
	});

	function habilitarBoton() {
		let deshabilitado = true;
		if (!nombre.hasClass('is-invalid') && !email.hasClass('is-invalid') && !comentarios.hasClass('is-invalid')) {
			deshabilitado = false;
		}
		enviarBtn.attr('disabled', deshabilitado);
	}
}

export default contactController;

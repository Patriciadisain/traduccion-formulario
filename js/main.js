(function translate(){
	var logear = document.getElementById('form-signin-heading');
		  logear.innerHTML = "Por favor registrese";
	var input1 = document.getElementById ('inputEmail');
			input1.placeholder = "Por favor ingresa tu correo ";
	var input2 = document.getElementById ('inputPassword');
			input2.placeholder = "Contraseña";
	var ticketRemember = document.querySelector('.checkbox span');
			ticketRemember.innerHTML = "Recordar datos";
	var boton1 = document.getElementsByTagName('button')[0];
		boton1.innerHTML = "Iniciar Sesión";

}) ();
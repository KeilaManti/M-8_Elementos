window.addEventListener('load', function() {
	let nombre = prompt("Ingrese Su Nombre");

	document.querySelector("h2").style.textTransform = "uppercase";
	document.querySelector("a").style.color = "#E51B3E";

	let confirmar = confirm("¿Desea colocar un fondo de pantalla?");
	if (confirmar) {
		document.querySelector("body").classList.add("fondo");
	}

	if (nombre == "") {
		document.querySelector("h2.subtitulo").innerText += "/a Invitado";
	} else {
		document.querySelector("h2.subtitulo").innerText += "/a " + nombre;
	}

	let destacado = document.querySelectorAll("p");
	for(let i = 0 ; i < destacado.length; i++) {
		if (i % 2 == 0) {
			destacado[i].classList.add('destacadoPar');
		} else {
			destacado[i].classList.add('destacadoImpar');
		}
	}

	document.querySelector("main").style.display = "block";
});
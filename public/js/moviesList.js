window.addEventListener('load', function() {
	let modoscuro = prompt("¿Desea modo oscuro?");

	if (modoscuro == "si") {
		document.querySelector("body").style.backgroundColor = "#7F7F7F";
		document.querySelector("body").classList.add("fondoMoviesList");
	}

	document.querySelector("h1").innerText = "LISTADO DE PELÍCULAS";
	document.querySelector("h1").style.color = "white";
	document.querySelector("h1").style.backgroundColor = "teal";
	document.querySelector("h1").style.padding = "20px";
});
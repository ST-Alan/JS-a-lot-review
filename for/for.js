let element = document.getElementById("for")
let frutas = ["Pera", "Manzana", "Cambur"]

for (i = 0; i <= frutas.length - 1; i++) {
	if (frutas[i] == "fresa") {
		continue;
	}
	element.innerHTML += `<h2>${frutas[i]}</h2>`
}

// Si le hago un break cuando identifica el último elemento no hace falta ponerle el -1 en la declaración del for. Por ejemplo que haga un break cuando vea cambur
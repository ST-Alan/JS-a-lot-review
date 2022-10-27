let notas = []

function promediarNotas() {
	let inputNota1 = document.querySelector("#nota1")
	let inputNota2 = document.querySelector("#nota2")
	let inputNota3 = document.querySelector("#nota3")
	let inputNota4 = document.querySelector("#nota4")

	let valorNota1 = Number(inputNota1.value)
	let valorNota2 = Number(inputNota2.value)
	let valorNota3 = Number(inputNota3.value)
	let valorNota4 = Number(inputNota4.value)

	notas.push([valorNota1, valorNota2, valorNota3, valorNota4])

	inputNota1.value = ""
	inputNota2.value = ""
	inputNota3.value = ""
	inputNota4.value = ""

	let mostrarNotas = document.querySelector(".mostrarNotas")
	mostrarNotas.innerHTML = ""

	for (let nota of notas) {
		if (isNaN(valorNota1) && isNaN(valorNota2) && isNaN(valorNota3) && isNaN(valorNota4)) {
			return "Debe verificar que ha ingresado solo números"
		}
		let numeroADividir = notas[0].length
		// let numeroADividir = notas.length

		let promedio = (valorNota1 + valorNota2 + valorNota3 + valorNota4) / numeroADividir
		// return mostrarNotas.innerHTML += `El promedio de las notas ingresadas es de ${promedio}<br>
		// arreglo notas = ${notas}<br>
		// Notas.length = ${numeroADividir}<br>
		// `
		return mostrarNotas.innerHTML += `El promedio de las notas ingresadas es de ${promedio}<br>
		`
	}
}

// Aclaración:
// El arreglo notas es un objeto que almacena arreglos, me di cuenta ingresando al console.log. Entonces yo quería que el número a dividir lo tomara de forma automática, sin embargo el no tomaba la cantidad de elementos del arreglo, así que me di cuenta que al tomar esos elementos el lo colocaba dentro del array con el número cero, entonces solo le dije que del arreglo notas solo iba a tomar el primer arreglo y de allí la cantidad de elementos, tal como se ve en la línea 28.

// La línea 29 fué como la empecé a realizar
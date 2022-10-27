let arreglo = document.getElementById("array")
const datosPrueba = [
	"Luisa",
	"Carlos",
	"Lucas",
	[1, -1, 2, "cuatro", ["Alan", 9, 33, true, "Fermin", ["Thelema", "Evolucion"], 0], 10]
]

console.log("índice final - 1 - esto debería agarrar el valor final del areglo", datosPrueba[3][datosPrueba.length - 1])

console.log("Cantidad de Elementos", datosPrueba)
console.log(datosPrueba[3].length)
console.log(datosPrueba[3][4])
let arreglo = document.getElementById("array")


const datosPrueba = [
	"Pepe",
	"Juan",
	"Maria",
	"Luisa",
	"Carlos",
	"Lucas",
	[1, -1, 2, "tres", ["Alan", 9, 33, true, "Fermin", ["Thelema", "Evolucion"], 0], 10]
]

document.write(`<li>${datosPrueba}</li>`)

console.log("ArregloPrincipal", datosPrueba)
console.log("ArregloSegundo", datosPrueba[6])
console.log("ArregloTercero", datosPrueba[6][4])
console.log("ArregloElementoÚltimo: ", datosPrueba[6][4][4])


console.log("ArregloInternoLenght: ", datosPrueba[6][4][4].length) //
console.log("ArregloInternoLenght: ", datosPrueba[6][4].length) //
console.log("ArregloInternoLenght: ", datosPrueba[6].length) //
console.log("ArregloInternoLenght: ", datosPrueba.length) //

console.log("prueba", datosPrueba[6])
console.log("cantidad final", datosPrueba[6].length)
console.log("índice final", datosPrueba[6][datosPrueba.length])
console.log("cantidad - 1", datosPrueba[6].length - 1)
//La siguiente línea de código dice que vamos a buscar el elemento del índice número 6 que es un arreglo: datosPrueba[6]. Luego se dice que vamos a ver la cantidad de elementos de la variable datos prueba, no del array que se encuentra en el índice 6: datosPrueba.length. La cantidad de elementos del arreglo datosPrueba son 7 y hay 6 índices. La cantidad de elementos del arreglo dentro del índice[6] son 6 y hay [5] índices.
// Entonces para buscar el último elemento del arreglo que se encuentra dentro del arreglo principal[6] se dice que es datosPrueba.length -2 porque datosPrueba.length es igual a 7, 7-2 son 5, el índice 5 dentro del arreglo interno corresponde al último elemento
console.log("índice final", datosPrueba[6][datosPrueba.length - 1])
console.log("cantidad - 2", datosPrueba[6].length - 2)
console.log("índice final - 2", datosPrueba[6][datosPrueba.length - 2])

// Para que el ejercicio salga con "length -1". Puse el índice.length con [6] y en este caso si sale perfectamente. A diferencia del anterior que era: console.log("índice final - 2", datosPrueba[6][datosPrueba.length - 2])
// Acá le puse el[6]: console.log("índice final del array[6]", datosPrueba[6][datosPrueba[6].length - 1])
// Ver línea de abajo
console.log("índice final del array[6]", datosPrueba[6][datosPrueba[6].length - 1])
console.log("cantidad - 3", datosPrueba[6].length - 3)
console.log("índice final - 3", datosPrueba[6][datosPrueba.length - 3])
console.log("índice cantidad del arreglo", datosPrueba[6][datosPrueba.length])
console.log("prueba", datosPrueba[6][datosPrueba.length - 3][datosPrueba[6][4].length - 1])

datosPrueba[6][4][5].push([true, true, false, false])

console.log("push", datosPrueba)
datosPrueba[6][4][5].pop() //elimina el último elemento
console.log("pop", datosPrueba)



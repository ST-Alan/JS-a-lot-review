let showApp = document.getElementById('container')
let edades = [23, 21, 34, 45, 28, 30]
console.log('edades', edades)

nuevaEdad = []
edades.forEach((edad) => {
	let edadN = Math.pow(edad, 2)
	nuevaEdad.push(edadN)
})
let nuevasEdades = []
edades.forEach((edad) => nuevasEdades.push(Math.pow(edad, 2)))
console.log(nuevasEdades)

console.log('edadesCuadradoForEach', nuevaEdad)
showApp.innerHTML += `<h2>edadesCuadradoForEach: ${nuevaEdad}</h2>`

let edadesCuadradoMap = edades.map((edad) => {
	return Math.pow(edad, 2)
})
console.log('edadesCuadradoMap', edadesCuadradoMap)
showApp.innerHTML += `<h2>edadesCuadradoMap: ${edadesCuadradoMap}</h2>`

let cuadradoI = []
for (i = 1; i <= edades[i]; i++) {
	let edadI = Math.pow(i, 2)
	cuadradoI.push(edadI)

}
console.log('cuadradoI - onlyFor', cuadradoI)
showApp.innerHTML += `<h2>for ${cuadradoI}</h2>`

cuadradoII = []
for (let edad of edades) {
	let edadC = Math.pow(edad, 2)
	cuadradoII.push(edadC)
}
console.log('cuadradoII for of', cuadradoII)
showApp.innerHTML += `<h2>for of ${cuadradoII}</h2>`
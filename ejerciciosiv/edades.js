let edades = [33, 3, 45, 50]

let cuadradoEdades = edades.map((edad) => Math.pow(edad, 2))

console.log(`Template string - arreglo principal edades ${edades}`)
console.log(`Template string - cuadradoEdades map ${cuadradoEdades}`)
console.log('Comillas simples- arreglo principal edades', edades)
console.log('Comillas simples- cuadradoEdades map', cuadradoEdades)

let cuadradoFor = []

for (let edad of edades) {
	let elev = Math.pow(edad, 2)
	cuadradoFor.push(elev)
}

console.log(`Template string - for of ${cuadradoFor}`)
console.log('Comillas simples- forOf', cuadradoFor)

let edadesIn = [...edades]
let edIn2 = []
// Con for In
for (let ed in edadesIn) {
	let elevIn = Math.pow(ed, 2)
	edIn2.push(elevIn)
}
console.log(`Template string - elevIn${edIn2}`)
console.log('Comillas simples-forIn', edIn2)
// Con forEach
let arrFE = []
let edadForEach = edadesIn.forEach((x) => {
	let edFE = Math.pow(x, 2)
	arrFE.push(edFE)
})

console.log('ForEach', arrFE)
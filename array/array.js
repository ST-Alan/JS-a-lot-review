let arreglo = document.getElementById("array")
let arreglo1 = document.getElementById("array1")
let arreglo2 = document.getElementById("array2")
let arreglo3 = document.getElementById("array3")

const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas"]

document.write(`<li>${nombres[0]}</li>`)

const data = [1, false, -2, "Hola mundo"]

console.log(data[data.length - 1])

document.write(`<hr>`)

arreglo.innerHTML = `<li>${nombres}</li> <hr>`
console.log(nombres)


nombres.push("Alan")

arreglo1.innerHTML = `${nombres} <hr>`
console.log(nombres)


nombres.push(["Alan", "Ali", "Fermin"])

arreglo2.innerHTML = `${nombres} <hr>`

console.log(nombres[7][0])




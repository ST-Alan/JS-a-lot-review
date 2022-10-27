let arr = document.getElementById("arr")
let elemento = document.getElementById("array")
let elemento1 = document.getElementById("array1")
let elemento2 = document.getElementById("array2")
let elemento3 = document.getElementById("array3")

let array = ["Madrid", "Se fué a la guerra", "Que dolor", "que dolor", "que pena"]

let word = "Madrid"

arr.innerHTML = `<h3> ${array} <hr><br></h3>`
elemento.innerHTML = `<h3> Madrid ${array.indexOf("Madrid")} </h3>`
elemento1.innerHTML = `<h3> Masrid ${array.indexOf("Masrid")} </h3>`
elemento2.innerHTML = `<h3> Se fué a la guerra ${array.indexOf("Se fué a la guerra")} </h3>`
elemento3.innerHTML = `<h3> que pena ${array.indexOf("que pena")} </h3>`

const busqueda = prompt("Escriba una parte de la canción")

if (array.indexOf(busqueda) !== -1) {

	alert(`Esa letra si existe y es ${array[array.indexOf(busqueda)]}`)
} else {
	alert(`Next, another song2`)
}

// if (array.indexOf(word) !== -1) {

// 	alert(`Esa letra si existe y es ${array[array.indexOf(word)]}`)
// } else {
// 	alert(`Next, another song2`)
// }
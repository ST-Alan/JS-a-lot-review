
const estudiantes = []

const imprimirEstudiantes = () => {
	const inputNombre = document.querySelector("#input_name")
	const nombre = inputNombre.value

	estudiantes.push(nombre)

	inputNombre.value = ""

	const resultado = document.querySelector(".resultado")
	//Siempre se debe limpiar antes de un for
	resultado.innerHTML = ""

	for (let estudiante of estudiantes) {
		resultado.innerHTML += `<h3> Estudiante ${estudiante} correctamente agregado </h3>`
	}
}
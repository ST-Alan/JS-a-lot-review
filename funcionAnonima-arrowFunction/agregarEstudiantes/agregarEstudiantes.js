// Se crea un array de estudiantes vacío
const estudiantes = []

function imprimirEstudiantes() {
	const inputNombre = document.querySelector("#input_name")
	const nombre = inputNombre.value
	//Aquí se agrega el estudiante al arreglo
	estudiantes.push(nombre)
	//Aquí se limpia el input para que desaparezca el nombre una vez añadido
	//opción 1: 
	inputNombre.value = ""
	//opción 2 nose porque no funciona con const nombre ni así: nombre = "" ni así:
	// nombre.innerHTML = ""
	//Aquí tomo el div donde voy a insertar el elemento
	const resultado = document.querySelector(".resultado")
	//Para que no repita los resultados, se le indica que primero limpie el espacio donde pinta los arreglos y luego pinte el arreglo. Se le indica que borre los resultados de esta manera:
	resultado.innerHTML = ""
	// Con el for of inserto todos los estudiantes que escriba
	for (let estudiante of estudiantes) {
		resultado.innerHTML += `<h3> Estudiante ${estudiante} correctamente agregado </h3>`
	}
}
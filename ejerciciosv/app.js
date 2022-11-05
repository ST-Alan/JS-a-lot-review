let showTables = document.querySelector('#formulario')

let showApp = document.getElementById('container')

let mostrarDatos = []

showTables.onsubmit = (e) => {
	e.preventDefault()

	let mostrarDato = {}

	let formData = new FormData(e.target)

	for (dato of formData) {
		mostrarDato[dato[0]] = dato[1]
	}
	mostrarDatos.push(mostrarDato)

	for (i = 1; i <= mostrarDatos[0].numT; i++) {
		if (i === Number(mostrarDatos[0].omT)) {
			continue;
		}
		showApp.innerHTML += `Esta es la tabla del ${i}`

		for (j = 0; j <= mostrarDatos[0].numM; j++) {
			if (j === Number(mostrarDatos)) {
				continue;
			}
			showApp.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
		}
	}
	// Queda pendiente
	// let count = mostrarDatos[0].numM.map(x => {
	// 	return console.log(x++)
	// })

}
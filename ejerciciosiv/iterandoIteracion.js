let showApp = document.getElementById('container')

let form = document.querySelector('#formulario')

let datosTabla = []

form.onsubmit = (e) => {
	e.preventDefault()

	datoTabla = {}

	let formData = new FormData(e.target)

	for (dato of formData) {
		datoTabla[dato[0]] = dato[1]
		// console.log('dato-inside', dato) //Para evaluar si dato está dentro y fuera del for
	}
	datosTabla.push(datoTabla)
	// console.log('dato-outside', dato) //Para evaluar si dato está dentro y fuera del for
	// let iteration = datosTabla.map((iter) => {
	// 	return iter
	// })
	// let iteration = datosTabla.map((iter) => {
	// 	return console.log('iter', iter)
	// })
	let iteration = datosTabla.map((iter) => iter)

	// console.log('iteration', iteration)

	for (i = 1; i <= iteration.numeroT; i++) {
		if (i === Number(iteration.omitirT)) {
			continue;
		}
		showApp.innerHTML += `<h2>Esta es la tabla del ${i}</h2>`

		for (j = 0; j <= iteration.ingreseM; j++) {
			if (j === Number(iteration.omitirM)) {
				continue
			}
			showApp.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
		}
	}

}
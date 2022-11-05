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
	let iterationNumeroT = datosTabla.map((iter) => Number(iter.numeroT))
	console.log('iterationNumeroT', iterationNumeroT)
	let iterationOmitirT = datosTabla.map((iter) => Number(iter.omitirT))
	console.log('iterationOmitirT', iterationOmitirT)
	let iterationIngreseM = datosTabla.map((iter) => Number(iter.ingreseM))
	console.log('iterationIngreseM', iterationIngreseM)
	let iterationOmitirM = datosTabla.map((iter) => Number(iter.omitirM))
	console.log('iterationOmitirM', iterationOmitirM)


	function showTable() {
		for (i = 1; i <= iterationNumeroT[i]; i++) {
			if (i === iterationOmitirT[i]) {
				continue;
			}
			showApp.innerHTML += `<h2>Esta es la tabla del ${i}</h2>`

			for (j = 0; j <= iterationIngreseM[j]; j++) {
				if (j === iterationOmitirM[j]) {
					continue
				}
				showApp.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
			}
		}
	}

	showTable()

}

// console.log('iteration', iteration)

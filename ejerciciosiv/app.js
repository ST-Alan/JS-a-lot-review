let showApp = document.getElementById('container')

let form = document.querySelector('#formulario')

let datosTabla = []

form.onsubmit = (e) => {
	e.preventDefault()

	datoTabla = {}

	let formData = new FormData(e.target)

	for (dato of formData) {
		datoTabla[dato[0]] = dato[1]
	}
	datosTabla.push(datoTabla)

	for (i = 1; i <= datosTabla[0].numeroT; i++) {
		if (i === Number(datosTabla[0].omitirT)) {
			continue;
		}
		showApp.innerHTML += `<h2>Esta es la tabla del ${i}</h2>`

		for (j = 0; j <= datosTabla[0].ingreseM; j++) {
			if (j === Number(datosTabla[0].omitirM)) {
				continue
			}
			showApp.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
		}
	}

}
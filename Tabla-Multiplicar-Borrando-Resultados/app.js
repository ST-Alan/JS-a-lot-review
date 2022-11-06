let formulario = document.getElementById('formulario')

let showApp = document.querySelector('#showApp')

let obtenerDatos = []

formulario.onsubmit = (e) => {
	e.preventDefault()
	console.log(e)
	console.log(e.target)
	let formData = new FormData(e.target)
	console.log(formData)
	let obtenerDato = {}

	for (data of formData) {
		obtenerDato[data[0]] = data[1]
	}
	console.log(obtenerDato)
	console.log('obtenerDatos', obtenerDatos)
	obtenerDatos.push(obtenerDato)

	let insT = Number(obtenerDatos.map(dato => dato.insT))//fat arrow inline
	let omiT = Number(obtenerDatos.map((dato) => { return dato.omiT }))
	let insM = Number(obtenerDatos.map((dato) => { return dato.insM }))
	let omiM = Number(obtenerDatos.map((dato) => { return dato.omiM }))
	console.log('insT', insT)
	console.log('omiT', omiT)
	console.log('insM', insM)
	console.log('omiM', omiM)

	// Puede que si coloco= sin el + puede limpiar el texto y colocar la tabla
	obtenerDatos.forEach(() => {
		for (i = 1; i <= insT; i++) {
			if (i === omiT) {
				continue
			}
			showApp.innerHTML += `<h2>Esta es la tabla del ${i}</h2>`
			for (j = 0; j <= insM; j++) {
				if (j === insM) {
					continue
				}
				showApp.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
			}
		}
		obtenerDatos = []
	})

	formulario.onreset = () => {
		showApp.innerHTML = ''
	}



}
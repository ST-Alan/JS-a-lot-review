let form = document.getElementById('formT')
let showT = document.querySelector('.container')

let datosTabla = []


form.onsubmit = (e) => {
	e.preventDefault()
	// console.log(e)
	// console.log(e.target)
	// console.log(e.target.cantidadM)
	// console.log(e.target.cantidadM.value)

	// e.target.cantidadM.value
	// e.target.omitirT.value
	// e.target.cantidadM.value
	// e.target.omitirM.value
	let objTabla = {}
	// let formData = new FormData(e.target)
	let formData = new FormData(e.target)
	console.log('formData', formData)

	// for ([key, value] of formData) {
	// 	console.log(key, ':', value)
	// }
	for (let i of formData) {
		// console.log(i)
		objTabla.push = objTabla[i[0]] = Number(i[1])
	}
	// console.log(objTabla)

	datosTabla.push(objTabla)


	for (i = 1; i <= datosTabla[0].cantidadT; i++) {
		if (i === datosTabla[0].omitirT) {
			continue;
		}
		showT.innerHTML += `<h2>Esta es la tabla del ${i}</h2>`
		for (j = 1; j <= datosTabla[0].cantidadM; j++) {
			if (j === datosTabla[0].omitirM) {
				continue;
			}
			showT.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
		}
	}

}
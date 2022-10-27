const tablasDeMultiplicar = []
const formularioTablas = document.querySelector('#formTabla')

//*El evento onsubmit tiene el parámetro e o event implícito, el cual contiene información del evento
formularioTablas.onsubmit = (event) => {
	//Con preventDefault se evita que se recargue la página
	event.preventDefault()
	console.log(event)
	//Ya existe por defecto una clase formdata, entonces puedo instanciar para obtener sus propiedades.
	// Le paso como parámtero el event.target porque es lo que pide el constructor	
	const formData = new FormData(event.target)
	// console.log(formData)
	// console.log(formData.entries())


	// Ahora creo un objeto vacío, el cuál voy a llenar con el for
	const tablaDeMultiplicar = {}


	// El for sirve para poder crear (llenar) el objeto 
	// Me muestra todos los inputs como texto
	// Se puede colocar le dato of formData.entries(), o solo formData sin el .entries()
	for (let dato of formData) {
		console.log(`Arreglos`)
		console.log(dato)
		console.log(`===============================================`)
		// Dentro del for inserto los elementos del objeto
		tablaDeMultiplicar[dato[0]] = dato[1]

		// De esta forma no se puede acceder al objeto:
		// tablaDeMultiplicar.dato[0] = dato[1]
	}

	//Me Muestra los inputs con su clave y valor
	// for (let [key, value] of formData) {
	// 	console.log(`=================================================================`)
	// 	console.log(`key:value`)
	// 	console.log(`key: ${key}, value: ${value}`)
	// 	console.log(`key: ${key}`)
	// 	console.log(`value: ${value}`)
	// 	console.log(`${key}:${value}`)
	// 	console.log(key, value)
	// }

	tablasDeMultiplicar.push(tablaDeMultiplicar)


	let raya = document.querySelector('#container')

	for (i = 1; i <= tablasDeMultiplicar[0].cantidadTablas; i++) {
		if (i == tablasDeMultiplicar[0].omitirTabla) {
			continue;
		}
		raya.innerHTML += `Tabla de multiplicar del ${i}`
		console.log(`${raya.innerHTML} += Tabla de multiplicar del ${i}`)
		for (j = 0; j <= tablasDeMultiplicar[0].cantidadNumeros; j++) {
			if (j == tablasDeMultiplicar[0].omitirNumero) {
				continue;
			}
			raya.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
			console.log(`raya.innerHTML +=  <p> ${i} x ${j} = ${i * j}</p >`)
		}
	}
}
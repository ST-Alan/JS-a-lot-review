// Si los inputs están dentro de un formulario no se puede mostrar la tabla, se muestra, pero se recarga automáticamente
function crearTablas() {

	let form = document.getElementById('formTabla')
	let raya = document.querySelector('#container')
	let tablas = document.getElementById('cantidadT').value
	let noTabla = document.querySelector('#omitirT').value
	let numeros = document.getElementById('cantidadT').value
	let noNumero = document.querySelector('#omitirN').value

	for (i = 1; i <= tablas; i++) {
		if (i == noTabla) {
			continue;
		}
		raya.innerHTML += `Tabla de multiplicar del ${i}`
		console.log(`${raya.innerHTML} += Tabla de multiplicar del ${i}`)
		for (j = 0; j <= numeros; j++) {
			if (j == noNumero) {
				continue;
			}
			raya.innerHTML += `<p>${i} x ${j} = ${i * j}</p>`
			console.log(`raya.innerHTML +=  <p> ${i} x ${j} = ${i * j}</p >`)
		}
	}
}

document.write(`<h3> Notas </h3>`)
document.write("<h3> Notas </h3>")
if (tabla == 8) {
	document.write(`<h1 class="blue">¡Aquí finalizan las tablas!</h1>`)
} else {
	document.write(`<h1 class="red">La tabla del 8 aún no llega</h1>`)
}
tabla = Number(prompt("Ingresa el número de la tabla"))
if (isNaN(tabla)) {
	alert("Por favor inserte solo números")
	tabla = Number(prompt("Ingresa el número de la tabla"))
}



for (i = 1; i <= tabla; i++) {
	document.write(`<h2>Tabla del ${i}</h2>`)
	for (j = 0; j <= 10; j++) {
		document.write(`${i} x ${j} = ${i * j} <br>`)
	} if (i >= tabla) {
		break;
	}
}



if (tabla == 8) {
	document.write(`<h1 class="blue">¡Aquí finalizan las tablas!</h1>`)
} else {
	document.write(`<h1 class="red">La tabla del 8 aún no llega</h1>`)
}

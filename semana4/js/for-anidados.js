let numero_tablas = 10;

for (i = 1; i <= numero_tablas; i++) {
	document.getElementById('tabla').innerHTML += `<h2>Tabla del ${i}</h2>`
	for (j = 0; j <= 20; j++) {
		document.getElementById('tabla').innerHTML += `<p>${i} x ${j} = ${j * i}</p>`
	}

}
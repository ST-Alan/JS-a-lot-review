let showApp = document.querySelector('.container')
let tablaM = 10
let omitirT = [2, 5, 7, 9]
let multiplo = 2
let omitirM = 1


console.log(omitirT[0])

for (let i = 1; i <= tablaM; i++) {
	if (i === omitirT[0] || i === omitirT[1] || i === omitirT[2] || i === omitirT[3]) {
		continue
	}

	showApp.innerHTML += `<h3>Esta es la tabla del ${i}</h3>`
	for (j = 0; j <= multiplo; j++) {
		if (j === omitirM) {
			continue
		}
		showApp.innerHTML += `<p>${i} x ${j}= ${i * j}</p>`
	}
}
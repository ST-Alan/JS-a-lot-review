let tabfr = document.getElementById("for")
// let tabe = document.getElementById("tabla")
let tab = Number(prompt("Ingrese el número de la tabla que desea multiplicar"))
for (i = 1; i <= tab; i++) {
	if (i == 2 || i == 4 || i == 6) continue
	tabfr.innerHTML += `<h2>Esta es la tabla del ${i}</h2>`
	for (j = 0; j <= 10; j++) {
		if (j == 0 || j == 2) {
			continue;
		}
		if (j == 7) {
			break
		}
		tabfr.innerHTML += `<p>${i} x ${j} = ${i * j} </p>`
	}
}
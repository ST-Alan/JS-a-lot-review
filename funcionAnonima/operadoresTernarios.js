// Esta función con operadores ternarios:

// const dividir = (n1, n2) => {
// 	return validarSiEsNumero(n1) || validarSiEsNumero(n2)
// 		? "¡Error! Número no válido"
// 		: n1 / n2
// }

// Es igual a esta función:

const dividir = (n1, n2) => {
	if (validarSiEsNumero(n1) || validarSiEsNumero(n2)) {
		return "¡Error! Número no válido"
	} else {
		return n1 / n2
	}
}


function validarSiEsNumero(numero) {
	return isNaN(numero)
}
// ArrowFunction es el reemplazo de las funciones tradicionales en el javaScript moderno
// La función:
// let multiplicar = function (n1, n2 = 3) {
// 	return n1 * n2
// }

// Se puede reemplazar por:
let multiplicar = (n1, n2) => {
	return n1 * n2
}
//* No es necesario escribir el function
//* ArrowFunction es una función anónima, por lo tanto no tiene acceso a this

//! ejercicios: Esto
//  function validarSiEsNumero(numero){
// 	if(isNaN(numero)){
// 		return false
// 	} else{
// 		return true
// 	}
//  }

//!  Se puede resumir en esto
// function validarSiEsNumero(numero) {
// 	return isNaN(numero)
// }
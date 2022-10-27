// Modo 1 - Declaro el let afuera del ciclo, luego en el ciclo indico que la variable que vale cero va a ir aumentando y por último le digo a eso que aumenta multiplícalo por 15. No necesito la variable "multiplicado"
// let element = document.getElementById('tabla');
// let i = 0

// for(i = 0; i<= 20; i++){
// 	element.innerHTML += `<p>${i} x 15 = ${ i * 15 }</p>`;
// 	if (i==20){
// 		break;
// 	}
// }



// MODO 2 - Declaro la variable multiplicado dentro del ciclo porque sino no me reconoce a "i", entonces a diferencia del MODO 1 - no multiplico ix15 sino que directamente coloco la variable multiplicado
// let element = document.getElementById('tabla');

// for(i = 0; i<= 20; i++){
// 	let multiplicado = Number(i * 15);
// 	element.innerHTML += `<p>${i} x 15 = ${ multiplicado }</p>`;
// 	if (i==20){
// 		break;
// 	}
// }



//MODO 3 - Escoger la tabla con la cuál se va a trabajar:
let element = document.getElementById('tabla')
let tabla = prompt('inserte la tabla con la cuál desea trabajar');

for (i=0; i<= 20; i++){
	let multiplicado = i * tabla;
	element.innerHTML += `<p> ${i} x ${tabla} = ${multiplicado} </p>`
	if(i==20){
		break;
	}
}
// Cuando está declarada una variable en la función esta se considera si cuando se llama a la función se coloca solo un valor, sin embargo si se colocan dos valores, la variable devlarada se sobre escribe

// Las variables pueden tener funciones. Las funciones sin nombre se llaman funciones anónimas
let example = function (n1, n2 = 3) {
	return n1 * n2
}


document.write(`<h2>${example} <br></h2>`)
document.write(`<p>${example(5, 2)}</p>`)
// document.write(`<p>${example(5)}</p>`)


// Este tipo de funciones no se utilizan actualmente, actualmente se usa con mayor frecuencia las arrow function, o funciones de flecha

// cuando se usan funciones anónimas no se tiene acceso a this
// ! this es una forma en la cual podemos accesder a variables usando clases
let arreglo = [1, 2, 3, 4]

let arreglo2 = [...arreglo, 5]

let arreglo3 = arreglo2.map(function (x) {
	return x * 2
})


// La función que se ejecuta dentro de un método se llama callback
// En este caso la función dentro del método .map se llama callback

// 	el spreed operator es la sintaxis (...) que se utiliza para crear los objetos literales
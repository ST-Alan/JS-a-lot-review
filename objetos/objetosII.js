const firstNode = document.querySelector(".container")

//Clase
class Carro {
	//Constructor
	constructor(_color, _velocidad) {
		this.color = _color
		this.velocidad = _velocidad
	}
	//Método
	presentacion() {
		const texto = `Hola soy un carro de color ${this.color} y voy a una velocidad de ${this.velocidad}`
		return texto
	}
}
//Instancia
const carro_rojo = new Carro("Rojo", 200)
const carro_azul = new Carro("Verde", 360)


firstNode.innerHTML += `<h5>${carro_rojo.presentacion()}</h5>`
firstNode.innerHTML += `<h5>${carro_azul.presentacion()}</h5>`

firstNode.innerHTML += `<p>El carro ${carro_rojo.color}, tiene una velocidad de ${carro_rojo.velocidad} </p>`
firstNode.innerHTML += `<p>Mientras que el carro ${carro_azul.color}, tiene una velocidad de ${carro_azul.velocidad}</p>`

for (i = 0; i <= 10; i++) {
	firstNode.innerHTML += `<h5>${carro_azul.velocidad[i]}</h5>`
}
const firstNode = document.querySelector(".container")

class crearCarros {
	constructor(_color, _velocidad) {
		this.color = _color
		this.velocidad = _velocidad
	}
	mensaje() {
		const texto = `Este carro de color ${this.color} tiene una velocidad de ${this.velocidad}`
		return texto
	}
}


let crearCarros = (cantidad, color) => {
	let x = Number(cantidad)
	let color_carro = String(color)

	for (i = 0; i <= 10; i++) {
		const carroNuevo = new Carro(color_carro, 170 + i * 3)
		firstNode.innerHTML = `<hr>`
		firstNode.innerHTML = `<p>${i} .- ${carroNuevo.presentacion()}</p>`
	}

}

let showApps = document.getElementById('alan')

class User {
	constructor(_cliente, _gerente, _vendedor) {
		this.cliente = _cliente
		this.gerente = _gerente
		this.vendedor = _vendedor
	}
	ingresarCliente() {
		let saludoC = `Hola ${this.cliente}`
		return saludoC
	}
	ingresarGerente() {
		let saludoG = `Hola ${this.gerente}`
		return saludoG
	}
	ingresarVendedor() {
		let saludoV = `Hola ${this.vendedor}`
		return saludoV
	}
}

const saludar = new User('Alan', 'Ali', 'Fermin')

showApps.innerHTML += `<p>${saludar.ingresarCliente()}</p>`
showApps.innerHTML += `<p>${saludar.ingresarGerente()}</p>`
showApps.innerHTML += `<p>${saludar.ingresarVendedor()}</p>`
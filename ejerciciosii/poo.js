let showApp = document.querySelector('.container')

class User {
	constructor(_cliente, _vendedor, _gerente) {
		this.cliente = _cliente
		this.vendedor = _vendedor
		this.gerente = _gerente
	}

	saludoVendedor() {
		let saludoV = `Hi ${this.vendedor}`
		return saludoV
	}

	saludoGerente() {
		let saludoG = `Hi ${this.gerente}`
		return saludoG
	}

	saludoCliente() {
		let saludoC = `Hi ${this.cliente}`
		return saludoC
	}
}

const saludarUsuario = new User('Alan', 'Ali', 'Fermin')

showApp.innerHTML += `<p>${saludarUsuario.saludoVendedor()}</p>`
showApp.innerHTML += `<p>${saludarUsuario.saludoCliente()}</p>`
showApp.innerHTML += `<p>${saludarUsuario.saludoGerente()}</p>`
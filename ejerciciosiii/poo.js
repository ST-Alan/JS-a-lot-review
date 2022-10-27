let showApp = document.getElementById('container')

class Users {
	constructor(_cliente, _vendedor, _gerente) {
		this.cliente = _cliente
		this.vendedor = _vendedor
		this.gerente = _gerente
	}

	ingresoCliente() {
		let ingresarC = `${this.cliente}Ingrese su usuario y contraseña`
		return ingresarC
	}
	ingresoVendedor() {
		let ingresarV = `${this.vendedor} Conecta tus credenciales`
		return ingresarV
	}
	ingresoGerente() {
		let ingresarG = `${this.gerente} Valida tu huella`
		return ingresarG
	}
}

const ingresarUsuarios = new Users('Alan', 'Ali', 'Fermin')

showApp.innerHTML += `<p>${ingresarUsuarios.ingresoCliente()} <br> ${ingresarUsuarios.ingresoVendedor()} <br> ${ingresarUsuarios.ingresoGerente()}</p>`
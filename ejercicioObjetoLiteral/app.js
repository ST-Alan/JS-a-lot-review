let showApp = document.getElementById('container')

class User {
	constructor(_nombre, _apellido, _edad) {
		this.nombre = _nombre
		this.apellido = _apellido
		this.edad = _edad
	}

	saludoUser() {
		let saludarU = `<p style="font-size:1.5rem">Buen día <b> ${this.apellido}, ${this.nombre} </b>, espero que te encuentres muy bien a tus <b> ${this.edad} </b> años</p>`
		return saludarU
	}
}

const unSaludo = new User('Alan', 'Fermin', 33)

showApp.innerHTML += `<h2> Este es un saludo para tí</h2> <br>${unSaludo.saludoUser()} `


let User2 = { ...User }

User2.nombre = 'Ali'
User2.apellido = 'Contreras'
User2.edad = 32

showApp.innerHTML += `<p style="font-size:1.5rem">${User2.nombre} <br></p>`
showApp.innerHTML += `<p style="font-size:1.5rem">${User2.apellido}<br></p>`
showApp.innerHTML += `<p style="font-size:1.5rem">${User2.edad}</p>`
let nodoPrincipal = document.querySelector("#eventos")
let mostrarMensaje = document.querySelector(".container")
let botonPrincipal = document.querySelector("#btnClick")

botonPrincipal.onclick = () => {
	mostrarMensaje.innerHTML = `Ese es un mensaje de prueba`
}
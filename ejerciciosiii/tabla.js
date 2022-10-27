let form = document.getElementById('form')

let datosTabla = []

form.onsubmit = (e) => {
	e.preventDefault()
	console.log(e.target)
}
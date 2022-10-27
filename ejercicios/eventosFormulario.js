// * La información de los input siempre estará en los target
form.onsubmit = (e) => {
	// El preventDefault() evita que el evento onsubmit del formulario recargue la página
	e.preventDefault()
	console.log(e)
	console.log(e.target)

	//* Existe la clase FormData nativa en JavaScript
	const formData = new FormData(event.target)

	console.log(formData.entries())

	for (let dato of formData.entries()) {
		console.log("========================================")
		console.log(dato)
		//Las siguientes dos líneas se usan para mostrar el key: value
		console.log("key", dato[0])
		console.log("value", dato[1])
		console.log("========================================")
	}

	for (let [key, value] of formData.entries()) {
		console.log(`key: ${key}, value: ${value}`)
	}


}

// Se crea la clase
class Usuarios {
	// Se crea el constructor, que es el que genera la plantilla de la clase
	constructor(_vendedor, _cliente, _gerente) {
		// Aquí creo las variables que se van a usar como propiedades de la clase. Y le indico cuales son los parámetros que va a recibir, así como la variable a la cuál estará asignada
		this.vendedor = _vendedor
		this.cliente = _cliente
		this.gerente = _gerente
	}
	// Luego se crean los métodos, que es la función que se va a realizar cada objeto cuando se creen y envíen sus datos a través de parámetros (En este caso los parámetros son: _vendedor, _cliente,_gerente)
	// Crearé el método Saludo según el usuario:
	saludoVendedor() {
		let saludoVen = `Hola ${vendedor}, espero que tengas un buen día. Como todos los cargos dentro de esta empresa el tuyo es muy importante, sin embargo tu representas un papel fundamental. Gracias a tí, la economía de todos los trabajadores puede ser planificada. Alrededor de 300 personas se benefician directa e indirectamente de tu trabajo. Todos hacemos lo mejor en nuestros puestos y deseamos lo mejor para el tuyo. ¡Que se multipliquen las ventas!`
		return saludoVen
	}
	saludoGerente() {
		let saludoGer = `Hola ${gerente}, espero que tengas un excelente día. Recuerda que eres el combustible y el filtro de todos los miembros de la empresa. El filtro porque tienes que absorber cierta información, y responsabilidades para que los trabajadores puedan continuar en su trabajo y con sus vidas, por otro lado eres el combustible porque de tí depende que ande rápido o lento el desenvolvimiento de la empresa, recuerda que todo es importante, que todos somos seres humanos, y que un trabajador motivado representa 10 clientes bien atendidos, hoy no eres jefe, hoy eres líder. Te deseamos éxitos en esta noble labor`
		return saludoGer
	}
	saludoCliente() {
		let saludoCli = `Hola ${cliente}, gracias por visitarnos. Recibe un caluroso saludo de ${gerente} y de toda la empresa. Esperamos que te encuentres de maravilla, y si no es así, esperamos nosotros mejorar tu momento. Es por esta razón que queremos informar que ${vendedor}, estará atento a todo lo que puedas necesitar, a atender tus necesidades y dar luz a tus dudas. ¡Feliz día!`
		return saludoCli
	}
}
document.write("<h2>Ángulos</h2>")

let angulo = 360
document.write(`<h3> ${angulo} </h3>`)

if (angulo < 0) {
	document.write(`<p>Nulo</p>`)
} else {
	if (angulo < 90) {
		document.write(`<p>Agudo.</p>`)
	} else {
		if (angulo == 90) {
			document.write(`<p>Recto.</p>`)
		} else {
			if (angulo < 180) {
				document.write(`<p> Ángulo Obtuso</p>`)
			} else {
				if (angulo == 180) {
					document.write(`Llano`)
				} else {
					if (angulo < 360) {
						document.write(`Cóncavo`)
					} else {
						if (angulo == 360) {
							document.write(`Completo`)
						} else {
							document.write(`El ángulo es inexistente`)
						}
					}
				}
			}
		}
	}
}

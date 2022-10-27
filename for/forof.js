let e = document.getElementById("for")
let fruta = ["Pera", "Manzana", "Cambur"]

fruta[3] = "Mango"

for (let frutas of fruta) {
	e.innerHTML += `<p>- ${frutas}</p>`
}
const users = [{
	name: "Alan",
	lastName: "Fermin",
	phoneNumber: "992912010",
	address: "Av. Main st.",
	isDeveloper: true,
	age: 33,
},
{
	name: "Ali",
	lastName: "Contreras",
	phoneNumber: "992912010",
	address: "Av. Main st. 2",
	isDeveloper: true,
	age: 33,
},
{
	name: "Sarahith",
	lastName: "Flores",
	phoneNumber: "972235192",
	address: "Av. Main st.",
	isDeveloper: true,
	age: 30,
}
]

for (let user in users) {
	document.querySelector("#forin").innerHTML = `<p>users[user]: ${users[user]}</p>`
	document.querySelector("#forin2").innerHTML = `<p>users: ${users}</p>`
	document.querySelector("#forin3").innerHTML = `<p>user: ${user}</p>`
	console.log("users[user]", users[user])
	console.log("users", users)
	console.log("user", user)
}

// El for in muestra los índices.
// Para mostrar los nombres le diría que busque el índice y de allí que me muestre el nombre.
// Eso se hace de la siguiente manera:
// Le digo vas a ingresar al índice, y del índice me vas a traer los nombres
for (let user in users) {
	document.querySelector("#forin3").innerHTML += `<p>users: ${users[user].name}</p>`
}

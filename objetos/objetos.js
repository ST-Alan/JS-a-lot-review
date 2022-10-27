// Un objeto contiene elementos clave/valor o en inglés key/value
// Un objeto es una variable que tiene opción de tener propiedades
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
// console.log(users)
// console.log(users[0])
// console.log(users[0].name)
for (let user of users) {
	document.querySelector("#containerObjetos").innerHTML += `<h2>Forof</h2><p> user.name: ${user.name}</p>`
}
for (let user in users) {
	document.querySelector("#containerObjetos").innerHTML += `<h2>Forin</h2><p>users[user].name: ${users[user].name}</p>`
}
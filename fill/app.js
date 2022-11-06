let array = [10, 20, 30, 40, 50, 60, 70]

const clothes = [
	{
		brand: "Mango",
		type: "Shirt",
		price: 200,
		store: "Falabella",
		rating: 4.3,
		features: {
			color: "green",
			size: "small",
		},
	},
	{
		brand: "Zara",
		type: "Pants",
		price: 300,
		store: "Zara",
		rating: 3.9,
		features: {
			color: "black",
			size: 32,
		},
	},
	{
		brand: "Tommy",
		type: "T-shirt",
		price: 120,
		store: "Tommy",
		rating: 4.3,
		features: {
			color: "blue",
			size: "M",
		},
	},
];

let fillC = clothes.fill((clothe) => {
	clothe.brand = "FerminContreras",
		clothe.type = "Hat",
		clothe.price = 120,
		clothe.store = "All store Online",
		clothe.rating = 5 / 5,
		clothe.features = {
			color: "Severals",
			size: "S-M-L-XL",
		}
})
document.getElementById('container').innerHTML += `<p>${clothes}</p>`
console.log('fillC', fillC)
console.log('clothes', clothes)

let fillA = array.fill(1)

document.getElementById('container').innerHTML += `<p>${array}</p>`
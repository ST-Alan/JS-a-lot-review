let array = [10, 20, 30, 40, 50, 60, 70]

let arrF = array.filter((x) => x > 30)

let arrFind = array.find((x) => x > 30)

console.log('arrF', arrF)

console.log('arrFind', arrFind)

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

let findC = clothes.find((clothe) => clothe.features.color == 'blue')

console.log('findC', findC)
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

let filterClothes = clothes.filter(clothe => clothe.price > 100 && clothe.rating === 4.3)
console.log(filterClothes)

let filtro2 = clothes.filter(clothe => clothe.price > 100 && clothe.brand.includes('my'))
console.log('2', filtro2)

let filtro3 = clothes.filter(clothe => clothe.brand.toLocaleLowerCase().includes('my'))
console.log('3', filtro2)

let filtro4 = clothes.filter(clothe => clothe.price > 100 && clothe.brand.toLocaleLowerCase().includes('MY'))
console.log('4', filtro2)
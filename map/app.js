const products = [
	{
		name: "Laptop HP",
		price: 1300,
		brand: "HP",
	},
	{
		name: "Laptop Gamer",
		price: 2100,
		brand: "Lenovo",
	},
	{
		name: "Laptop Super Poderosa",
		price: 5300,
		brand: "Alienware",
	},
	{
		name: "Laptop/Tablet",
		price: 2400,
		brand: "ASUS",
	},
]


products.forEach((product) => {
	console.log(product.name)
})
// No se puede hacer esto porque sino da error, ya que el forEach no tiene return y no se puede almacenar en una variable
// let productsforEach = products.forEach((product) => {
// 	console.log(product.name)
// })

products.map((x) => {
	console.log(x.name)
})
// Esta si se puede almacenar en una variable ya que si tiene return
// let productsMap = products.map((x) => {
// 	console.log(x.name)
// })

// Ejercicio para tener descuentos
let descuento = products.map((dis) => {
	return dis.price - 100
})

console.log(descuento)
let ensalada = ["Manzana", "Cambur"]

console.log(ensalada);

ensalada.unshift("Pera")

console.log("ensalada de frutas", ensalada)

ensalada.unshift("Melocotón")

console.log("con Melocotón", ensalada)

ensalada.shift();

console.log("eliminado", ensalada.shift())
console.log("sin melocotón", ensalada)

console.log("añadidos", ensalada.unshift())

ensalada[2] = "Mango"

console.log("ajá", ensalada)
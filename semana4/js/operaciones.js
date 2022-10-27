let numero1 = 2
let numero2 = 2
let numero3 = "3"

console.log("2 - 2",numero1 - numero2);//0
console.log("2 + 2",numero1 + numero2);//4
console.log("2 * 2",numero1 * numero2);//4
console.log("2 / 2",numero1 / numero2);//1
console.log("2 % 2",numero1 % numero2);//0
console.log("2 - 2 - 3",numero1 - numero2 - String(numero3));//-3
console.log("2 + 2 - 3",numero1 + numero2 - String(numero3));//1
console.log("2 * 2 - 3",numero1 * numero2 - String(numero3));//1
console.log("2 / 2 - 3",numero1 / numero2 - String(numero3));//-3
console.log("2 % 2 - 3",numero1 % numero2 - String(numero3));//-3
//Línea de abajo Colocar el sigo + o - antes de la variable es una forma moderna de convertir un string en número, pero no es tan elegante porque con tantos signos se puede ver raro
console.log("2 + 2 % +3",numero1 + numero2 % +numero3);//1
console.log("2 % 2 -numero3",numero1 % numero2 -numero3);//-3
console.log("--------------------------------------------------------")
//Js lee 2 + 2 es igual a 22 y luego le resta 2 entonces dice 22-2 = 20
console.log("Meme JS", "2" + "2" - "2");
console.log("Meme JS - Cuando tiene un string seguido de un símbolo aritmético y un número, JS lee el string como un entero", "22" * 2);

//Raíz cuadrada
let raizCuadrada1 = Math.sqrt(4);
console.log("Raíz cuadrada de 4:",raizCuadrada1);
//Raíz cuadrada elevada a otro número (número, elevación), para dos a la 3 sería:
console.log("2 elevado a la 3 =",Math.pow(2,3));
//Todo valor recibido en el prompt es un string
const catetoA = prompt("Ingrese valor Cateto A");
const catetoB = prompt("Ingrese valor Cateto B");

const operacion1 =  Math.sqrt(Number(Math.pow(catetoA,2))+ Number(Math.pow(catetoB,2)));
console.log("La hipotenusa 1 es =", operacion1);


// También lo puedo poner así
const catetoC = Number(prompt("Ingrese valor Cateto C"));
const catetoD = Number(prompt("Ingrese valor Cateto D"));

const operacion2 =  Math.sqrt(Math.pow(catetoC,2))+ (Math.pow(catetoD,2));
console.log("La hipotenusa 2 es =", operacion2);


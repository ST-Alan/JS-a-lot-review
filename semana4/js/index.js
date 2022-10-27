let numero = 10;
console.log(numero);

numero="Pepe";
console.log("Segundo Tipo:", numero);



console.log(numero)

const igv = 0.18;
console.log("Primer igv", igv)



const primerNombre = "Alan";
const primerApellido = "Fermin";
let edad = 33;
let dias = 20

console.log("Nombre y Apellido", primerNombre +" " + primerApellido + " " + edad)

console.log (edad + dias);

console.log("Edad",String(edad));


console.log (String(edad) + String(dias));

let numero1 = 5;
let numero2 = 10;
let numero5 = "33.5"

console.log("suma", numero1 + numero2);
console.log("resta", numero1 - numero2);
console.log("multiplicación", numero1 * numero2);
console.log("división", numero1 / numero2);
console.log("forma1", Number(numero5));//Forma recomendada
console.log("forma2", parseInt(numero5));
console.log("forma3", +numero5);
console.log("forma3", parseFloat(numero5));




const operacion = 3 * 2 + 10 - 5 / 2;

// Todo promp guarda los valores como String, por eso se coloca el Number()
const catetoA = Number(prompt("Ingrese el valor de A"));
const catetoB = Number(prompt("Ingrese el valor de B"));



const operacion2 = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB,2));

console.log("La hipotenusa es ", operacion2)


//Área de un rectángulo
// Todo promp guarda los valores como String, por eso se coloca el Number()
const baseRect = Number(prompt("Ingrese el valor de la base del rectángulo"));
const alturaRect = Number(prompt("Ingrese el valor de la altura del rectángulo"));

const areaRect = baseRect * alturaRect

console.log("El área del rectángulo es: ", areaRect);

//Hallar el área de un círculo
const radioCir = Number(prompt("Ingrese el valor del radio"));
const areaCir = Math.PI * (Math.pow(areaRect,2));

console.log("El área del círculo es: ", areaCir)
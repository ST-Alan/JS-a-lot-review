Objetos:

El nombre de la propiedad de un objeto puede ser cualquier cadena válida de JavaScript, o cualquier cosa que se pueda convertir en una cadena, incluyendo una cadena vacía. Sin embargo, cualquier nombre de propiedad que no sea un identificador válido de JavaScript (por ejemplo, el nombre de alguna propiedad que tenga un espacio o un guión, o comience con un número) solo se puede acceder utilizando la notación de corchetes.

Spreed Operator
El spreed operator es la sintaxis (...) que se utiliza para crear los objetos literales


forEach
El return no existe en el forEach
La alternativa que se tiene al forEach se llama map
Como no existe el return, no se puede almacenar dentro de una variable

Arrow Function
Cuando se tiene el arrow function en una sola línea de código el return está implicíto

Console.log
Uso del template string en console
Cuando se usa template estring (Estas: ``)en el console.log no va a aparecer el resultado como un arreglo sino como una cadena de texto. Tampoco va a aparecer como un objeto si es el caso. Ejemplo de esto se encuentra en la carpeta ejerciciosiv dentro del archivo edades.js en las lineas 5 y 6:
console.log(`Template string - arreglo principal edades ${edades}`)
console.log(`Template string - cuadradoEdades map ${cuadradoEdades}`)

En la consola se puede ver algo como: 
Templte string - arreglo principal edades 33,3,45,50
Templte string - cuadradoEdades map 1089,9,2025,2500

Si se desea ver en la consola los resultados como un arreglo o un objeto, según convenga, lo mejor es colocar el código con comillas simples(Estas: '') o comillas dobles(Estas: "") como ocurre en la carpeta ejerciciosiv dentro del archivo edades.js en las lineas 7 y 8:
console.log('Comillas simples- arreglo principal edades', edades)
console.log('Comillas simples- cuadradoEdades map', cuadradoEdades)

En este caso los resultados se pueden ver como:
Comillas simples- arreglo principal edades (4) [33, 3, 45, 50]
Después del texto entre 'comillas simples' o "comillas dobles" aparece una flecha que se puede desplegar. Según esto,

En la consola se puede ver algo como: 
Comillas simples- arreglo principal edades (4) [33, 3, 45, 50]
0: 33
1: 3
2: 45
3: 5
0
length: 4
[[Prototype]]: Array(0)


Uso del map y del forEach
En el frontend lo más usado es el map y en el backend el forEach
En el fronted es más usado las vistas, por eso se usa más el map en react



Arrow Function
En el arrow function inline no hace falta el return
una función de flecha normal: 

const saludar = (nombre)=>{
	return `Hola ${variable}`
}

Una arrow function in line be like:
const saludar2 = ()=> `Hola {$variable}`


Un arrow function de un objeto se vería así:
const getUser= ()=>{
	return{
		uid: 'ABCD'
		username:'userName84'
	}
}
console.log(getUser())

Para ponerlo inline sería así:
const getUser= ()=>({
		uid: 'ABCD'
		username:'userName84'
	})
console.log(getUser())
De esta forma se le dice a javaScript que esto no es el cuerpo de una función lo que deseo regresar es un objeto


Filter:
Es el hermano de map porque filter tambien retorna un array de elementos
sin embargo filter sirve para poder crear filtro en base a un condicion
queremos solo los productos que tenga como precio > 100
Si el elemento es > 100 entonces guardalo en la variable filtro

Para buscar una marca que conteng la palabra 'my' (dentro de D:\codigo\git\codigo-16\filter\app.js) dentro de un arreglo, se hace de la siguiente forma:
let filtro2 = clothes.filter(clothe => clothe.price > 100 && clothe.brand.includes('my'))
console.log(filtro2)

Cuando se desea colocar el texto de búsqueda en letras pequeñas o grandes es mejor usar el toLocale (Upper or Lower). Ejemplo: toLocaleLowerCase()

Si hay condicionales se debe colocar primero la transformación del texto. Ejemplo:

Si se coloca la siguiente línea va a dar un error:
let filtro4 = clothes.filter(clothe => clothe.price > 100 && clothe.brand.toLocaleLowerCase().includes('MY'))
console.log('4', filtro2)

Primero debería colocarse así:
let filtro3 = clothes.filter(clothe => clothe.brand.toLocaleLowerCase().includes('my'))
console.log('3', filtro2)

Si no se usa la transformación del texto no sucede ningún error. Ejemplo:
let filtro2 = clothes.filter(clothe => clothe.price > 100 && clothe.brand.includes('my'))
console.log('2', filtro2)


Find:
Retorna un solo elemento. No retorna array como el filter
El find si se puede almacenar en una variable
Sólo devuelve un resultado, por eso no retorna array
const variableH1 = document.querySelector("H1");
variableH1.innerText = " Hola Mundo "
console.log(variableH1)

document.title = "Made with JS"

// tagname:Nombre de la etiqueta
// style: Acceder a css para modificar
//!En JS las clases son las mismas que en css, pero no se usa guion sino que se usa camelCase

document.body.style.backgroundColor = "#21232A"
document.body.style.fontFamily = "Helvetica"

variableH1.style.color ="#f7f2ff"



//Código del profe Linder
// DOM
// Document Object Model
const variableH1 = document.querySelector("h1");
// innerHTML = Se usa para escribir etiquetas
// innerText = Para poder escribir dentro de las etiquetas
variableH1.innerText = "Cambiando el valor del H1 desde JS";
console.log(variableH1);
// Podremos cambiar el title desde JS?
document.title = "Lo hicimos en JS";

// tagname = El nombre de la etiqueta
// ejm
// <h1> </h1> = h1
// <div></div> = div

// SEPAN QUE TAMBIEN PODEMOS MODIFICAR EL CSS
// La forma en la cual podemos modifcar los estilos de nuestra
// pagina es usando style

//! Nota: Las propiedad son las misma que CSS sin embargo no usan guiones
//! En JS se usa camellcase
document.body.style.backgroundColor = "#c3c3c3";
document.body.style.fontFamily = "Helvetica";

//* Lo recomendable no es usar CSS dentro de JS
variableH1.style.color = "blue";

//! NOTA SUPER IMPORTANTE : EN JS TODO ES UN OBJETO
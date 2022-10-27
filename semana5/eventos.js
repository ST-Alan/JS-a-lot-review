//Eventos

//Un evento es una acción que el universo o el navegador pueden activar
//onclick =>Se activa cuando el usurio usa el mouse y clickea un elemento
//Para activar los eventos podemos hacer desde JS o desde HTML

// Tipos de eventos

// onchange
// onkeyup
// onsubmit
// onmouseover
// onfocus
// onblur
// onclick
// onmouseout
// onmousemove
// onmouseleave

const btnTest = document.querySelector('#btn-test');

//evento onclick con arrow function
btnTest.onclick = () =>{
	console.log("Es un click")
};

//evento onclick con function
// btnTest.onclick = function (){
// 	console.log("Es un click")
// }

const variableh1 = document.querySelector("#h1-test");

variableh1.onclick = ()=>{
	console.log("click desde h1");
	variableh1.innerText = "Cambiando el texto";
}



//Profe Linder
// Vamos a captura los datos de nuestro formulario y guardarlo
// en un array de objetos
const users = [];

const form = document.querySelector("#form-store-user");

// vamos agregar el evento onsubmit

//! NOTA el evento onsubmit tiene una prepiedad
//! la cual nos da un parametro que esta implicito
//! este parametro contiene la informacion del evento
//! y se suele event o e
form.onsubmit = (event) => {
  // * NOTA Un formulario al tener el evento submit va a recargar la pagina
  //? Para evitar que el evento onsubmit recargue la pagina podemos usar el
  //? evento.preventDefault() esta funcion bloquea esa accion de recargar la pagina
  event.preventDefault();
  // console.log(event.target);

  //!Nota La informacion de los inputs siempre estara en el target

  // * Existe la clase FormData
  const formData = new FormData(event.target);

  // vamos a crar un objeto user
  const user = {};

  for (let dato of formData.entries()) {
    // ['name', 'Linder']
    // ['last_name', 'Hassinger']
    console.log("key", dato[0]);
    console.log("value", dato[1]);
    console.log("---------------");
    // en el for vamos a agregar los campos a user
    //car["doors"] = 5
    user[dato[0]] = dato[1];
  }

  users.push(user);
};
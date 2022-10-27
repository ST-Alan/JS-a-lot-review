let edad = 20;

switch (edad) {
  case 0:
    console.log("Reicien nacido");
    break;
  case 18:
    console.log("Mayor de edad");
    break;
  case 20:
    console.log("Entro a base 2");
    break;
  case 65:
    console.log("Entro a la 3ra edad");
    break;
  default:
    console.log("Este caso no esta conteplado");
  // !Nota en el defaulta no hace falta poner break porque solo entra
  // !ahi cuando ni una otra opcion funciona
}

switch (angulo) {
  case 0:
    document.write("<p>Nulo.</p>");
    // despues de ejecutar lo que queremos
    break;
  case 90:
    document.write("<p>React0.</p>");
    break;
  case 180:
    document.write("<p>LLano.</p>");
    break;
  case 360:
    document.write("<p>Completo.</p>");
    break;
}


let angulo = 20;
document.write("<p>" + angulo + "</p>");

let mensaje = "<p>INEXS.</p>";

if (angulo === 0) {
  mensaje = "<p>Nulo.</p>";
} else if (angulo < 90) {
  mensaje = "<p>Águdo.</p>";
} else if (angulo === 90) {
  mensaje = "<p>Recto.</p>";
} else if (angulo < 180) {
  mensaje = "<p>Obtuso.</p>";
} else if (angulo === 180) {
  mensaje = "<p>Llano.</p>";
} else if (angulo < 360) {
  mensaje = "<p>Concavo.</p>";
} else if (angulo === 360) {
  mensaje = "<p>Completo.</p>";
}

document.write(mensaje);


const nombres = ["Pepe", "Juan", "Maria", "Luisa", "Carlos", "Lucas"]

const data = [1, true, false, -2, "Hola Mundo"];
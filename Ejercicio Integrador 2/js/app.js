/* #Paso 1
Se generará una ventana de usuario donde se preguntará el rol , el rol debe ser admin o recursos,
como en la siguiente referencia*/

var rol1 = "admin";
var rol2 = "recursos";

var ingresaRol = prompt("cuales tu rol?");

if (ingresaRol == rol1 || ingresaRol == rol2) {
  var clave = prompt("Cual es su clave?");
  if (clave == 1234 && (ingresaRol == rol1 || ingresaRol == rol2)) {
    var nombre = prompt("Cual es su nombre de usuario?");

    var referencia = document.getElementById("resultado-rol");
    referencia.innerHTML = "Hola " + nombre + " bienvenid@ a nuestra aplicacion!";
  } else {
    var referencia2 = document.getElementById("resultado-rol2");
    referencia2.innerHTML =
      "A habido un error, pregunte a su supervisor rol y contraseña correctas!";
  }
} else {
  var referencia2 = document.getElementById("resultado-rol2");
  referencia2.innerHTML =
    "A habido un error. pregunte a su supervisor rol y contraseña correctas!";
}

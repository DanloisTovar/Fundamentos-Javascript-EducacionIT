//Se generará un arreglo con 4 datos.

// var personas = [];

// personas = ["Ana", "Danlois", "Virginia", "Camila", "Luisa"];

// Se sumará un dato al arreglo, y se mostrará en una ventana de alerta.

// personas.push("Daniel");

// var mostar = personas[personas.length - 1];

// alert(mostar);

// Se sumará una ventana de prompt y esta me permitirá sumar un dato al arreglo

// var imprime = prompt("Ingrese un nombre");

// personas.push(imprime);

// document.getElementById("prueba").innerHTML = personas;

//Se generará un arreglo de empleados, donde indicaremos su nombre, apellido y edad

//=================== Aplicacion================================
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

//=========================Tabla================================

if (clave == 1234 && (ingresaRol == rol1 || ingresaRol == rol2)) {
  var empleados = [];
  //tuve que colocar &nbsp para alinear! existira otra manera?
  var empleados = [
    ["Danlois", "tovar&nbsp&nbsp", 40],
    ["Ana&nbsp&nbsp&nbsp&nbsp&nbsp", "Garcia", 25],
    ["Maria&nbsp&nbsp", "Zarate", 34]
  ];
  var mensaje = "";
  for (i = 0; i < empleados.length; i++) {
    mensaje += empleados[i] + "<br>";
  }
  document.getElementById("titulo").innerHTML = "Nombre apeliido Edad";
  // esta expresion -> /,/g, se usa pra remplazar todas las comas del arreglo o caracter de manera gobal.
  document.getElementById("prueba").innerHTML = mensaje.replace(/,/g, "&nbsp&nbsp&nbsp");
}

/*Profesor me gustaria saber si existe alguna manera de hacer la tabla y que quede igual al resultado del ejercicio intrgrador 3*/

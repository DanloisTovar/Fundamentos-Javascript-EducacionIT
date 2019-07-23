// var a = 1;
// var b = "Hola a todos";
// var c = false; // True - fasle;

// console.log(b);
// console.log(typeof a);
// console.log(" el tipo de variable de a es : ", typeof a);

// // Condicionales:
// if (c == false) {
//   alert("c es falso!!!");
// }

// para confirmar con aceptar o cancelar!!
// var resultado = confirm("desea ingresar?");

// if (resultado == true) {
//   alert("Bienvenido!!!");
// } else {
//   alert("chao, lo esperamos pronto!!!");
// }

// var edad = prompt("ingrese su edad");

// if (edad >= 18) {
//   alert("Usted es mayor de edad");
// } else {
//   alert("Ud es menor de edad!!");
// }

// operadores logicos de comparacion:

// == : igual
// >= : Mayor o igual
// <= : menor o igual
// > : Mayor que
// < : Menor que
//=== : identico (valor y tipo de variable)
// d = 45;
// console.log(d >= 18);

// comparativos :

// && and (Y);

// || OR (O)

// ! not

// && : operador Y - AND
// 			true && true
// 			resultado: true

// 			true && false
// 			resultado: false

// 			false && false
// 			resultado: false

// 			false && true
// 			resultado: false

// 		|| : operador o - OR
// 			true || true
// 			resultado: true

// 			true || false
// 			resultado: true

// 			true || false
// 			resultado: true

// 			false || false
// 			resultado: false

// 		! : NOT
// 			!true
// 			resultado: false

// 			!false
// 			resultado: true

// 		*/

// if anidados!

// var edad = prompt("Por favor ingrese su edad");

// if (edad < 18) {
//   if (edad < 4) {
//     alert("usted es un bebe");
//   } else if (edad >= 4 && edad < 12) {
//     alert("Ustedes un niño");
//   } else if (edad >= 12 && edad < 16) {
//     alert("Usted es un adolescente");
//   } else {
//     alert("Usted es un Joven");
//   }
// } else {
//   alert("usted es mayor edad!!");
// }

// // toLowerCase(); es para pasar todo a minuscula
// // nombre.toLowerCase();

// var nombre = prompt("ingrese su nombre");
// nombre = nombre.toLowerCase();

// switch (nombre) {
//   case "Pepe":
//   case "pepe":
//     alert("hola como estas!");

//     break;
//   case "ana":
//     alert("pasa");

//     break;

//   default:
//     alert("No te conozco!");
//     break;
// }
//=====================================================================================================================================

// Esto es el famoso DOM

var fecha = new Date(); //Date(); == es la fecha y hora del sistema.

var cambiosReferencia = document.getElementById("titulo"); //tomar elemento del id
cambiosReferencia.innerHTML = fecha; //"Te pisé"; //sobrescribir en el getelementbyid remplazar un elemento de html
cambiosReferencia.style.color = "white";
cambiosReferencia.style.backgroundColor = "black";
cambiosReferencia.style.padding = "10px";
cambiosReferencia.style.borderRadius = "12px";

// var cambiosReferencia2 = document.getElementById("dia-semana-id");
// cambiosReferencia2.innerHTML = fecha;
// cambiosReferencia2.style.padding = "10px";
// cambiosReferencia2.style.borderRadius = "12px";

// metodo Abreviado:

var numeroDiaDeLaSemana = fecha.getDay();
var diaSemana; //fecha.getDay();

// switch (fecha.getDay()){}

switch (numeroDiaDeLaSemana) {
  case 0:
    diaSemana = "Domingo";

    break;

  case 1:
    diaSemana = "Lunes";

    break;

  case 2:
    diaSemana = "Martes";

    break;

  case 3:
    diaSemana = "Miercoles";

    break;

  case 4:
    diaSemana = "Jueves";

    break;

  case 5:
    diaSemana = "Viernes";

    break;

  case 6:
    diaSemana = "Sabado";

    break;

  default:
    diaSemana = "????";
    break;
}

document.getElementById("dia-semana-id").innerHTML = "Hoy es " + diaSemana + " !!!";
document.getElementById("dia-semana-id").style.padding = "10px";
document.getElementById("dia-semana-id").style.borderRadius = "12PX";

// querySelector:

// document.querySelector("#dia-semana-id").innerHTML = "Hoy es " + diaSemana + " !!!";
document.querySelector("#dia-semana-id").innerHTML =
  "Qs id: Hoy es " + diaSemana + " !!!";
document.querySelector(".dia-semana-class").innerHTML =
  "Qs class: Hoy es " + diaSemana + " !!!";
document.querySelector("h3").innerHTML = "Qs TAG: Hoy es " + diaSemana + " !!!";

document.getElementById("dia-semana-id").style.borderRadius = "12PX";

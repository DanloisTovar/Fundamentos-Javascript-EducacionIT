var numero1 = 2;
var numero2 = 3;

var resultado = numero1 + numero2;

// suma:
document.write("<p>El resultado de la suma es: " + resultado + " </p>");

// resta:

var resultado = numero1 - numero2;
document.write("<p>El resultado de la suma es: " + resultado + " </p>");

//Division:
var resultado = numero1 / numero2;
document.write("<p>El resultado de la suma es: " + resultado + " </p>");

// alert(resultado + 1);

var paises = ["Argentina", "Brasil", "Uruguay"];

document.write("<p>" + paises[0] + "</p>");
document.write("<p>" + paises[1] + "</p>");
document.write("<p>" + paises[2] + "</p>");

// comparativos
var resultado = numero1 > numero2;

document.write("<p> el resultado de la comparacion es : " + resultado + "</p>");

var resultado = numero1 == numero2;

document.write("<p> el resultado de la comparacion es : " + resultado + "</p>");

numero1 = 3;
resultado = numero1 == "3";
// compara solo valor:
document.write("<p> el resultado de la comparacion es : " + resultado + "</p>");

resultado = numero1 === "3";
// compara no solo valor:
// sino tipo de variable:
document.write("<p> el resultado de la comparacion es : " + resultado + "</p>");

var nombre = window.prompt("Cual es tu nombre ?");

alert("Tu nombre es: " + nombre);

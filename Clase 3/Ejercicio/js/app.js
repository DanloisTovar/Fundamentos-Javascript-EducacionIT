/*var personas = [];
var persona;

do {
  persona = prompt("ingrese un nombre. Escrina exit para salir");

  if (persona.toLowerCase() != "exit") {
    personas.push(persona);
  }
} while (persona != "exit");

alert("fin");

var referencia3 = document.getElementsByTagName("h1");

referencia3[0].innerHTML = personas;
referencia3[1].innerHTML = "Hola";*/

var tareas = [];
var tarea;
do {
  tarea = prompt("Ingresa una tarea. con fin se termina el proceso");

  if (tarea.toLowerCase() != "fin") tareas.push(tarea);
} while (tarea.toLowerCase() != "fin");
//alert('fin');

var ref = document.getElementsByTagName("h1");

for (tarea = 0; tarea < tareas.length; tarea++) {
  ref[0].innerHTML +=
    "<br>" + " - " + '<span style="color: red;">' + tareas[tarea] + "</span>";
}
ref[1].innerHTML = "";

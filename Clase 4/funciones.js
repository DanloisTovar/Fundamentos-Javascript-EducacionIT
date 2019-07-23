// Funciones:

function calcularTareaFin(tareainical, cantcal) {
  return tareainical + cantcal - 1;
}

function hacertareas(tareaini, cant) {
  var tareafin = calcularTareaFin(tareaini, cant); //tareaini + cant;
  console.log("tareaini", tareaini);
  console.log("tareafin", tareafin);

  for (var i = tareaini; i <= tareafin; i++) {
    console.log("tarea" + i);
  }
  /*console.log("tarea1");
  console.log("tarea2");
  console.log("tarea3");
  console.log("tarea4");
  console.log("tarea5");
  console.log("tarea6");
  console.log("tarea7");
  */
}
console.log("----> 12:00 PM");

for (var veces = 1; veces <= 3; veces++) {
  console.log("veces", veces);
  hacertareas(1, 6);
}

console.log("----> 4:00 PM");
hacertareas(7, 4);

console.log("----> 8:00 PM");
hacertareas(11, 2);

var array = [1, 2, 3, 4, 5];
console.log(array);

function suma(a, b) {
  var c = a + b;

  return c;
}

//Esto es una funcion anonima: porque no tiene nombre como la anterior que es function suma--> suma es el nombre)()-->parametros {} --> llaves.
var suma2 = function(a, b) {
  return a + b;
};

console.log("El total de a suma es: " + suma(3, 2));

console.log("El total de a suma es: " + suma2(7, 9));

// una variable contiene valores y una funcion ejecuta acciones. una funcion puede guardarse en una variable para luego ser ejecutada.

/*Estructura de Iteracion -> Do While*/

// var SubirLasEscalerasHastaPisoX = 0;
// var contadorEscalonSubido = 0;

// console.log("Empece a subir escalera");
// while (contadorEscalonSubido < SubirLasEscalerasHastaPisoX) {
//   //contadorEscalonSubido = contadorEscalonSubido + 1;
//   contadorEscalonSubido++;
//   console.log("Subir escalon");

//   console.log(contadorEscalonSubido + "\n");
// }

// console.log("Al fin termine de subir!!!");

// /*Estructura de Iteracion -> Do While*/
// var SubirLasEscalerasHastaPisoX = 10;
// var contadorEscalonSubido = 0;

// console.log("Empece a subir escalera");
// do {
//   //contadorEscalonSubido = contadorEscalonSubido + 1;
//   contadorEscalonSubido++;
//   console.log("Subir escalon");

//   console.log(contadorEscalonSubido + "\n");
// } while (contadorEscalonSubido < SubirLasEscalerasHastaPisoX);

// console.log("Al fin termine de subir!!!");

// /*Ciclo de iteracion FOR:*/

// var cantidadDeEscalonesSubidosHastaElPsisoX = 10;

// for (
//   var contadorEscalonSubido = 0;
//   contadorEscalonSubido <= cantidadDeEscalonesSubidosHastaElPsisoX;
//   contadorEscalonSubido++
// ) {
//   console.log("Subir escalon");
// }

// var referencia = document.querySelector("#display");

// referencia.innerHTML = "Hola!" + "<br>";

// usuarios = ["Pedro", "juan", "Ana", "Paula", "Jose"];
// // referencia.innerHTML + usuarios[0];
// referencia.innerHTML += usuarios[0] + "<br>";
// referencia.innerHTML += usuarios[1] + "<br>";
// referencia.innerHTML += usuarios[2] + "<br>";
// referencia.innerHTML += usuarios[3] + "<br>";
// // Este simbolo += es igual a : referencia.innerHTML = referencia.innerHTML + usuarios[3] + "<br>";

// for (var usuario = 0; usuario < usuarios.length; usuario++) {
//   referencia.innerHTML += usuarios[usuario] + "-";
// }

// console.log(usuarios.length);
// console.log(usuarios[usuarios.length - 1]); // revisar clase mañana

//falta segundo for de la clase:

var referencia2 = document.querySelector("h5");

var resultado = "";

var str1 = "Hola";
var str2 = "Mundo";
// resultado = str1+" " + str2; = chaining!

// concat() = concatenar
resultado = str1.concat(" ").concat(str2);
referencia2.innerHTML += resultado + "<br>";

//indexOf:

var str3 =
  "Lorem ipsum*dolor sit amet, consectetur adipisicing elit. Vitae eos cupiditate ad eaque dolorem blanditiis molestiae nam nobis repudiandae eveniet placeat cum, suscipit culpa atque dolore quisquam voluptas, quidem aliquid.";

ref.innerHTML += '<i style="color: blue;">indexOf</i>' + "<br>";
resultado = str3.indexOf("ipsum");
ref.innerHTML += resultado + "<br><br>";

//replace
ref.innerHTML += '<i style="color: blue;">replace</i>' + "<br>";
resultado = str3.replace("cupiditate", "!!!");
ref.innerHTML += resultado + "<br><br>";

//split
ref.innerHTML += '<i style="color: blue;">split</i>' + "<br>";
resultado = str3.split(" "); // ['Lorem','ipsum',....]
ref.innerHTML += resultado + "<br><br>";

for (var i = 0; i < resultado.length; i++) {
  console.log(i, resultado[i]);
}

//substring
ref.innerHTML += '<i style="color: blue;">substring</i>' + "<br>";
resultado = str3.substring(0, 11);
ref.innerHTML += resultado + "<br><br>";

//toLowerCase
ref.innerHTML += '<i style="color: blue;">toLowerCase</i>' + "<br>";
resultado = str3.toLowerCase();
ref.innerHTML += resultado + "<br><br>";

//toUpperCase
ref.innerHTML += '<i style="color: blue;">toUpperCase</i>' + "<br>";
resultado = str3.toUpperCase();
ref.innerHTML += resultado + "<br><br>";

//trim
console.log("metodo trim");

var str4 = "       hola mundo         ";
console.log("Antes del trim (" + str4 + ")");
resultado = str4.trim();
console.log("Despues del trim (" + resultado + ")");

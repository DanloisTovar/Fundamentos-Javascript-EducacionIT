// Arrays:

var usuarios = ["Ana", "Paula", "Pedro", "Juan"];
/*
console.log(usuarios[0]);
console.log(usuarios.length);
console.log(usuarios[usuarios.length - 1]);

// push--> agregar en la ultima posicion del array un elemento.
usuarios.push("Gabriel");
console.log("push: " + usuarios);

// pop--> sacar el ultimo elemento de la array

usuarios.pop();
console.log("pop: ", usuarios);

usuarios.pop();
console.log("pop: ", usuarios);

// unshif colocar elementos de primero en el array

usuarios.unshift("Gabriela");
console.log("Unshift: " + usuarios);

// Shift --> quita el primer elemento del array.

usuarios.shift();
console.log("shift: ", usuarios);

usuarios.shift();
console.log("shift: ", usuarios);
*/

console.log(usuarios);

// sort --> es un metodo que ordena alfabeticamente los array.

console.log("sort: " + usuarios.sort());

// splice--> para sacar un elemento de un array.

usuarios.splice(2, 1);
console.log(usuarios);

// indexOf --> buscar elementos en el array

console.log("indexOf Pedro", usuarios.indexOf("Pedro"));

/*

var usuariosArray = ["Ana", "Paula", "Pedro", "Juan"];
console.log(usuariosArray);
console.log(usuariosArray[0]);
console.log(usuariosArray[1]);
console.log(usuariosArray[2]);
console.log(usuariosArray[3]);

var usuarioObject = {
  nombreuser1: "Ana",
  nombreuser2: "Paula",
  nombreuser3: "Pedro",
  nombreuser4: "Juan"
};

console.log(usuarioObject);
console.log(usuarioObject.nombreuser1);
console.log(usuarioObject.nombreuser2);
console.log(usuarioObject.nombreuser3);
console.log(usuarioObject.nombreuser4);

// objetos una manera de acceder muy parecida a los arrays.

console.log(usuarioObject["nombreuser1"]);
console.log(usuarioObject["nombreuser2"]);
console.log(usuarioObject["nombreuser3"]);
console.log(usuarioObject["nombreuser4"]);


*/

var usuario = {
  nombre: "Camila",
  apellido: "Tovar",
  edad: 29,
  foto: "https://cdn0.iconfinder.com/data/icons/user-avatar-19/64/57-woman-256.png",
  getFullName: function() {
    return this.nombre + " " + this.apellido;
  }
};

console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.edad);
console.log(usuario.foto);
console.log(usuario.getFullName());

document.getElementById("fotos").innerHTML = '<img src="' + usuario.foto + '" alt="" />';

usuario.nombre = "Pedro";
usuario.apellido = "Gonzalez";
usuario.edad = 44;
usuario.foto =
  "https://cdn0.iconfinder.com/data/icons/user-avatar-18/64/28-tom_boy-256.png";

console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.edad);
console.log(usuario.foto);
console.log(usuario.getFullName());

document.getElementById("foto2").innerHTML = '<img src="' + usuario.foto + '" alt="" />';

// Listo aclarado!!!!!

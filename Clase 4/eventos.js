// eventos:

var contador = 0;
function contar() {
  contador++;
  console.log(contador);
  document.getElementById("contador").innerHTML = contador;
}

/*document.getElementById("parrafo").onclick = function() {
  alert("hiciste clip en el texto");
};*/

document.getElementById("parrafo").onmouseover = function() {
  alert("Pasaste el mouse por encima del texto");
};

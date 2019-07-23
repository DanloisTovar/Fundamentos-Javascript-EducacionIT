// semaforo:

var estado = 0;

function colorLuzSemaforo(id, prender) {
  var color = "grey";
  if (prender) color = id;
  document.getElementById(id).style.backgroundColor = color;
}
colorLuzSemaforo("red", true);
colorLuzSemaforo("yellow", false);
colorLuzSemaforo("green", false);

var modoAutomatico = false;
var timerSemaforo;

function modoSemaforo() {
  modoAutomatico = !modoAutomatico;

  document.getElementById("modo").innerHTML = modoAutomatico
    ? "<h3>Modo Automatico</h3>"
    : "<h3>Modo Manual</h3>";

  if (modoAutomatico) {
    timerSemaforo = setInterval(cambiarSemaforo, 2000);
  } else {
    clearInterval(timerSemaforo);
  }
}

function cambiarSemaforo() {
  var estados = ["Rojo", "Rojo-Amarillo", "Verde", "Amarillo"];
  console.log("cambiarSemaforo", estado, estados[estado]);

  switch (estado) {
    case 0:
      // rojo
      colorLuzSemaforo("red", true);
      colorLuzSemaforo("yellow", !true);
      colorLuzSemaforo("green", !true);
      break;
    case 1:
      // rojo-amarillo
      colorLuzSemaforo("red", true);
      colorLuzSemaforo("yellow", true);
      colorLuzSemaforo("green", !true);
      break;
    case 2:
      // verde
      colorLuzSemaforo("red", !true);
      colorLuzSemaforo("yellow", !true);
      colorLuzSemaforo("green", true);
      break;
    case 3:
      // amarillo
      colorLuzSemaforo("red", !true);
      colorLuzSemaforo("yellow", true);
      colorLuzSemaforo("green", !true);
      break;
    default:
      colorLuzSemaforo("red", !true);
      colorLuzSemaforo("red", !true);
      colorLuzSemaforo("red", !true);
      break;
  }

  estado++;

  if (estado > 3) estado = 0;
}

function cambiarSemaforoBoton() {
  if (!modoAutomatico) {
    cambiarSemaforo();
  }
}

// quede en el minuto 2:08:38

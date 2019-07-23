// Cambiar imagen:

var opcionElegida = 'piedra';
var piedra =
  'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/hand-rock-o-256.png';

var papel =
  'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/hand-stop-o-512.png';

var tijera =
  'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/hand-scissors-o-256.png';

//   imagen pre-seleccionada:
$('#img-jugador').attr('src', piedra);

$('select').change(cambio);

function cambio() {
  opcionElegida = $('select').val();

  console.log(opcionElegida);
  // if (opcion == 'piedra') foto = piedra;
  // else if (opcion == 'papel') foto = papel;
  // else if (opcion == 'tijera') foto = tijera;
  // $('#img-jugador').attr('src', foto);
  imprimirImagen('#img-jugador', opcionElegida);
  imprimirImagen('#img-computadora', '');
  $('h3').text('');
}

function sorteoComputadora() {
  var opciones = ['piedra', 'papel', 'tijera'];
  var numeroRandom = Math.random(); // 0-0.99999999
  numeroRandom *= 3; //0-2.999999
  numeroRandom = parseInt(numeroRandom); //0-2

  return opciones[numeroRandom];
}

$('button').click(jugar);
function jugar() {
  var opcionComputadora = sorteoComputadora();
  imprimirImagen('#img-computadora', opcionComputadora);
  $('h3').text(obtenerResultado);
  $('h3').css('font-size', '70px');
  $('h3').css('text-align', 'center');

  console.log(opcionElegida, opcionComputadora);
  var resultado = obtenerResultado(opcionElegida, opcionComputadora);
  $('h3').text(resultado);

  $('h3').text(obtenerResultado(opcionElegida, opcionComputadora));
  if (resultado == '"GANASTE"') $('h3').css('color', 'blue');
  else if (resultado == '"EMPATASTE"') $('h3').css('color', 'orange');
  else if (resultado == '"PERDISTE"') $('h3').css('color', 'red');
}

// cambio computadora:

// $('#img-jugador').attr('src', piedra);
function imprimirImagen(id, opcion) {
  var foto = '';
  if (opcion == 'piedra') foto = piedra;
  else if (opcion == 'papel') foto = papel;
  else if (opcion == 'tijera') foto = tijera;
  $(id).attr('src', foto);
}
imprimirImagen('#img-jugador', 'piedra');

// Quede en el tiempo 02:30:48

function obtenerResultado(om, oc) {
  var res = '"EMPATASTE"';

  if (om == 'piedra') {
    if (oc == 'papel') res = '"PERDISTE"';
    if (oc == 'tijera') res = '"GANASTE"';
  } else if (om == 'papel') {
    if (oc == 'tijera') res = '"PERDISTE"';
    if (oc == 'piedra') res = '"GANASTE"';
  } else if (om == 'tijera') {
    if (oc == 'piedra') res = '"PERDISTE"';
    if (oc == 'papel') res = '"GANASTE"';
  }
  return res;
}

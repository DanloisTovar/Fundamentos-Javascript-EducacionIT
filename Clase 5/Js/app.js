// libreria JQuery:

// document.querySelector('p').innerHTML = 'Hola mundo!!!';

// Sintaxis JQuery:

// asignador--> $ +(selector). + metodo();
// selector: tag, #id, .class

// $('p').html('Hola desde JQuery!!!');

$('div').html('<h1 style="color:red"> Hola mundo desde Jquery!!!</h1>');

// acceso por id="";

$('#contenido2').html(
  '<h1 style="color:blue"> Hola mundo desde Jquery!!!</h1>'
);

$('#contenido2').html('<h1 style="color:blue"> Hola desde Jquery!!!</h1>');

$('h3').text('<h1 style="color:blue"> Hola desde Jquery!!!</h1>');

$('#h3-dos').text('Hola desde JQuery 2');

// acceso por clase .class="";

$('.contenido3').html('Hola desde JQuery 3');

// agregando css:

// .css('propiedad','valor');

// $('.contenido3').css('color', 'white');
// $('.contenido3').css('background-color', 'green');

function cambiarColorContenido3(params) {
  $('.contenido3').css('color', 'white');
  $('.contenido3').css('background-color', 'purple');
}

// invocando funcion:
cambiarColorContenido3();

// eventos:

// addEventListener() --> es el que genera una conexion entre un determinado evento con un metodo.
// addEventListener('evento', metodo o funcion)

// document.getElementById('cambiar-color').addEventListener('click', cambiar);

/* addEventListener() esto esto otra manera de utlilizar onclick="":

<button id="cambiar-color" onclick="">CAMBIAR</button>
*/

function cambiarColor(cont) {
  var colores = ['teal', 'blue', 'orange', 'magenta'];
  console.log(cont, colores[cont]);
  return colores[cont];
}

var contador = 0;

function cambiar() {
  // $('#parrafo-1').css('color', colores[contador++]);
  $('#parrafo-1').css('color', cambiarColor(contador++));

  // if (contador >= 3) contador = -1;
  if (contador > 3) contador = 0;
}

$('#cambiar-color').click(cambiar);

// Este de metodo de  de arriba de Jquery sustituye o resume a:

// document.getElementById('cambiar-color').addEventListener('click', cambiar);

var flag = false;

$('#parrafo-2').dblclick(cambiar2);

function cambiar2() {
  flag = !flag;

  if (flag) {
    $('#parrafo-2').css('color', 'white');
    $('#parrafo-2').css('background-color', 'black');
  } else {
    $('#parrafo-2').css('color', 'black');
    $('#parrafo-2').css('background-color', 'white');
  }
}
var flag2 = false;
$('.ocultar').click(ocultar);
function ocultar() {
  flag2 = !flag2;

  if (flag2) {
    $('#parrafo-2').hide();
    $('.ocultar').text('MOSTAR');
  } else {
    $('#parrafo-2').show();
    $('.ocultar').text('OCULTAR');
  }
}

$('select').change(cambio);

function cambio() {
  var valor = $('select').val();
  console.log(valor);
}

$('input').val('123');

var flag3 = false;

var foto1 =
  'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-512.png';

var foto2 =
  '  https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-512.png';

$('.cambiar-img').click(cambiarImagen);
function cambiarImagen() {
  flag3 = !flag3;
  $('img').attr('src', flag3 ? foto1 : foto2);
}

// quede en el tiempo 01:43:29

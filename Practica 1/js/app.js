var dato1 = +prompt('Por favor introduzca el primer numero a calcular');
var dato2 = +prompt('Por favor introduzca el Segundo numero a calcular');

// Suma:
function suma(dato1, dato2) {
  let resultadoSuma = +dato1 + dato2;

  return resultadoSuma;
}

// Resta:
function resta(dato1, dato2) {
  let resultadoResta = dato1 - dato2;

  return resultadoResta;
}

// Multiplicacion:
function multiplicacion(dato1, dato2) {
  let resultadoMultiplicar = dato1 * dato2;

  return resultadoMultiplicar;
}

// Division:
function division(dato1, dato2) {
  let resultadodivision = dato1 / dato2;

  return resultadodivision;
}

var operaciones = prompt(
  'Para sumar Precione 1:' +
    '\n' +
    'Para resta presione 2:' +
    '\n' +
    'para multiplicar presione 3:' +
    '\n' +
    'para dividir presione 4:'
);

var resultadoId = document.getElementById('resultado');

function resultadosOperaciones() {
  if (operaciones == 1) {
    return suma(dato1, dato2);
  } else if (operaciones == 2) {
    return resta(dato1, dato2);
  } else if (operaciones == 3) {
    return multiplicacion(dato1, dato2);
  } else if (operaciones == 4) {
    return division(dato1, dato2);
  }
}

resultadoId.innerHTML += ' ' + resultadosOperaciones();
resultadoId.style.color = 'blue';

if (operaciones > 4) {
  let error =
    'ha colocado los datos fuera del rango especificado, presione F5 para reintentar';

  resultadoId.innerHTML = error;
  resultadoId.style.color = 'red';
}

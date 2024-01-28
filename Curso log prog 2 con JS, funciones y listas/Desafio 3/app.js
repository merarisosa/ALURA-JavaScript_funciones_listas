/*
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir 
de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
*/
function calculcaIMC(altura, peso) {
  let IMC = peso / (altura * altura);
  return IMC;
}

calculcaIMC(160, 4);

/*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/
function calculaFactorial(numero) {
  let resultado = numero;
  //validacion de factorial con case 1
  if (numero == 0 || numero == 1) {
    return 1;
  }
  while (numero > 1) {
    numero--;
    resultado = resultado * numero;
  }
  return resultado;
}

/*
Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo 
con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
*/
function conversorDolares(pesos){
    let pesoEnDolar = 19;
    let dolaresConvertidos = pesos*pesoEnDolar;
    return dolaresConvertidos
}

conversorDolares(1);

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.
*/
function areaPerimetro(alto, ancho){
    let area = alto * ancho;
    let perimetro = (alto * 2) + (ancho * 2);

    return `Area: ${area} y Perímetro: ${perimetro}`;
}

areaPerimetro(4.6);

/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
function areaPerimetro1(radio){

let area = Math.PI * (radio*radio);
let perimetro = 2 * Math.PI * radio;
return `Area: ${area} y Perímetro: ${perimetro}`;
}
console.log(areaPerimetro1(5));
/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */
function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);
  


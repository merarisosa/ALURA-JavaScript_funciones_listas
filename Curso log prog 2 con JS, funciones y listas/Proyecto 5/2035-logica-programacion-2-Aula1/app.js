/*Haciendo uso del DOM para editar html desde JS, permite acceder
 a los selectores del html. esta linea retorna el elemnto h1 del index 
 y lo guarda en una variable */
//let titulo = document.querySelector('h1');
//definimos el titulo del selector html
//titulo.innerHTML = 'Juego del número secreto';

let numeroSecreto;
let intentos;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

//optimizando codigo, para acciones repetitivas
function asignarTextoElemento(elementoHTML, textoAlHTML) {
  let elemento = document.querySelector(elementoHTML);
  elemento.innerHTML = textoAlHTML;
  return;
}

//funcion para generar un numero aleatorio
function generarNumeroSecreto() {
  let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(listaNumeroSorteado);
  //si se lleno la lista
  if (listaNumeroSorteado.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //verifica si el numero esta en la lista para no repetirse
    if (listaNumeroSorteado.includes(numeroSecreto)) {
      return generarNumeroSecreto();
    } else {
      listaNumeroSorteado.push(numeroSecreto);
      return numeroSecreto;
    }
  }
}

//USO DE EVENTOS, declaracion de funciones
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  //triple validacion, igual en valor, igual en comparacion e igual en tipo de dato
  console.log(numeroDeUsuario === numeroSecreto);
  console.log(numeroSecreto);
  console.log(intentos);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    //activar boton nuevo juego, llamar al boton
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  //obtener el elemento
  //let valorCaja = document.querySelector('#valorUsuario').value = '';
  let valorCaja = document.querySelector("#valorUsuario");
  valorCaja.value = "";
}

function condicionesIniciales() {
  //llamada a la funcion
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  asignarTextoElemento("h1", "Juego del número secreto");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function nuevoJuego() {
  //limpiar la caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //generar numero secreto
  //inicializar el numero de intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

/*Haciendo uso del DOM para editar html desde JS, permite acceder
 a los selectores del html. esta linea retorna el elemnto h1 del index 
 y lo guarda en una variable */
        //let titulo = document.querySelector('h1');
//definimos el titulo del selector html
        //titulo.innerHTML = 'Juego del número secreto';

let numeroSecreto = generarNumeroSecreto();

//optimizando codigo, para acciones repetitivas
function asignarTextoElemento(elementoHTML, textoAlHTML){
    let elemento = document.querySelector(elementoHTML);
    elemento.innerHTML = textoAlHTML;
    return;
}

//funcion para generar un numero aleatorio
function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}

//USO DE EVENTOS, declaracion de funciones
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    //triple validacion, igual en valor, igual en comparacion e igual en tipo de dato
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

//llamada a la funcion
asignarTextoElemento('p', 'Indica un número del 1 al 100');
asignarTextoElemento('h1', 'Juego del número secreto');
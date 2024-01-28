//Haciendo uso del DOM para editar html desde JS

//permite acceder a los selectores del html
//esta linea retorna el elemnto h1 del index y lo guarda en una variable
let titulo = document.querySelector('h1');
//definimos el titulo del selector html
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

//USO DE EVENTOS, declaracion de funciones
function intentoDeUsuario(){
    alert('click desde el botón');
}
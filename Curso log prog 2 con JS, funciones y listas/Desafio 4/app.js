/** Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica = [];
/*
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
/*
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
 'Java', 'Ruby' y 'GoLang'.*/
 lenguagesDeProgramacion.push('Java');
 lenguagesDeProgramacion.push('Ruby');
 lenguagesDeProgramacion.push('GoLang');

 /*
Crea una función que muestre en la consola todos los elementos de la
lista "lenguagesDeProgramacion.*/
function mostrarLenguajes(){
    for(i=0; i<lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
/*
Crea una función que muestre en la consola todos los elementos de la 
lista "lenguagesDeProgramacion en orden inverso.*/
function mostrarLenguajesInverso(){
    for(i=lenguagesDeProgramacion.length-1; i>=0; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}
/*
Crea una función que calcule el promedio de los elementos en una lista de números.*/
let lista = [1,2,3,4,5];
function promedio(lista){
    let suma = 0;
    for(i=0; i<lista.length; i++){
        suma += lista[i];
    }
    return suma/lista.length;

}
/*
Crea una función que muestre en la consola el número más grande y 
el número más pequeño en una lista.*/
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);

/*
Crea una función que devuelva la suma de todos los elementos en una lista.*/

function sumaLista(lista){
    let sum;
    for(i=0; i<lista.length; i++){
        sum += lista[i];
    }
    return sum;
}
/*
Crea una función que devuelva la posición en la lista donde se encuentra 
un elemento pasado como parámetro, o -1 si no existe en la lista.*/
function position(lista, indice){
    for (i=0; i<lista.length; i++){
        if(lista[i] === indice){
            return i;
        }else{
            return -1;
        }
    }
}

let indice = 1;
/*
Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.*/
/*
Crea una función que reciba una lista de números y devuelva una nueva 
lista con el cuadrado de cada número.*/

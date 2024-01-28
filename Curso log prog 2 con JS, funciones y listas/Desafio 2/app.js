/*
 Crear una función que muestre "¡Hola, mundo!" en la consola.
 */
function saludo(){
    console.log("¡Hola, mundo!");
}
saludo();

 /*
Crear una función que reciba un nombre como parámetro y muestre
 "¡Hola, [nombre]!" en la consola.
 */
function saludar(nombre){
    let nombre = prompt("Dime tu nombre: ");
    return console.log(`¡Hola, ${nombre}!`);
}

/*
Crear una función que reciba un número como parámetro y
 devuelva el doble de ese número.
 */
function numero(numero){
    let numero =  prompt("Dame un numero: ");
    return console.log(`El doble de ${numero} es ${parseInt(numero*2)}`);
    
}
/*
Crear una función que reciba tres números 
como parámetros y devuelva su promedio.
*/
function promedio(x,y,z){
    let num1 = prompt("Numero 1: ");
    let num2 = prompt("Numero 2: ");
    let num3 = prompt("Numero 3: ");
    let promedio = num1 + num3 + num3 / 3;
    return console.log(promedio);
}
/*
Crear una función que reciba dos números como parámetros y 
devuelva el mayor de ellos.
*/
function mayor(x,y){
    let num1 = prompt("Numero 1: ");
    let num2 = prompt("Numero 2: ");
    if (parseFloat(num1) > parseFloat(num2)) {
         return console.log(`${num1} es el mayor.`);
    } else {
        return console.log(`${num2} es el mayor.`);
         }
}
let isMayor = mayor(x,y);
/*
Crear una función que reciba un número como parámetro y devuelva 
el resultado de multiplicar ese número por sí mismo.
 */

function multiplicar(numero){
    let numero =  prompt("Dame un numero: ");
    return console.log(`La multiplicación de  ${numero} por sí mismo es ${parseInt(numero*numero)}`);
    
}
// script.js
document.addEventListener("DOMContentLoaded", function() {

/* Unidad 04
Resolver los ejercicios utilizando variables y operadores. Para el ingreso y egreso de información utilizar los métodos de JavaScript 
vistos en clase. Cada ejercicio debe ser realizado en un archivo HTML y un JS (extensiones .html y .js)*/

/*22. Se le solicita al usuario que ingrese 3 números. 
Realice un programa para informar si el número es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.*/
 
var numero1 = parseInt(prompt("Ingrese el primer número: "));
var numero2 = parseInt(prompt("Ingrese el segundo número: "));
var numero3 = parseInt(prompt("Ingrese el tercer número: "));

function checaMultiplos(numero) {
    if (numero !== 0) {
        var esMultiploDe3 = numero % 3 === 0;
        var esMultiploDe5 = numero % 5 === 0;

        if (esMultiploDe3 && esMultiploDe5) {
            return " sí es múltiplo de 3 y de 5";
        } else if (esMultiploDe3) {
            return " solo es múltiplo de 3";
        } else if (esMultiploDe5) {
            return " solo es múltiplo de 5";
        } else {
            return " no es múltiplo ni de 3 ni de 5";
        }
    } else {
        return " el número es cero";
    }
}

alert(numero1 + checaMultiplos(numero1));
alert(numero2 +  checaMultiplos(numero2));
alert(numero3 + checaMultiplos(numero3));


    
});
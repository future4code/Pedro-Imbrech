const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
    /*false*/

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
    /*false*/

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
    /*true*/

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
    /*false*/

console.log("e. ", typeof resultado)
    /*boolean*/



/*------------------------------------------------------------------------------------*/
let array
console.log('I. ', array)
    /*I.  undefined*/

array = null
console.log('II. ', array)
    /*II.  null*/

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
    /*III.  11*/

let i = 0
console.log('IV. ', array[i], " e ", array[i + 1])
    /*IV.  3  e  4*/

array[i + 1] = 19
const valor = array[i + 6]
console.log('V. ', array[i + 1], " e ", valor)
    /*V.  19  e  9*/

i += 1
array[i] = array[i - 1]
console.log('VI. ', array[i])
    /* VI.  3*/

i = array.length - 1
array[i] = array[i - 3]
const resultadoC = array[i] % array[1]
console.log('VII. ', resultadoC)
    /*VII.  1*/

/*Graus Fahrenheit(°F) para Kelvin(K)*/

/*(KELVIN) = (GRAUS_FAHRENHEIT - 32) * 5 / 9 + 273.15 */

/*Graus Fahrenheit(°F) para Kelvin(K)*/

/*(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS) * 9 / 5 + 32 */

/*a.Calcule e mostre o valor de 77° F em K, mostrando a unidade no console também. */
let GRAUS_FAHRENHEIT = 77;
let KELVIN = (GRAUS_FAHRENHEIT - 32) * 5 / 9 + 273.15;
console.log(KELVIN + " °K");

/*b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.*/

let CENTIGRADO = 80;
let FAHRENHEIT = (CENTIGRADO * 9 / 5) + 32;
console.log(FAHRENHEIT + " °F");


/*c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.*/

let CENTIGRADOS = prompt("ingresa la temperatura");
let FAHRENHEITS = (CENTIGRADOS * 9 / 5) + 32;
let KELVINS = CENTIGRADOS + (273.15);

console.log(FAHRENHEITS + " °F " + KELVINS + " K");

/*d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.*/



let endereco = prompt("Qual o seu endereço?");
console.log("Rua ABC, 123");

let color = prompt("Qual a sua cor favorita");
console.log("Azul");
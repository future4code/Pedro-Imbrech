/*const minhaFuncao = (quantidade) => {
    const array = []
    for (let i = 0; i < quantidade; i += 2) {
        / /
        i = 2
        for (let j = 0; j < i; j++) { // j = 1
            array.push(j) // j deveria ser 1 na primeira posição?
        }
    }
    return array
}*/


//const resultado = minhaFuncao(2)
//console.log(resultado)

//const resultado = minhaFuncao(5)------------> ele nem entra no loop
//console.log(resultado)

//const resultado = minhaFuncao(8)------------> ele nem entra no loop
//console.log(resultado)
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

/*
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nome) {
            return i;
        }
    }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));
*/
//a. Explicite quais são as saídas impressas no console
//imprime a posição zero y a posição 2

/*b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`) 
 e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.*/

//Se fosse uma matriz de números, a lista não funciona


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];

    for (let x of array) {
        resultadoA += x;
        resultadoB *= x;
    }

    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
}



//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
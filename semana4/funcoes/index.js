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
/*
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
}*/

//soma e multiplica Resultado e resultado A e B logo restorna os valore de a variavel.

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//EXERXIO4
//EXERXIO a
/* 
function idadeCachorro(idade) {
    const idadedeCachorro = 7

    return idade * idadedeCachorro

}
console.log(`A idade do cachorro em anos humanos e: ${idadeCachorro(2)}`)
*/
//EXERXIO b
/*
function pessoa(nome, idade, endereco, estudante) {
    if (estudante === true) {
        estudante = "sou"
    } else {
        estudante = "nao sou"
    }
    let pessoa = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e estudante `)
    return pessoa
}
console.log(pessoa(`Pedro`, `33`, `Rua rocha leao`, true))
*/



/*
let seculo = (ano) => {
    let seculos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"]
    let anos = [1, 101, 201, 301, 401, 501, 601, 701, 801, 901, 1001, 1101, 1201, 1301, 1401, 1501, 1601, 1701, 1801, 1901, 2001, 2101]
    for (let num = 0; num < 21; num++) {

        if (ano >= anos[num] && ano < anos[num + 1])
            return `O ano ${ano} pertenece ao seculo ${seculo[num]}`
    }
}

console.log(seculo(1))
*/

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
/*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function arrayParImpar() {
    for (const iterator of array) {
        console.log(iterator)
    }
}
arrayParImpar(Array)*/
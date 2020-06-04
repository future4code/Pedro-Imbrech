/*
EXERXIO 1
O que o código abaixo está fazendo? Qual o resultado impresso no console? 
---------------------------------------------------------------------------------------------------
Resultado: 105 

o que esse loop faz é iterar é iterar 14 vezes porque i = 0 e você deve iterar <15 para
 que ele itere 14 vezes, totalizando 105


let sum = 0
for (let i = 0; i < 15; i++) {
    sum += i
}
console.log(sum)



for (let index = 0; index < 15; index++) {

    console.log(index)
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for (const item of lista) {
    if (item % numero === 0) {
        novaLista.push(item)
        console.log(item)
    }
}
*/

/*
console.log(novaLista)

a. O que o comando `.push` faz?
RESPOSTA:
adicione um ou mais elementos ao final de uma array e retorne o novo comprimento da array.
b. Qual o valor impresso no console?
[10,15,25,30]

10
15
25
30
-----------------------------------------------------------------------------------------------------------------
c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`?
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 3
for (const item of lista) {
    if (item % numero === 0) {
        novaLista.push(item)
        console.log(item)
    }
}

RESPOSTA: 
[12,15,18,21,27,30]

12
15
18
21
27
30

---------------------------------------------------------------------------------------------------------------------
E se tivesse o valor de `4`?
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for (const item of lista) {
    if (item % numero === 0) {
        novaLista.push(item)
        console.log(item)
    }
}

RESPOSTA:
 [12]

*/
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
/*
EXERCÍCIO 3

Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') 
que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final 
de cada programa individualmente.*/

//a.Escreva um programa que devolva o maior e o menor números contidos no array original

//b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.
let array0riginal = [180, 350, 1730, 470, 760, 241, 770, 1720, 940, 1703, 1170, 575]

for (let divicao of array0riginal) {
    divicao /= 10
    console.log(divicao)
}





































/*



c.Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

    d.Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

Exemplos do que o código tem que fazer em cada item:

    // Este array será usado para exemplificar as respostas de todos os itens
    const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// Resposta a.
"O maior número é 130 e o menor é 21"

// Resposta item b.
[8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]

// Resposta item c.
[80, 30, 130, 40, 60, 70, 120, 90, 110]

// Resposta item d.
['O elemento do índex 0 é 80',
    'O elemento do índex 1 é 30',
    'O elemento do índex 2 é 130',
    'O elemento do índex 3 é 40',
    'O elemento do índex 4 é 60',
    'O elemento do índex 5 é 21',
    'O elemento do índex 6 é 70',
    'O elemento do índex 7 é 120',
    'O elemento do índex 8 é 90',
    'O elemento do índex 9 é 103',
    'O elemento do índex 10 é 110',
    'O elemento do índex 11 é 55'
]*/
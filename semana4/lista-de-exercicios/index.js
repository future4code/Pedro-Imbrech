/*Analise os trechos de código em cada exercício e escreva o que ele faz, como
faz e qual será o valor impresso no `console`.**Importante:** A ideia é que vocês
interpretem o código, então **não pode executar o código no JS**, tem que "executar"
na cabeça de vocês.


*/


//Exercícios de interpretação de código

/*(Exercício 1)Temos uma função nomeada chamada (conversorDeMoeda) que recebe um parâmetro
esse parâmetro tiver um nome (valorEmDolar), essa função incluirá e
uma operação que consiste em multiplicar o (valorEmDolar) * (cotacao)
a saída a ser impressa com o comando (console.log (meuDinheiro))

valor impresso no console: Se o valor da cotação for de 5 reais, o resultado será de R$500.
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

/*(Exercício 2)temos uma função nômade chamada (InvesteDinheiro) que recebe dois parâmetros (tipoDeInvestimento y valor)
essa função incluirá uma declaração chamada switch, que é responsável por avaliar uma expressão
comparando o valor dessa expressão com várias instâncias de case, cada uma representando um
tipos de investimento "poupanca" , "renda fixa", "CDB", "Acoes",  a instrução return valorAposInvestimento
encerra a execução da função e especifica um valor a ser retornado para quem chama a função.

valor impresso no console: Se e Poupança 154.5 e 206
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

/*(Exerxio 3)Usando o for ... of  simplificamos a leitura dos elementos de uma array neste caso
Fizemos a declaração dos seguintes array const números, const array1 const array2 que serão lidos
por meio de um for...of que contém uma estrutura de controle seletivo if else que
ajuda a saber quantos números pares existem nos números da array  e quantos
existem números ímpares na array numéros e com o método .lenght podemos saber o número
elementos totais de nossa array. 

valor impresso no console:
Quantidade total de numeros 14
6 sao pares
8 sao impar
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

/*(Exerxio 4)Usando o for ... of  simplificamos a leitura dos elementos de uma array neste caso
fizemos a declaração do seguinte array numeros  para ler array numeros  nós vamos 
usar for...of, criaremos duas instruções if que nos dirão qual é o maior número da array e qual é o menor.

valor impresso no console: -10 menor e 1590 maior
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////



/*

//Exercícios de Lógica de Programação
//Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

(Exercicio 1)
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3

booleano1 && booleano2 && !booleano4
FALSE 

(booleano1 && booleano2) || !booleano3
FALSE 

(booleano2 || booleano3) && (booleano4 || booleano1)
TRUE 

!(booleano2 && booleano3) || !(booleano1 && booleano3)
TRUE 

!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
TRUE

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//(Exercicio 2). Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

/*
let numeros = [1, 55, 56, 55, 55, 55112, 25451, 51, 5, 1, 544, 626, 2, 2, 2, 5, 9, 44, 4]


console.log("primeiro Exemplo")
for (let i = 0; i <= 10; i++) {
    console.log(numeros[i])


}
console.log("Segundo Exemplo")
for (const iterator of numeros) {
    console.log(numeros.length)
}


for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    console.log(index)
}

console.log("Tercer exemplo")
for (const iterator of numeros) {
    console.log(iterator)

}*/

/*
(Exercicio 3) Você tem que escrever um código que, dado um número N, ele imprima (no console)
os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; 
se N for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta 
tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:
*/

/*


}*/


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//(Exercicio 3)


const quantidadeDeNumerosPares
let i = 0
while (i <= quantidadeDeNumerosPares) {
    console.log(i * 2)
}*/


/*
const quantidadeDeNumerosPares = Number(prompt("introduce un numero"))

var i = 0,
    espacio = "";
while (i <= quantidadeDeNumerosPares) {
    if (i % 2 === 0) {
        if (i === quantidadeDeNumerosPares) {
            espacio += i + ". ";
        } else {
            espacio += i + ", ";
        }
    }
    i++;
}
console.log(espacio);*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//Exercicio 4
/*

let a, b, c
let equilatero = 0
let isosceles = 0
let escaleno = 0
a = Number(prompt('Inserir lado 1'));
b = Number(prompt('Inserir lado 2'));
c = Number(prompt('Inserir lado 3'));


for (let i = 1; i <= 1; i++) {

    console.log(' Triangulo ' + ' : ' + a + ' , ' + b + ' , ' + c);
    if (a == b && b == c) {
        console.log(' ele é chamado triângulo equilatero ');
        equilatero = equilatero + 1;
    } else if (a == b || b == c || a == c) {
        console.log(' ele é chamado triângulos isosceles ');
        isosceles = isosceles + 1;
    } else {
        console.log(' ele é chamado triângulos escaleno ');
        escaleno = escaleno + 1;
    }
}*/


/* Algo esta malo en mi funcion que cuando trata de 
englobar el codigo el, nose ejecuta de manera correcta solo 
se ejecuta aplicando un for como esta arriba.*/

/*
let a, b, c

a = Number(prompt('Inserir lado 1'));
b = Number(prompt('Inserir lado 2'));
c = Number(prompt('Inserir lado 3'));

let equilatero = 0
let isosceles = 0
let escaleno = 0

function calculatriangulo(a, b, c) {

    for (let i = 1; i <= 1; i++) {


        if (a == b && b == c) {
            console.log(' ele é chamado triângulo equilatero ');
            equilatero = equilatero + 1;
        } else if (a == b || b == c || a == c) {
            console.log(' ele é chamado triângulos isosceles ');
            isosceles = isosceles + 1;
        } else {
            console.log(' ele é chamado triângulos escaleno ');
            escaleno = escaleno + 1;
        }

        return equilatero;
        return isosceles;
        return escaleno;
    }

}

console.log(' Triangulo ' + ' : ' + a + ' , ' + b + ' , ' + c);*/


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////



let numero1 = Number(prompt("insere um primero numero"))
let numero2 = Number(prompt("insere um segundo numero"))

if (numero1 > numero2) {
    console.log(" o maior e: " + numero1)
}
if (numero1 < numero2) {
    console.log(" e maior  e : " + numero2)
}

console.log("15 nao e divisivel por 30")

console.log("30 nao e divisivel por 15")
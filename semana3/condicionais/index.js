/*EXERXIO 1

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}
*/


/*
Explique o que o código faz. Qual o teste que ele realiza?
Resposta: verifica se um número é ímpar ou par

Para que tipos de números ele imprime no console "Passou no teste"? 
Resposta:Para números pares.*(Passou no teste)

Para que tipos, a mensagem é "Não passou no teste"?
Resposta:Para números ímpares *(Não passou no teste)
*/
/*-------------------------------------------------------------------------------------------------------------------*/

/*
EXERXIO-2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break;
    case "Maçã":
        preco = 2.25
        break;
    case "Uva":
        preco = 0.30
        break;
        break;
    case "Banana": //Adcione Banana.
        preco = 1
        break;
    case "Pêra":
        preco = 5.5
            /*Break retirado*/


//default:
//    preco = 5
// break;
//}


//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)




/*
a. Para que serve o código acima?

Resposta: A instrução switch avalia uma expressão, comparando 
o valor dessa expressão com uma instância de caso e executa
instruções associadas a esse caso, bem como as instruções nos
seguintes casos. no nosso caso, esse código nos ajuda a seleciona
r uma fruta automaticamente.


b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

Resposta: O preço da fruta  maca  é  R$  5

c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã,
3 bananas e 1 uva. Qual seria o preço que você pagaria?
Resposta: 12.55 R$

d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa 
no console se retirássemos o `break` que está logo acima do `deafult` 
(o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?

Resposta: 5

*/


/*---------------------------------------------------------------------------------------------------------------*/

/*EXERXIO 3

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if (numero1 > 0 && numero2 > 0) {
    let mensagem
    if (numero1 > numero2) {
        mensagem = "Número 1 é maior que o 2!"
    } else {
        mensagem = "Número 1 é menor ou igual ao 2!"
    }
}

console.log(mensagem)
*/

/*
    Considere um usuário que digita os números 3 e 4 respectivamente.
    Qual será a mensagem do terminal? Haverá algum erro? Justifique usando
     os conceitos de bloco ou escopo.

     Resposta:VM414:13 Uncaught ReferenceError: mensagem is not defined
        at <anonymous>:13:13
    

        
if (numero1 > 0 && numero2 > 0) {
    let mensagem 
    if (numero1 > numero2) {
       mensagem = "Número 1 é maior que o 2!"

        a sintaxis e:   console.log( "Número 1 é maior que o 2!")////////////////////////////////

    } else {
        a sintaxis e:   console.log("Número 1 é menor ou igual ao 2!")//////////////////////////////////

        mensagem = "Número 1 é menor ou igual ao 2!"
    }
}


     */

/*--------------------------------------------------------------------------------------------------------------------*/

//EXERXIO 4
/* 
a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. 
O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo 
    o que aconteceu)

b. Adapte o programa para que o usuário digite 3 números.
 Ainda os imprima na ordem **decrescente**. O que acontece como seu
  programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

c. Agora, impeça que o usuário digite 3 números iguais. Caso todos 
sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.*/

firstNumber = Number(prompt('Digite o primeiro número'))
secondNumber = Number(prompt('Digite o segundo número'))

if (firstNumber > secondNumber && secondNumber < firstNumber) {
    console.log(firstNumber + ' ' + secondNumber)

} else {
    console.log(secondNumber + ' ' + firstNumber)
}

/*Crie um código que imprima os números decrescentes e, se forem iguais, também os imprima.
Eu acho que o objetivo deste exercício é que o código possa ordenar os números de maneira decrescente.*/



/*----------------------------------------------------------------------------------------------------------*/


/*c. Agora, impeça que o usuário digite 3 números iguais. Caso todos 
sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.*/

firstNumber = Number(prompt('Digite o primeiro número'))
secondNumber = Number(prompt('Digite o segundo número'))
third = Number(prompt('Digite o segundo número'))

if ((firstNumber !== secondNumber) && (firstNumber !== third) && (secondNumber !== third)) {
    if (firstNumber > secondNumber) {
        if (secondNumber > third) {
            console.log(firstNumber, secondNumber, third)
        } else if (firstNumber > third) {
            console.log(firstNumber, third, secondNumber)
        } else {
            console.log(third, firstNumber, secondNumber)
        }
    } else {
        if (secondNumber > third) {
            if (firstNumber > third) {
                console.log(secondNumber, firstNumber, third)
            } else {
                console.log(secondNumber, third, firstNumber)
            }
        } else {
            console.log(third, secondNumber, firstNumber)
        }
    }
    /*c. Agora, impeça que o usuário digite 3 números iguais. Caso todos 
sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.*/
} else {
    console.log('Os numeros sao iguais inserir um número diferente')
}

/*---------------------------------------------------------------------------------------------------------*/
/*
a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício.
 (Coloque a imagem do esquema no drive e gerem um link  de compartilhamento público. Coloque 
    este link num comentário durante a resolução deste exercício)*/

/*https://app.diagrams.net/#G1Kb2pOPjpCnNX3JMdlBGb8vez8FohcNCQ*/

/*
b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. 
As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado*/

/*
let animais=('ingrese enimal')
if (animais==vertebrado) {
    console.log('SER HUMANO')
}
else{
    console.log('pez')
}*/

/*Preciso de um pouco mais de tempo 
para resolver o exercício, demora um 
pouco para entender, não terminei por falta de tempo.*/
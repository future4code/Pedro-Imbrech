// Exercicio 1
/*
a) Crie uma variável minhaString do tipo string e atribua um valor 
a ela. Tente atribuir um número a esta variável. O que acontece?*/

// let minhaString: string | undefined= 45

/*b) Crie uma variável **meuNumero** do tipo `number` e atribua um 
valor numérico. Como podemos fazer para que essa variável também
 aceite strings?*/

 let meuNumero: number| undefined = 45
 console.log(meuNumero)


enum COR_FAVORITO{
AZUL="AZUL",
ROJO="ROJO",
MORADO="MORADO",
VERDE="VERDE"

}



type pessoa ={

    nome:string,
    idade:number,
    corFavorita:COR_FAVORITO

 }

let pessoa1: pessoa ={

    nome:"pedro",
    idade:29,
    corFavorita:COR_FAVORITO.AZUL

 }

 let pessoa2: pessoa ={

    nome:"pedro",
    idade:19,
    corFavorita:COR_FAVORITO.ROJO

 }

 let pessoa3: pessoa ={

    nome:"pedro",
    idade:39,
    corFavorita:COR_FAVORITO.MORADO

 }

 let pessoa4: pessoa ={

    nome:"pedro",
    idade:49,
    corFavorita:COR_FAVORITO.VERDE

 }
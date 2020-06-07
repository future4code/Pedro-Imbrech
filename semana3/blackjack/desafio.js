/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */




if (confirm("Bem vindo ao jogo de Blackjack!  " + "\n" + " Quer iniciar uma nova rodada?")) {


    console.log("Bem vindo ao jogo de Blackjack!")


    const carta = comprarCarta();






    confirm("Suas cartas são" + ' ' + carta.texto + ' ' + carta.texto + ' ' +
        (" A carta revelada do computador é " + carta.texto) +
        "\n" + "Deseja comprar mais uma carta?")





    alert(("Suas cartas são " + carta.texto + ' ' + carta.texto + ' ' + carta.texto + " Sua pontuação é " + (carta.valor + carta.valor + carta.valor) + "\n" +

        "As cartas do computador são " + carta.texto + ' ' + carta.texto + ' ' + carta.texto + " A pontuação do computador é. " + (carta.valor + carta.valor + carta.valor) + "\n" + "O computador Empate!"))





} else {
    console.log("O jogo acabou")
}
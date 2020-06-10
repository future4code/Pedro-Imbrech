function adicionaItem() {
    const meuInput = document.getElementById("meu-input")
    let item = meuInput.value

    const listaDeItens = document.getElementById("lista-de-itens3")
    listaDeItens.innerHTML += `<li> ${item} </li>`
    meuInput.value = ""
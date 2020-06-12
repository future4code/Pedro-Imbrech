const headerdos = document.getElementById("header-2")
headerdos.innerHTML += "<h1>BlogFilmesRose</h1>"



//texto1texto = document.getElementsByClassName("texto1")
const texto1texto = document.getElementById("texto1")
texto1texto.innerHTML += "<h1 class='texto1-1'>Bem-vindo ao BlogFilmesRose</h1>"
    //console.log(texto1texto.innerHTML)
    //<>


const textodos = document.getElementById("texto2")
textodos.innerHTML += "<h4>Você encontrará as melhores sugestões de filmes aqui e pode comentar sobre as que mais gosta, deixando seus comentários e redes sociais</h4>"


let filme = {

    titulo: 'Praia Preta',
    autor: 'Pedro Villalba',
    contenido: 'Urca é um tradicional bairro da Zona Sul do município'

}

let nometitulo = filme.titulo
let nomeautor = filme.autor
let ccontenid = filme.contenido


console.log(nometitulo)
console.log(nomeautor)
console.log(ccontenid)



































/*function adicionaItem() {
    const meuInput = document.getElementById("meu-input")
    let item = meuInput.value

    const listaDeItens = document.getElementById("lista-de-itens3")
    listaDeItens.innerHTML += `<li> ${item} </li>`
    meuInput.value = ""*/
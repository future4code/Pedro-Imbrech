function cadastroLimpo() {
    if (document.getElementById('primercampo').value != "") {
        document.getElementById('primercampo').value = ""
        document.getElementById('segundocampo').value = ""
        document.getElementById('tercercampo').value = ""
    }
}




function limparDespensas() {
    if (document.getElementById('limparprimerfiltro').value != "") {
        document.getElementById('limparprimerfiltro').value = ""
        document.getElementById('limpasegundofiltro').value = ""
        document.getElementById('limpatercerfiltro').value = ""
    }
}

function validarvalor() {
    if (document.getElementById(primercampo).value != "") {
        alert("ingresa texto")
    }
}


/*

let despensa = {
    despensadefesta: '',
    valorminimo: '',
    valormaximo: ''

}*/




/*
let controladordespensas = {
    valor: '',
    tipo: '',
    descricao: '',


}*/
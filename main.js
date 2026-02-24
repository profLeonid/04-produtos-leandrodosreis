'use strict'

function adicionarProduto(){
    const produto = document.getElementById('produto')
    console.log(produto.value)
    const lista = document.getElementById('lista')
    //lista.textContent = produto.value

    const span = document.createElement('span')
    span.textContent = produto.value
    
    

    let nomeProduto = validarProduto(produto.value)

    if(nomeProduto){
        lista.appendChild(span)
        span.className = 'bg-yellow-500 px-8 py-2'

    }else{
        return false
    }

    limparCaixaInpt(produto.value)

}

function validarProduto(produto){

    let nomeProduto = produto

    if(nomeProduto == ''){
        return false
    }else{
        return nomeProduto
    }
}

function limparCaixaInpt(){
    document.getElementById('produto').value = ''
}

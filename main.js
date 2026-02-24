'use strict'

function adicionarProduto(){
    const produto = document.getElementById('produto')
    console.log(produto.value)
    const lista = document.getElementById('lista')
    //lista.textContent = produto.value

    const span = document.createElement('span')
    span.textContent = produto.value
    span.className = 'bg-yellow-500 px-8 py-2'

    lista.appendChild(span)
}
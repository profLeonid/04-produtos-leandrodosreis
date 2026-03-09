'use strict'

// function adicionarProduto(){

//     const produto = document.getElementById('produto')
//     const codigo = document.getElementById('codigo')
//     const quantidade = document.getElementById('quantidade')
//     const lista = document.getElementById('lista')
//     const span = document.createElement('span')

//     if(produto.value == '' || codigo.value == '' || quantidade.value == ''|| quantidade.value == isNaN){
//         alert("Preencha todos os campos")
//         return false
//     }

//     span.textContent = 
//     `Produto: ${produto.value} | Código: ${codigo.value} | Quantidade: ${quantidade.value}`

//     lista.appendChild(span)

//     limparCaixaInput()
// }

// function limparCaixaInpt(){
//     document.getElementById('produto').value = ''
//     document.getElementById('codigo').value = ''
//     document.getElementById('quantidade').value = ''


// }

// TENTANDO COM FUNÇÃO INDIVIDUAL PARA CADA ITEM

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


function adicionarCodigo(){
    const codigo = document.getElementById('codigo')
    console.log(codigo.value)
    const lista = document.getElementById('lista')
    //lista.textContent = produto.value

    const span2 = document.createElement('span')
    span2.textContent = codigo.value
    
    

    let sistCodigo = validarProduto(codigo.value)

    if(sistCodigo){
        lista.appendChild(span2)
        span.className = 'bg-yellow-500 px-8 py-2'

    }else{
        return false
    }

    limparCaixaInpt(codigo.value)

}


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
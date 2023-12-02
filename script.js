const botao = document.querySelector('#insert-button')
const title = document.querySelector('#titulo-task')
const desc = document.querySelector('#descricao-task')
const main = document.querySelector('main')

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      verifica()
    }
  });






botao.addEventListener('click' , verifica)

function verifica(){
    if(title.value !== "" && desc.value !== ""){
        criar()
        salvarLocalStorage(title.value , desc.value)
    }else{
        alert('preencha os campos')
    }
}
function criar(){
    let card = document.createElement("div")
    let div_cima = document.createElement("div")
    let titulo = document.createElement('h3')
    let deleta = document.createElement('button')
    let div_baixo = document.createElement('div')
    let descricao = document.createElement('p')

    main.appendChild(card)
    card.appendChild(div_cima)
    card.appendChild(div_baixo)
    div_cima.appendChild(titulo)
    div_cima.appendChild(deleta)
    div_baixo.appendChild(descricao)


    div_baixo.innerHTML = desc.value
    deleta.innerHTML = 'X'
    titulo.innerHTML = title.value
    
    div_cima.classList.add('card-top')
    deleta.classList.add('deleta')
    card.classList.add('card-post-it')
}



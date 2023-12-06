const botao = document.querySelector('#insert-button')
const title = document.querySelector('#titulo-task')
const desc = document.querySelector('#descricao-task')
const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded' , LoadTask)

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      verifica()
    }
  });

botao.addEventListener('click' , verifica)

function verifica(){
    if(title.value !== "" && desc.value !== ""){
        addTask()
        title.value = ""
        desc.value = ""
        
    }else{
        alert('preencha os campos')
    }
}
function addTask(){
    
    let card = document.createElement("div")
    let div_cima = document.createElement("div")
    let titulo = document.createElement('h3')
    let deleta = document.createElement('button')
    let div_baixo = document.createElement('p')
    
    

    main.appendChild(card)
    card.appendChild(div_cima)
    card.appendChild(div_baixo)
    div_cima.appendChild(titulo)
    div_cima.appendChild(deleta)
    
    


    div_baixo.innerHTML = desc.value
    deleta.innerHTML = 'Excluir'
    titulo.innerHTML = title.value
    
    div_cima.classList.add('card-top')
    div_baixo.classList.add('card-bottom')
    deleta.classList.add('deleta')
    deleta.addEventListener('click', function(){

        main.removeChild(card)
        saveTasks()
    })   
    card.classList.add('card-post-it')

    saveTasks(title.value , desc.value)
}



function saveTasks(){
    let TitulosLocal = []
    let DescLocal = []
    for (var i = 0; i < main.children.length; i++) {
        
        let titleText = main.children[i].querySelector("h3").innerText;
        TitulosLocal.push(titleText)

      }
      for (var i = 0; i < main.children.length; i++) {
        
        
        let descText = main.children[i].querySelector("p").innerText;
        DescLocal.push(descText)

      }
    
      localStorage.setItem("Titulos" , JSON.stringify(TitulosLocal))
      localStorage.setItem("Descricoes" , JSON.stringify(DescLocal))
      
    
    
}
function LoadTask(){
    let CarregaTitulos = localStorage.getItem("Titulos")
    let CarregaDesc = localStorage.getItem("Descricoes")
    
    if(CarregaTitulos && CarregaDesc){
        CarregaDesc = JSON.parse(CarregaDesc)
        CarregaTitulos = JSON.parse(CarregaTitulos)
        for(let i = 0 ; i< CarregaTitulos.length; i++ ){



            let card = document.createElement("div")
    let div_cima = document.createElement("div")
    let titulo = document.createElement('h3')
    let deleta = document.createElement('button')
    let div_baixo = document.createElement('p')
    
    

    main.appendChild(card)
    card.appendChild(div_cima)
    card.appendChild(div_baixo)
    div_cima.appendChild(titulo)
    div_cima.appendChild(deleta)
    
    


    div_baixo.innerHTML = CarregaDesc[i]
    deleta.innerHTML = 'Excluir'
    titulo.innerHTML = CarregaTitulos[i]
    
    div_cima.classList.add('card-top')
    div_baixo.classList.add('card-bottom')
    deleta.classList.add('deleta')
    deleta.addEventListener('click', function(){
        main.removeChild(card)
    })   
    card.classList.add('card-post-it')
        }
    }
}


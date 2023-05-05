
function mudarLocal(id){
    
    var nao = document.getElementById(id).textContent
    
    if(nao!="Não"){
        return
    }
    
    do{
        var numero = Math.floor(Math.random() * 11)+1
    }while(numero==6)
    
    document.getElementById(id).innerHTML='Sim'
    document.getElementById(id).classList.add("sumir")

    document.getElementById(numero).classList.remove("sumir")
    document.getElementById(numero).innerHTML='Não'
    
}

function confirmar(){
    document.querySelector('h1').innerHTML='Sabia que tu ia aceitar'
    document.getElementById("main").innerHTML="<br><img src='https://gifs.eco.br/wp-content/uploads/2021/09/gifs-de-gato-dancando-0.gif'>"
}
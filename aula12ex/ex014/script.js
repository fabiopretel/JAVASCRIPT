function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    //var hora = 22
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if(hora >= 0 && hora < 6){
        //BOA MADRUGADA!
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#57463E'
    }
    else if(hora >= 6 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#E9C058'
    }
    else if(hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#C05430'
    }
    else{
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#101519'
    }
}



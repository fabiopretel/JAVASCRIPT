function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Os dados podem estar incorretos! Tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'

        if(fsex[0].checked){
            var genero = 'Homem'
            if(idade >= 0 && idade <= 12){
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            }
            else if(idade <= 21){
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            }
            else if(idade <= 50){
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            }
            else{
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        }
        else{
            var genero = 'Mulher'
            if(idade >= 0 && idade <= 12){
                // Criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            }
            else if(idade <= 21){
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }
            else if(idade <= 50){
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            }
            else{
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
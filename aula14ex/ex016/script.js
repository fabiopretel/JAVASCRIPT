function contar(){
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar! Faltam dados.'
    }
    else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Passo inválido! Considerando valor "1" para o PASSO.')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let a = i; a <= f; a += p){
                res.innerHTML += `${a} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
        else{
            //Contagem decrescente
            for(let a = i; a >= f; a -= p){
                res.innerHTML += `${a} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}
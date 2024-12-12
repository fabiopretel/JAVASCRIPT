let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

// Descobre se o valor encontrado em 'num' está entre 1 e 100 e retorna verdadeiro ou falso
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

// Descobre se o valor encontrado em 'num' já está na lista ou não e retorna verdadeiro ou falso
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

// função para adicionar numero na lista
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //adiciona valor na lista

        let item = document.createElement('option') //cria um elemento 'option' na lista 'select'
        item.text = `Valor ${num.value} adiconado.` //texto que irá aparecer na lista
        lista.appendChild(item) //adiciona a variavel item no corpo HTML
        res.innerHTML = '' //define 'res' como vazio
    }
    else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //deixa a caixa de texto em branco depois que adicionar o valor
    num.focus() //o texto sempre vai focar na caixa de envio de algum numero
}

// função para finalizar e enviar valores para o 'res'
function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }
    else{

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total

        res.innerHTML = '' //define 'res' como vazio
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.<p><br>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.<p><br>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<p><br>`
        res.innerHTML += `<p>A média dos valoress digitados é ${media}.<p><br>`
    }
}
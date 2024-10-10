function tabuada(){
    let num = document.getElementById('txtn')
    let tab =  document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Por favor digite um número.')
    }
    else{
        let n = Number(num.value)
        tab.innerHTML = ``
        for(let a = 1; a <= 10; a++){
            let item = document.createElement('option')
            let resp = n * a
            item.text = `${n} x ${a} = ${resp}`
            item.value = `tab${a}`
            tab.appendChild(item)
        }
    }
}
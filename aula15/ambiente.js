let num = [5, 8, 2, 9, 3]

num.push(1) //coloca o item entre parentes no final da variavel composta
num.sort() //organiza os elementos em ordem 
console.log(num)
console.log(`O vetor tem ${num.length} posições`) //mostra a quantia de elementos da varaivel composta
console.log(`O primeiro valor do vetor é ${num[0]}`)
let local = num.indexOf(8)
if (local == -1){
    console.log('O valor não foi encontrado!')
}
else{
    console.log(`O valor 8 está na posição ${local}`)
}


/*
let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
for(let pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
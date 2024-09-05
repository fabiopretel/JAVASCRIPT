//Inicializa o contador com o valor armazenado no localStorage ou 0 se não houver valor armazenado
let contador = parseInt(localStorage.getItem('contador')) || 0;

// Adiciona um ouvinte de evento de clique ao botão
const contadorElemento = document.getElementById('contador')
const botao = document.getElementById('botao')
const reduz = document.getElementById('reduz')

// Atualiza o elemento do contador com o valor inicial
contadorElemento.textContent = contador;

// Adiciona um ouvinte de evento de clique ao botão
botao.addEventListener('click', function() {
    contador++; // Incrementa o contador
    contadorElemento.textContent = contador; // Atualiza o elemento do contador com o novo valor
    localStorage.setItem('contador', contador); // Salva o novo valor no localStorage
});
reduz.addEventListener('click', function() {
    contador--; // Decrementa o contador
    contadorElemento.textContent = contador; // Atualiza o elemento do contador com o novo valor
    localStorage.setItem('contador', contador); // Salva o novo valor no localStorage
});

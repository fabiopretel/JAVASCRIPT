//Inicializa o contador com o valor armazenado no localStorage ou 0 se não houver valor armazenado
let contador = parseInt(localStorage.getItem('contador')) || 0;

// Adiciona um ouvinte de evento de clique ao botão
const contadorElemento = document.getElementById('contador')
const botao = document.getElementById('botao')
const reduz = document.getElementById('reduz')

// Atualiza o elemento do contador com o valor inicial
contadorElemento.textContent = contador;

// Função que dispara a animação de confetes
function triggerConfetti(){
    const confettiContainer = document.getElementById('confetti-container');

    for(let i = 0; i < 300; i++){
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = randomColor();
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confetti);

        // Remove confete após animação
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Gera uma cor aleatória para os confetes
function randomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Adiciona um ouvinte de evento de clique ao botão de incremento
botao.addEventListener('click', function() {
    contador++; // Incrementa o contador
    contadorElemento.textContent = contador; // Atualiza o elemento do contador com o novo valor
    localStorage.setItem('contador', contador); // Salva o novo valor no localStorage

    if (contador === 100 || 
        contador === 500 || 
        contador === 1000 || 
        contador === 2000 || 
        contador === 5000 || 
        contador === 10000) { // Dispara os confetes quando o contador atingir 100
        triggerConfetti();
    }
});

// Adiciona um ouvinte de evento de clique ao botão de decremento
reduz.addEventListener('click', function() {
    contador--; // Decrementa o contador
    contadorElemento.textContent = contador; // Atualiza o elemento do contador com o novo valor
    localStorage.setItem('contador', contador); // Salva o novo valor no localStorage
});

function timeSince(startDate) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate.getTime();

      // Cálculos para dias, horas, minutos e segundos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Atualizar o conteúdo do elemento com id="time"
      document.getElementById('time').innerHTML = `${days} dias ${hours}:${minutes}:${seconds}`;
    }, 1000); // Atualiza a cada segundo (1000 ms)
  }

  // Defina a data de início (exemplo: 1 de janeiro de 2024)
  const startDate = new Date('Aug 27, 2024 00:00:00');
  timeSince(startDate);

  //easter egg - cara do lisboa no fundo
  function egg1(){
    var corpo = window.document.body
    corpo.style.background = 'url(imagens/lisboa_egg1.png) no-repeat center center fixed'
    corpo.style.backgroundSize = '500px'
  }
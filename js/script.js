// Obtém os elementos
const bird = document.getElementById('btv');
const notesDiv = document.getElementById('notes');
const birdSound = document.getElementById('audio');

// Função para separar cada letra em um span
function animateText(selector) {
    const element = document.querySelector(selector);
    const text = element.innerText;
    element.innerHTML = ''; // Limpa o conteúdo atual

    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.innerText = letter === ' ' ? '\u00A0' : letter; // Mantém o espaço
        span.style.setProperty('--i', index); // Define a variável para o atraso
        element.appendChild(span);
    });
}

// Anima as letras dos títulos
animateText('#animated-h1');
animateText('#animated-h3');

// Impede a atualização ao clicar nos títulos
document.getElementById('animated-h1').addEventListener('click', function(event) {
    event.preventDefault(); // Previne a atualização da página
});

document.getElementById('animated-h3').addEventListener('click', function(event) {
    event.preventDefault(); // Previne a atualização da página
});

// Função para gerar notas musicais
function createNote() {
    const note = document.createElement('div');
    note.classList.add('note');
    note.style.left = Math.random() * 100 + 'px'; // Define uma posição aleatória horizontal
    note.textContent = '♪'; // Nota musical
    notesDiv.appendChild(note);
    setTimeout(() => note.remove(), 2000); // Remove a nota após 2 segundos
}

// Função para tocar o som e gerar notas
function playSoundAndGenerateNotes() {
    // Reinicia o áudio para tocar a partir do início
    birdSound.currentTime = 0;
    birdSound.play(); // Inicia o áudio

    // Exibir as notas musicais
    notesDiv.style.display = 'flex'; // Exibe o contêiner de notas como flex

    // Gerar múltiplas notas
    createNote();
    createNote();
    createNote();

    // Define a duração do áudio (em segundos)
    const audioDuration = 2; // Duração do áudio em segundos

    // Define um timeout para pausar o áudio após a duração especificada
    setTimeout(() => {
        birdSound.pause(); // Pausa o áudio após a duração
    }, audioDuration * 580); // Multiplica por 1000 para converter para milissegundos
}

// Quando clicar no pássaro
bird.addEventListener('click', function(event) {
    event.preventDefault(); // Previne a atualização da página

    // Adiciona a classe para o efeito de crescimento
    bird.classList.add('bird-grow');

    // Toca o som e gera notas
    playSoundAndGenerateNotes();

    // Restaura a classe após um breve período
    setTimeout(() => {
        bird.classList.remove('bird-grow'); // Remove a classe para o efeito de volta ao normal
    }, 200); // Duração do efeito

    // Anima as letras dos títulos
    animateText('#animated-h1');
    animateText('#animated-h3');
});

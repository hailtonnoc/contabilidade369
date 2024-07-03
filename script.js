document.addEventListener('DOMContentLoaded', function () {
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;
const delay = 8100;

function moveCarousel() {
    // Calcula a posição de deslocamento
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}vw)`;

    // Atualiza o índice do item atual
    currentIndex = (currentIndex + 1) % totalItems;

    // Define o próximo movimento do carrossel
    setTimeout(moveCarousel, delay);
}

// Inicia o carrossel
setTimeout(moveCarousel, delay);
});

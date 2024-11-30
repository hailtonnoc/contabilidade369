document.addEventListener('DOMContentLoaded', function () {
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;
const delay = 8100; // 9 segundos
let timeoutId;

function moveCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}vw)`;
    timeoutId = setTimeout(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    moveCarousel();
    }, delay);
}

function nextItem() {
    clearTimeout(timeoutId);
    currentIndex = (currentIndex + 1) % totalItems;
    moveCarousel();
}

function prevItem() {
    clearTimeout(timeoutId);
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    moveCarousel();
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!touchStartX) {
    return;
    }
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (!touchStartX || !touchEndX) {
    return;
    }
    const diffX = touchStartX - touchEndX;
    if (diffX > 50) {
    nextItem(); // Swipe left
    } else if (diffX < -50) {
    prevItem(); // Swipe right
    }
    touchStartX = null;
    touchEndX = null;
}

// Event listeners para cliques
document.addEventListener('click', (event) => {
    const rect = document.body.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    if (clickX < rect.width / 2) {
    prevItem();
    } else {
    nextItem();
    }
});

// Event listeners para gestos de toque
let touchStartX = null;
let touchEndX = null;

carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchmove', handleTouchMove, false);
carousel.addEventListener('touchend', handleTouchEnd, false);

// Inicia o carrossel
moveCarousel();
});

const button = document.querySelector('.crc');
button.addEventListener('click', () => {
navigator.clipboard.writeText('1SP336879')
    .then(() => {
        console.log('Texto copiado com sucesso!');
    })
    .catch(err => {
        console.error('Falha ao copiar o texto: ', err);
    });
});
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

// Flip Card functionality
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cardDuro');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
});

// Efeito de flip automático ao rolar até a seção #servico
(function() {
    function isElementInViewportMiddle(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        // Considera "meio" se o centro do elemento está no centro da tela
        const elemCenter = rect.top + rect.height / 2;
        return elemCenter > windowHeight / 2 - 50 && elemCenter < windowHeight / 2 + 50;
    }

    let flipTriggered = false;
    function triggerFlipCards() {
        if (flipTriggered) return;
        const servico = document.getElementById('servico');
        if (!servico) return;
        if (isElementInViewportMiddle(servico)) {
            flipTriggered = true;
            const cards = document.querySelectorAll('.cardDuro');
            cards.forEach((card, idx) => {
                setTimeout(() => {
                    card.classList.add('flipped');
                    setTimeout(() => card.classList.remove('flipped'), 1200); // volta ao normal depois de 1.2s
                }, idx * 300); // efeito cascata
            });
        }
    }
    window.addEventListener('scroll', triggerFlipCards);
})();

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
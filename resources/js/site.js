// Navigation
const navToggle = document.getElementById('nav-toggle');
const header = document.getElementById('header');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        header.classList.toggle('open');
    });
}

// Psycho Card
const psychoCards = document.querySelectorAll('.psycho-card');
psychoCards.forEach(card => {
    card.addEventListener('mouseover', e => {
        card.classList.add('psycho');
    });
    card.addEventListener('mouseleave', e => {
        card.classList.remove('psycho');
    });
});
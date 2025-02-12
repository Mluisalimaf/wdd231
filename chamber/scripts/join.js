// Set the timestamp when the form is loaded
document.getElementById('timestamp').value = new Date().toISOString();

// Add animations to membership cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Modal functionality
const modals = document.querySelectorAll('.modal');
const links = document.querySelectorAll('.card a');
const spans = document.querySelectorAll('.close');

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        modals[index].style.display = 'block';
    });
});

spans.forEach((span, index) => {
    span.addEventListener('click', () => {
        modals[index].style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
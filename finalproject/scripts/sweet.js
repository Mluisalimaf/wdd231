async function loadMenu() {
    const response = await fetch('data/sweet.json');
    const data = await response.json();
    const navList = document.getElementById('nav-list');

    // Limpa a lista antes de adicionar os itens
    navList.innerHTML = '';

    // Adiciona cada item do menu à lista
    data.menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.link; 
        li.appendChild(a);
        navList.appendChild(li);
    });

    // --- Wayfinding  ---
    const links = navList.querySelectorAll('a');
    let current = window.location.pathname;
    current = current.substring(current.lastIndexOf('/') + 1) || 'index.html';

    links.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        const linkFile = linkPath.substring(linkPath.lastIndexOf('/') + 1) || 'index.html';
        if (linkFile === current) {
            link.classList.add('active');
        }
    });
}

// Função para alternar a visibilidade do menu
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Carrega menu, adiciona eventos quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();

    // Coloca o evento de clique ao botão do menu hambúrguer
    const hamburgerBtn = document.getElementById('hamburger-btn');
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Valida o formulário de agendamento
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const date = document.getElementById('date').value;

            if (!name || !email || !date) {
                alert('Please fill in all fields.');
                event.preventDefault();
            }
        });
    }
});
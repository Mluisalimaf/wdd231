async function loadMenu() {
    const response = await fetch('salon.json');
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
}

// Função para alternar a visibilidade do menu
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Carrega o menu quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();

    // Adiciona o evento de clique ao botão do menu hambúrguer
    const hamburgerBtn = document.getElementById('hamburger-btn');
    hamburgerBtn.addEventListener('click', toggleMenu);
});


function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Adiciona o evento de clique ao botão do menu hambúrguer
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    hamburgerBtn.addEventListener('click', toggleMenu);
});


document.getElementById('booking-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;

    if (!name || !email || !date) {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    }
});
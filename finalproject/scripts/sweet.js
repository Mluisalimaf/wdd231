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
        a.href = item.link; // Usa o link do JSON
        li.appendChild(a);
        navList.appendChild(li);
    });
}

// Função para alternar a visibilidade do menu
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Carrega o menu e adiciona eventos quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();

    // Adiciona o evento de clique ao botão do menu hambúrguer
    const hamburgerBtn = document.getElementById('hamburger-btn');
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Validação do formulário de agendamento (se existir na página)
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



const lastModified = document.lastModified; 
document.getElementById('lastModified').textContent = "Last Modified: " + lastModified;


const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

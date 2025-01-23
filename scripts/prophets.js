const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets); // note que referenciamos o array de profetas
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Crie elementos para adicionar ao elemento div.cards
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // Cria o elemento h2
        let portrait = document.createElement('img');

        // Construa o conteúdo do h2 para mostrar o nome completo do profeta
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        // Construa o retrato configurando todos os atributos relevantes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Adicione os elementos criados à seção (card)
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Adicione a seção card à div cards
        cards.appendChild(card);
    });
};
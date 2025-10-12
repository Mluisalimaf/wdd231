fetch('data/discover.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');
        data.forEach(place => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${place.name}</h2>
                <figure>
                    <img src="${place.image}" alt="${place.name}">
                </figure>
                <address>${place.address}</address>
                <p>${place.description}</p>
                <button>Learn More</button>
            `;
            container.appendChild(card);
        });
    });

// localStorage for last visit
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceLastVisit < 1) {
        visitMessage.textContent = "Welcome!";
    }
}

localStorage.setItem('lastVisit', currentDate);

if (lastVisit) {
  const lastVisitDate = new Date(parseInt(lastVisit));
  const formattedDate = lastVisitDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const dateElement = document.createElement("p");
  dateElement.textContent = `Last visit date: ${formattedDate}`;
  visitMessage.appendChild(dateElement);
}
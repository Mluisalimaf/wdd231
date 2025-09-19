async function displaySpotlights() {
    try {
        // 1️⃣ Carrega os membros do JSON
        const response = await fetch('data/membergs.json');
        const data = await response.json();
        const members = data.members; // supondo que seu JSON tenha { "members": [...] }

        // 2️⃣ Filtra apenas Gold e Silver
        const eligibleMembers = members.filter(member => 
            member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
        );

        // 3️⃣ Embaralha e seleciona 2 ou 3
        const spotlights = eligibleMembers.sort(() => Math.random() - 0.5).slice(0, 3);

        // 4️⃣ Seleciona o container
        const container = document.getElementById('spotlight-container');

        // 5️⃣ Cria os cards
        spotlights.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('spotlight-card');

            card.innerHTML = `
                <img src="${member.logo}" alt="${member.companyName} logo">
                <h3>${member.companyName}</h3>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership:</strong> ${member.membershipLevel}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Invoca a função
displaySpotlights();
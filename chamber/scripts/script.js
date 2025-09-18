//fetch and display the member data
async function fetchMembers() {
    try{
        const response = await fetch('data/members.json');
        const data = await response.json();
        return data.members;
    } catch (error){
        console.error('Error fetching members:', error);
    }
}

async function displayMembers() {
    try {
        const members = await fetchMembers();
        const container = document.querySelector('.business-cards');
        container.innerHTML = '';

        if (!members || members.length === 0){
            container.innerHTML = '<p>No members found.</p>';
            return;
        } 
            
            members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('business-card');
            card.innerHTML = `
                <h3>${member.name}</h3>
                <p>Address: ${member.address}</p>
                <p>Phone: ${member.phoneNumber}</p>
                <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>Member Since: ${member.memberSince}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error displaying members:', error);
        const container = document.querySelector('.business-cards');
        container.innerHTML = '<p>Failed to load members. Please try again later.</p>';
    }
}

displayMembers();

const lastModified = document.lastModified; 
document.getElementById('lastModified').textContent = "Last Modified: " + lastModified;

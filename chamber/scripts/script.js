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

//toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Switch to List View';
    toggleButton.setAttribute('aria-label', 'Toggle between grid and list views');
    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        const container = document.querySelector('.business-cards');
        container.classList.toggle('list-view');
        toggleButton.textContent = container.classList.contains('list-view') 
            ? 'Switch to Grid View' 
            : 'Switch to List View';
    });
});


async function fetchWeather(){
    const apiKey = '4ad06436fb572f4da2c9699ff40ed934';
    const city = 'Rio de Janeiro';
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric';

    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        return{
            weatherDescription: data.weather[0].description,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}


async function displayCurrentWeather() {
    const weatherData = await fetchWeather();
    if (weatherData) {
        document.getElementById('weather-description').textContent = `Description: ${weatherData.weatherDescription}`;
        document.getElementById('temperature').textContent = `Temperature: ${weatherData.temperature}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${weatherData.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${weatherData.windSpeed} m/s`;
    } else {
        document.getElementById('weather-description').textContent = 'Weather data unavailable.';
    }
}

displayCurrentWeather();


function getDayName(date, locale) {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}


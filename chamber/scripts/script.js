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
    const members = await fetchMembers();
    const container = document.querySelector('.business-cards');
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>Address: ${member.adress}</p>
            <p>Phone: ${member.phoneNumber}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>Member Since: ${member.memberSince}</p>
        `;
        container.appendChild(card);
    });
}

displayMembers();

//toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Switch to List View';
    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        const container = document.querySelector('.business-cards');
        container.classList.toggle('list-view');
        toggleButton.textContent = container.classList.contains('list-view') 
            ? 'Switch to Grid View' 
            : 'Switch to List View';
    });
});





function getDayName(date, locale) {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

// Function to get the next 3 days of the week
function getNext3Days() {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 3; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        days.push({
            day: i === 0 ? 'Today' : getDayName(nextDay, 'en-US'),
            description: getWeatherDescription(nextDay),
            temperature: getRandomTemperature() // Directly in Fahrenheit
        });
    }

    return days;
}

// Function to get a simulated weather description
function getWeatherDescription(date) {
    const descriptions = ['Sunny', 'Partly cloudy', 'Rainy', 'Thunderstorms', 'Snowy'];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
}

// Function to get a simulated temperature in Fahrenheit
function getRandomTemperature() {
    return Math.floor(Math.random() * 20) + 60; // between 60 and 80 degrees Fahrenheit
}

function displayCurrentWeather(data) {
    document.getElementById('weather-description').textContent = `Description: ${data.weatherDescription}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°F`;
    document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.windSpeed} m/s`;
}

function display3DayForecast(data) {
    const forecastContainer = document.getElementById('forecast-days');
    forecastContainer.innerHTML = ''; // Clear previous content

    data.forEach(dayForecast => {
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecast-day');
        forecastDiv.innerHTML = `
            <h3>${dayForecast.day}: ${dayForecast.temperature}°F</h3>
        `;
        forecastContainer.appendChild(forecastDiv);
    });
}

// Simulated current weather data directly in Fahrenheit
const currentWeatherData = {
    weatherDescription: 'Clear sky',
    temperature: 75, // Fahrenheit
};

// Get the next 3 days of the week and display the forecast
const next3DaysForecast = getNext3Days();

// Display the current weather and the 3-day forecast
displayCurrentWeather(currentWeatherData);
display3DayForecast(next3DaysForecast);


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last modified: " + lastModified;


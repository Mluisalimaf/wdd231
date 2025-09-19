const weatherDescription = document.querySelector('#weather-description');
const temperature = document.querySelector('#temperature');
const forecastDays = document.querySelector('#forecast-days');
 
const lat = -22.910677729452182;  
const lon = -43.276074974928235; 

const apiKey = 'MyAPI';


const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {
  try {
    const response = await fetch(currentWeatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentWeather(data) {
  temperature.textContent = `${data.main.temp.toFixed(1)}°C`;
  weatherDescription.textContent = data.weather[0].description;
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayForecast(data) {
  forecastDays.innerHTML = '';


  for (let i = 0; i < 24; i += 8) {
    const dayData = data.list[i];
    const date = new Date(dayData.dt * 1000);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const temp = dayData.main.temp.toFixed(1);
    const description = dayData.weather[0].description;
    const iconCode = dayData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const dayDiv = document.createElement('div');
    dayDiv.classList.add('forecast-day');
    dayDiv.innerHTML = `
      <strong>${dayName}</strong>: ${temp}°C, ${description}
      <img src="${iconUrl}" alt="${description}" />
    `;

    forecastDays.appendChild(dayDiv);
  }
}


getCurrentWeather();
getForecast();

const apikey = '90c63cbfe51ed4840250b337977ef4fb';

async function checkWeather() {
    const city = document.getElementById('cityInput').value;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `${data.wind.speed} km/h`;


        updateDateTime();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById('dateTime').textContent = formattedDateTime;
}

updateDateTime();
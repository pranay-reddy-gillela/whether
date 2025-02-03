// API Key (Use the one you provided)
const apiKey = '06605232296847c28f0160727250302';

// Function to fetch weather data
function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("City not found!");
                return;
            }

            // Extract weather data
            const cityName = data.location.name;
            const temperature = `${data.current.temp_c}°C`;
            const condition = data.current.condition.text;
            const humidity = `Humidity: ${data.current.humidity}%`;
            const airQuality = `Air Quality: ${data.current.air_quality.us_epa_index}`;

            // Display weather information
            document.getElementById('city-name').textContent = cityName;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
            document.getElementById('condition').textContent = `Condition: ${condition}`;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('air-quality').textContent = airQuality;
        })
        .catch(err => {
            console.error(err);
            alert("Error fetching weather data. Please try again.");
        });
}

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (city === "") {
        weatherResult.innerHTML = "Please enter a city name.";
        return;
    }

    const apiKey = "19af0c3d2bfa806754b4f09ca0bb70f8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            weatherResult.innerHTML = "City not found.";
            return;
        }

        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>☁️ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        weatherResult.innerHTML = "Something went wrong.";
    }
});
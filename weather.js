// Create UI with pure JavaScript
const app = document.getElementById("app");

// Title
const title = document.createElement("h2");
title.textContent = "Weather App";
app.appendChild(title);

// Input
const input = document.createElement("input");
input.placeholder = "Enter city name";
app.appendChild(input);

// Button
const btn = document.createElement("button");
btn.textContent = "Get Weather";
app.appendChild(btn);

// Result area
const result = document.createElement("div");
app.appendChild(result);

// Basic styling
app.style.fontFamily = "Arial";
app.style.width = "300px";
app.style.margin = "50px auto";
app.style.padding = "20px";
app.style.textAlign = "center";
app.style.border = "1px solid #ddd";

// YOUR API KEY (GET ONE FREE FROM openweathermap.org)
const API_KEY = "REPLACE_WITH_YOUR_API_KEY";

btn.addEventListener("click", () => {
  const city = input.value.trim();
  if (!city) {
    result.textContent = "Please enter a city!";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;

      result.innerHTML = `
        <h3>${city.toUpperCase()}</h3>
        <p>🌡️ Temperature: ${temp}°C</p>
        <p>☁️ Condition: ${description}</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>🌬️ Wind Speed: ${wind} m/s</p>
      `;
    })
    .catch(err => {
      result.textContent = "Error: " + err.message;
    });
});

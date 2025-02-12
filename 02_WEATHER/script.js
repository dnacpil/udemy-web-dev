document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temparature = document.getElementById("temparature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "b121734db41a546995463339acc73e64"; //env variables

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return; //find out more about this syntax

    //remember the 2 things that can happen when you're calling an external DB/server
    try {
      const weatherData = await fetchWeatherData();
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw error("City not found");
    }
    const data = await response.json(); //to convert the object to JSON
    return data;
  }

  function displayWeatherData(data) {
    //display data
    //console.log the "data" first to see the properties/data sent by the API and to know what type they are
    const { name, main, weather } = data;
    cityName.textContent = name;
    temparature.textContent = `Temparature is ${main.temp}`;
    description.textContent = `Weather: ${weather[0].description}`;

    //unlock the display
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});

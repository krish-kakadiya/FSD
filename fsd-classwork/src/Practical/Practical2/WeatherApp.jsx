import React, { useState } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const weatherData = {
    surat: { temp: "35°C", condition: "Cloudy" },
    ahemdabad: { temp: "38°C", condition: "Sunny" },
    rajkot: { temp: "33°C", condition: "Rainy" },
    bhavnagar: { temp: "37°C", condition: "Humid" },
    anand: { temp: "35°C", condition: "Clear" },
  };

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = () => {
    const formattedCity = city.trim();
    if (weatherData[formattedCity]) {
      setWeather(weatherData[formattedCity]);
      setError("");
    } else {
      setWeather(null);
      setError("City not found. Try London, Paris, Tokyo, Mumbai, or NewYork.");
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {weather && (
        <div className="result">
          <h3>Weather in {city}</h3>
          <p>Temperature: {weather.temp}</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default WeatherApp;

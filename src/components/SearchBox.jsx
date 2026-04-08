import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getForecastsByCity,
  getWeatherByCity,
  getWeatherByCoords,
  getForecastsByCoords,
} from "../utils/weatherService.js";

import {
  formatWeatherData,
  formatForecastsData,
} from "../utils/weatherHelper.js";

import "./SearchBox.css";
export default function SearchBox({
  setWeatherInfo,
  setForecastsInfo,
  defaultCity,
  setInitialLoading,
  isLoading,
  setIsLoading,
}) {
  const [city, setCity] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");

  const getWeatherInfo = async (cityName) => {
    setIsLoading(true);
    try {
      const data = await getWeatherByCity(cityName);
      const forecastsData = await getForecastsByCity(cityName);
      const formattedWeather = formatWeatherData(data);
      const formattedForecasts = formatForecastsData(forecastsData);
      setWeatherInfo(formattedWeather);
      setForecastsInfo(formattedForecasts);
      setIsErr(false);
      setErrMessage("");
    } catch (err) {
      setIsErr(true);
      if (err.message.includes("Failed to fetch")) {
        setErrMessage("Please check your internet connection.");
      } else {
        setErrMessage(err.message);
      }
    } finally {
      setInitialLoading(false);
      setSearchLoading(false);
      setIsLoading(false);
      setInfoMessage("");
    }
  };

  const getWeatherUsingCoords = async (lat, lon) => {
    try {
      const data = await getWeatherByCoords(lat, lon);
      const forecastsData = await getForecastsByCoords(lat, lon);
      const formattedWeather = formatWeatherData(data);
      const formattedForecasts = formatForecastsData(forecastsData);
      formattedWeather.city = "Your Location";
      setWeatherInfo(formattedWeather);
      setForecastsInfo(formattedForecasts);
      setInitialLoading(false);
      setIsLoading(false);
      setIsErr(false);
      setErrMessage("");
    } catch (err) {
      setIsErr(true);
      if (err.message.includes("Failed to fetch")) {
        setErrMessage("Please check your internet connection.");
      } else {
        setErrMessage(err.message);
      }
      getWeatherInfo(defaultCity);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeatherUsingCoords(latitude, longitude);
        },
        (err) => {
          setInfoMessage(
            "Location access denied. Showing weather for Islamabad instead.",
          );
          getWeatherInfo(defaultCity);
        },
      );
    } else {
      getWeatherInfo(defaultCity);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!city.trim()) return;
    getWeatherInfo(city);
    setCity("");
    setSearchLoading(true);
  }

  function handleChange(e) {
    setCity(e.target.value);
    setIsErr(false);
    setErrMessage("");
  }

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className={`form-content ${searchLoading ? "blurred" : ""}`}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={handleChange}
            className={`search-input ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          />

          <Button
            variant="contained"
            type="submit"
            className="search-button"
            disabled={isLoading}
          >
            Search
          </Button>
        </div>
        {searchLoading && (
          <div className="loader-overlay">
            <CircularProgress size={48} />
          </div>
        )}
      </form>

      {infoMessage && infoMessage.length > 0 && (
        <p className="info-text">{infoMessage}</p>
      )}
      {isErr && <p className="error-text">❌ {errMessage}</p>}
    </div>
  );
}

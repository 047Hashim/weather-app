import { useState } from "react";
import SearchBox from "./SearchBox";
import CurrentWeatherInfo from "./CurrentWeatherInfo.jsx";
import ForecastList from "./ForecastList.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import CurrentWeatherLoader from "./CurrentWeatherLoader.jsx";
import ForecastLoader from "./ForecastLoader.jsx";

import "./WeatherApp.css";
const DEFAULT_CITY = "Islamabad";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [forecastsInfo, setForecastsInfo] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [tempUnit, setTempUnit] = useState("C");
  const toggleTempUnit = () => {
    setTempUnit((prev) => (prev === "C" ? "F" : "C"));
  };
  return (
    <div className="weather-app">
      <Header
        toggleTempUnit={toggleTempUnit}
        tempUnit={tempUnit}
        isLoading={isLoading}
      />
      <SearchBox
        setWeatherInfo={setWeatherInfo}
        setForecastsInfo={setForecastsInfo}
        defaultCity={DEFAULT_CITY}
        setInitialLoading={setInitialLoading}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {initialLoading ? (
        <>
          <CurrentWeatherLoader />
          <ForecastLoader />
        </>
      ) : (
        <>
          <CurrentWeatherInfo data={weatherInfo} tempUnit={tempUnit} />
          <ForecastList forecasts={forecastsInfo} tempUnit={tempUnit} />
        </>
      )}
      <Footer />
    </div>
  );
}

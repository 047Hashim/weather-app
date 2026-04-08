const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast`;

export const getWeatherByCity = async (cityName) => {
  const res = await fetch(
    `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`,
  );
  if (!res.ok) throw new Error("City not found or weather data unavailable");
  const data = await res.json();
  return data;
};

export const getForecastsByCity = async (cityName) => {
  const res = await fetch(
    `${FORECAST_URL}?q=${cityName}&appid=${API_KEY}&units=metric`,
  );
  if (!res.ok) throw new Error("City not found or weather data unavailable");
  const data = await res.json();
  return data;
};

export const getWeatherByCoords = async (lat, lon) => {
  const res = await fetch(
    `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );
  if (!res.ok) {
    throw new Error("City not found or weather data unavailable");
  }
  const data = await res.json();
  return data;
};

export const getForecastsByCoords = async (lat, lon) => {
  const res = await fetch(
    `${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );
  if (!res.ok) {
    throw new Error("City not found or weather data unavailable");
  }
  const data = await res.json();
  return data;
};

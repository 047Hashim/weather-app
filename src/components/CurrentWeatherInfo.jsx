import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getWeatherIcon } from "./WeatherIcons.jsx";
import { getWeatherBackground } from "../utils/weatherBackground.js";
import {
  convertTemp,
  getUnitSymbol,
  formatTemp,
} from "../utils/temperature.js";
import "./CurrentWeatherInfo.css";

export default function CurrentWeatherInfo({ data, tempUnit }) {
  if (!data) {
    return (
      <div className="unavailable-data">
        <h3>Search a city to see weather</h3>
      </div>
    );
  }
  return (
    <div className="current-weather">
      <Card className="weather-card">
        <div className="weather-image">
          <CardMedia
            image={getWeatherBackground(data.main)}
            title={data.description}
            sx={{ height: "100%" }}
          />
        </div>

        <CardContent className="weather-content">
          <Typography className="card-title">Current Weather</Typography>
          <Typography className="city">
            {data.city === "Your Location"
              ? data.city
              : `${data.city}, ${data.countryCode}`}
          </Typography>

          <Typography className="date">
            {data.dayName}, {data.date}
          </Typography>

          <div className="weather-main">
            {getWeatherIcon(data.main)}
            <Typography>{data.description}</Typography>
          </div>

          <Typography className="temp">
            {formatTemp(convertTemp(data.temp, tempUnit))}{" "}
            {getUnitSymbol(tempUnit)}
          </Typography>

          <div className="extra">
            <Typography variant="body2">
              Feels like: {formatTemp(convertTemp(data.feelsLike, tempUnit))}{" "}
              {getUnitSymbol(tempUnit)}
            </Typography>
            <Typography variant="body2">Humidity: {data.humidity}%</Typography>
            <Typography variant="body2">Wind: {data.wind} m/s</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

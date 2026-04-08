import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getWeatherIcon } from "./WeatherIcons.jsx";
import "./ForecastCard.css";
import {
  convertTemp,
  getUnitSymbol,
  formatTemp,
} from "../utils/temperature.js";

export default function ForecastCard({ data, tempUnit }) {
  if (!data) return null;

  return (
    <Card className="forecast-card">
      <CardContent className="forecast-content">
        <Typography className="forecast-day">{data.dayName}</Typography>

        <Typography className="forecast-date">{data.date}</Typography>

        <div className="forecast-icon">{getWeatherIcon(data.main)}</div>

        <Typography className="forecast-desc">{data.description}</Typography>

        <Typography className="forecast-temp">
          {formatTemp(convertTemp(data.temp, tempUnit))}{" "}
          {getUnitSymbol(tempUnit)}
        </Typography>
      </CardContent>
    </Card>
  );
}

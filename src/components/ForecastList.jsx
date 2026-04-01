import ForecastCard from "./ForecastCard";
import "./ForecastList.css";

export default function ForecastList({ forecasts, tempUnit }) {
  if (!forecasts) return;
  return (
    <div className="forecasts-container">
      <div className="forecast-list">
        {forecasts.map((forecast) => (
          <ForecastCard key={forecast.id} data={forecast} tempUnit={tempUnit} />
        ))}
      </div>
    </div>
  );
}

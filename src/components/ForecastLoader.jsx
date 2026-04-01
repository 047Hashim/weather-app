import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import "./ForecastList.css";
import "./ForecastCard.css";

export default function ForecastLoader() {
  return (
    <div className="forecasts-container">
      <div className="forecast-list">
        {[1, 2, 3].map((item) => (
          <Card className="forecast-card" key={item}>
            <CardContent className="forecast-content">
              <Skeleton
                variant="text"
                width={60}
                height={20}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width={40}
                height={18}
                animation="wave"
              />

              <div className="forecast-icon">
                <Skeleton
                  variant="circular"
                  width={50}
                  height={50}
                  animation="wave"
                />
              </div>

              <Skeleton
                variant="text"
                width={80}
                height={18}
                animation="wave"
              />

              <Skeleton
                variant="text"
                width={50}
                height={25}
                animation="wave"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

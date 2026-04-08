import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import "./CurrentWeatherInfo.css";

export default function WeatherLoader() {
  return (
    <div className="current-weather">
      <Card className="weather-card">
        <div className="weather-image">
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        </div>

        <CardContent className="weather-content">
          <Skeleton variant="text" width={130} height={35} animation="wave" />
          <Skeleton variant="text" width={180} height={40} animation="wave" />
          <Skeleton variant="text" width={140} height={25} animation="wave" />

          <div className="weather-main">
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
            <Skeleton variant="text" width={100} height={30} animation="wave" />
          </div>

          <Skeleton variant="text" width={100} height={55} animation="wave" />

          <div className="extra">
            <Skeleton variant="text" width={140} height={25} animation="wave" />
            <Skeleton variant="text" width={120} height={25} animation="wave" />
            <Skeleton variant="text" width={110} height={25} animation="wave" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

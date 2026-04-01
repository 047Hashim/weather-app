import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudySnowingIcon from "@mui/icons-material/CloudySnowing";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export function getWeatherIcon(main) {
  switch (main?.toLowerCase()) {
    case "clear":
      return <WbSunnyIcon />;

    case "clouds":
      return <CloudIcon />;

    case "rain":
      return <CloudySnowingIcon />;

    case "drizzle":
      return <WaterDropIcon />;

    case "thunderstorm":
      return <ThunderstormIcon />;

    case "snow":
      return <AcUnitIcon />;

    case "mist":
    case "fog":
    case "haze":
    case "smoke":
    case "dust":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
      return <BlurOnIcon />;

    default:
      return <WbSunnyIcon />;
  }
}

export function getWeatherBackground(main) {
  switch (main.toLowerCase()) {
    case "clear":
      return "/source_images/clear.jpg";

    case "clouds":
      return "/source_images/clouds.jpg";

    case "rain":
      return "/source_images/rain.jpg";

    case "drizzle":
      return "/source_images/drizzle.jpg";

    case "thunderstorm":
      return "/source_images/thunderstorm.jpg";

    case "snow":
      return "/source_images/snow.jpg";

    case "mist":
    case "fog":
    case "haze":
    case "smoke":
    case "dust":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
      return "/source_images/fog.jpg";

    default:
      return "/source_images/clear.jpg";
  }
}

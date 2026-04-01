const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const formatWeatherData = (data) => {
  const timestamp = data.dt;
  const date = new Date(timestamp * 1000);
  const dayName = days[date.getDay()];
  const dayNumber = date.getDate();
  const monthName = months[date.getMonth()];
  const fullDate = `${monthName} ${dayNumber}`;
  const countryCode = data.sys.country;

  return {
    city: data.name,
    countryCode: countryCode,
    dayName: dayName,
    date: fullDate,
    icon: data.weather[0].icon,
    main: data.weather[0].main,
    description: data.weather[0].description,
    temp: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  };
};

export const formatForecastsData = (data) => {
  const now = new Date();
  const localYear = now.getFullYear();
  const localMonth = now.getMonth() + 1;
  const localDay = now.getDate();
  const todaylocalDate = `${localYear}-${localMonth}-${localDay}`;

  const forecastList = data.list.filter((item) => {
    const itemDate = new Date(item.dt * 1000);
    const itemlocalDate = `${itemDate.getFullYear()}-${itemDate.getMonth() + 1}-${itemDate.getDate()}`;
    const itemTime = item.dt_txt.split(" ")[1];
    return itemTime === "12:00:00" && itemlocalDate !== todaylocalDate;
  });
  const firstThreeForecast = forecastList.slice(0, 3);
  return firstThreeForecast.map((item) => {
    const itemDate = new Date(item.dt * 1000);
    const dayName = days[itemDate.getDay()];
    const dayNumber = itemDate.getDate();
    const monthName = months[itemDate.getMonth()];
    const fullDate = `${monthName} ${dayNumber}`;
    return {
      dayName: dayName,
      date: fullDate,
      icon: item.weather[0].icon,
      main: item.weather[0].main,
      description: item.weather[0].description,
      temp: item.main.temp,
      temp_min: item.main.temp_min,
      temp_max: item.main.temp_max,
      id: item.dt,
    };
  });
};

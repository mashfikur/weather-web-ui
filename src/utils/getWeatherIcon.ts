// src/utils/getWeatherIcon.ts

export const getWeatherIcon = (condition: string): string => {
  const value = condition.toLowerCase();

  if (value.includes("snow")) {
    return "/weather-icons/clouds-snow.svg";
  }
  if (value.includes("rain") || value.includes("drizzle")) {
    return "/weather-icons/sun-clouds-rain.svg";
  }
  if (
    value.includes("thunder") ||
    value.includes("storm") ||
    value.includes("lightning")
  ) {
    return "/weather-icons/lightning.svg";
  }
  if (
    value.includes("partly") ||
    (value.includes("sun") && value.includes("cloud"))
  ) {
    return "/weather-icons/sun-clouds.svg";
  }
  if (value.includes("cloud") || value.includes("overcast")) {
    return "/weather-icons/clouds.svg";
  }
  if (value.includes("clear") || value.includes("sunny")) {
    return "/weather-icons/sun.svg";
  }

  // default fallback icon
  return "/weather-icons/sun.svg";
};

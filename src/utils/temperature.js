export const convertTemp = (tempC, tempUnit) =>
  tempUnit === "F" ? (tempC * 9) / 5 + 32 : tempC;

export const getUnitSymbol = (tempUnit) => (tempUnit === "F" ? "°F" : "°C");

export const formatTemp = (temp) => Math.round(temp * 100) / 100;

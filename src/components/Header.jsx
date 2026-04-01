import "./Header.css";
export default function Header({ tempUnit, toggleTempUnit, isLoading }) {
  return (
    <header className="header">
      <div className="header-left"></div> {/* empty placeholder */}
      <h1>Weather App</h1>
      <button
        className="toggle-switch"
        onClick={toggleTempUnit}
        disabled={isLoading}
      >
        <span className={`switch-circle ${tempUnit === "F" ? "active" : ""}`}>
          °{tempUnit}
        </span>
      </button>
    </header>
  );
}

import React, { useState, useEffect } from "react";
import "../styles/Galerie.css";

export default function Galerie() {
  const [satisfaction, setSatisfaction] = useState(1);

  const getColorForSatisfaction = (value) => {
    const colors = ["#ff0000", "#ff4500", "#ffd700", "#008000", "#006400"];
    return colors[value - 1] || "#ddd";
  };

  const getFaceForSatisfaction = (value) => {
    const faces = ["😢", "😟", "😐", "😊", "😁"];
    return faces[value - 1] || "😐";
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--satisfaction-pct",
      `${(satisfaction - 1) * 25}%`
    );
    document.documentElement.style.setProperty(
      "--satisfaction-col",
      getColorForSatisfaction(satisfaction)
    );
  }, [satisfaction]);

  return (
    <div className="galerie-container">
      <label htmlFor="satisfaction" className="galerie-container-label">
        Wie findest du die Seite?
      </label>
      <input
        type="range"
        id="satisfaction"
        className={`galerie-satisfaction satisfaction-${satisfaction}`}
        value={satisfaction}
        min="1"
        max="5"
        onChange={(e) => setSatisfaction(parseInt(e.target.value, 10))}
      />
      <div className="satisfaction-face">{getFaceForSatisfaction(satisfaction)}</div>
    </div>
  );
}

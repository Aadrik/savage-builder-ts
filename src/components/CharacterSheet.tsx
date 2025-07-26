import React from "react";
import { useCharacter } from "../hooks/useCharacter";

export default function CharacterSheet() {
  const {
    attributes,
    upgradeAttribute,
    downgradeAttribute,
    spendHindrancePoint,
    pointsAvailable,
  } = useCharacter(5); // You can set base points here

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2>Character Attributes</h2>
      <p>Points Remaining: {pointsAvailable}</p>

      {Object.entries(attributes).map(([key, value]) => (
        <div key={key} style={{ marginBottom: "1rem" }}>
          <strong>{key}</strong>: {value}
          <button
            onClick={() => downgradeAttribute(key as keyof typeof attributes)}
          >
            -
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              upgradeAttribute(key as keyof typeof attributes);
            }}
          >
            +
          </button>
        </div>
      ))}

      <div style={{ marginTop: "2rem" }}>
        <button onClick={spendHindrancePoint}>Add Hindrance Bonus Point</button>
      </div>
    </div>
  );
}

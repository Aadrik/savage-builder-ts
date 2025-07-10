import React, { useState } from "react";
import AttributeSelector from "./components/AttributeSelector";
import { Attributes, Character } from "./types/character";

const defaultAttributes: Attributes = {
  Agility: "d4",
  Smarts: "d4",
  Spirit: "d4",
  Strength: "d4",
  Vigor: "d4",
};

function App() {
  const [character, setCharacter] = useState<Character>({
    name: "",
    attributes: defaultAttributes,
  });

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Savage Worlds Character Builder</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>Name: </label>
        <input
          type="text"
          value={character.name}
          onChange={(e) => setCharacter({ ...character, name: e.target.value })}
        />
      </div>

      <AttributeSelector
        attributes={character.attributes}
        setAttributes={(updatedAttrs) =>
          setCharacter({ ...character, attributes: updatedAttrs })
        }
      />

      <pre style={{ marginTop: "2rem", background: "#eee", padding: "1rem" }}>
        {JSON.stringify(character, null, 2)}
      </pre>
    </div>
  );
}

export default App;

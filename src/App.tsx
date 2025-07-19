import React, { useState } from "react";
import CharacterForm from "./components/CharacterForm";
//import AttributeSelector from "./components/AttributeSelector";
import { Attributes, Character } from "./types/character";
//import SkillSelector from "./components/SkillSelector";

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
    hindrances: [],
    attributes: defaultAttributes,
    skills: [],
    edges: [],
  });

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Savage Worlds Character Builder</h1>

      <CharacterForm character={character} setCharacter={setCharacter} />

      <pre style={{ marginTop: "2rem", background: "#eee", padding: "1rem" }}>
        {JSON.stringify(character, null, 2)}
      </pre>
    </div>
  );
}

export default App;

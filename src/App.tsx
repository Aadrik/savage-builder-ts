import React, { useState } from "react";
import CharacterForm from "./components/CharacterForm";
//import AttributeSelector from "./components/AttributeSelector";
import { Attributes, Character, Skill } from "./types/character";
//import SkillSelector from "./components/SkillSelector";

const defaultAttributes: Attributes = {
  Agility: "d4",
  Smarts: "d4",
  Spirit: "d4",
  Strength: "d4",
  Vigor: "d4",
};

const defaultSkills: Skill[] = [
  { name: "Athletics", linkedAttribute: "Agility", die: "d4" },
  { name: "Common Knowledge", linkedAttribute: "Smarts", die: "d4" },
  { name: "Notice", linkedAttribute: "Smarts", die: "d4" },
  { name: "Persuasion", linkedAttribute: "Spirit", die: "d4" },
  { name: "Stealth", linkedAttribute: "Agility", die: "d4" },
];

const skillPoints = 12;
const attributePoints = 5;
const hindrancePoints = 0;

function App() {
  const [character, setCharacter] = useState<Character>({
    name: "",
    hindrances: [],
    attributes: defaultAttributes,
    skills: defaultSkills,
    edges: [],
    points: { attributePoints, hindrancePoints, skillPoints },
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

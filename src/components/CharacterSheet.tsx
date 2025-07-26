import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { Attributes, Character } from "../types/character";

interface Props {
  character: Character;
  setCharacter: (character: Character) => void;
}

export default function CharacterSheet({ character, setCharacter }: Props) {
  const { updateAttribute, addSkill } = useCharacter(character, setCharacter);

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2>Character Attributes</h2>

      {Object.entries(character.attributes).map(([key, value]) => {
        const typedKey = key as keyof Attributes;
        return (
          <div key={key} style={{ marginBottom: "1rem" }}>
            <strong>{key}</strong>: {value}
            <button onClick={() => updateAttribute(typedKey, -1)}>-</button>
          </div>
        );
      })}
    </div>
  );
}

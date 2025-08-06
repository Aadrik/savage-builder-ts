//import React from "react";
import AttributeSelector from "./AttributeSelector";
import HindranceSelector from "./HindranceSelector";
import { Character } from "../types/character";

import { useCharacter } from "../hooks/useCharacter";
import SkillSelector from "./SkillSelector";
import EdgeSelector from "./EdgeSelector";

interface Props {
  character: Character;
  setCharacter: (char: Character) => void;
}

export default function CharacterForm({ character, setCharacter }: Props) {
  const { hindrancePoints } = useCharacter(character, setCharacter);

  return (
    <>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={character.name}
          onChange={(e) => setCharacter({ ...character, name: e.target.value })}
        />
        <section>
          <h3>Hindrance Rewards ({hindrancePoints()})</h3>
        </section>
      </div>

      <HindranceSelector character={character} setCharacter={setCharacter} />

      <AttributeSelector character={character} setCharacter={setCharacter} />

      <SkillSelector character={character} setCharacter={setCharacter} />

      <EdgeSelector character={character} setCharacter={setCharacter} />
    </>
  );
}

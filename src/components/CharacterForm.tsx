//import React from "react";
import AttributeSelector from "./AttributeSelector";
import SkillSelector from "./SkillSelector";
import { Character } from "../types/character";
import EdgeSelector from "./EdgeSelector";
import HindranceSelector from "./HindranceSelector";
import CharacterSheet from "./CharacterSheet";
import { useCharacter } from "../hooks/useCharacter";

interface Props {
  character: Character;
  setCharacter: (char: Character) => void;
}

export default function CharacterForm({ character, setCharacter }: Props) {
  const { addHindrance, hindrancePoints } = useCharacter(
    character,
    setCharacter
  );

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

      {/*
      <CharacterSheet
        character={character}
        setCharacter={setCharacter}
      ></CharacterSheet>
      */}

      <HindranceSelector character={character} setCharacter={setCharacter} />

      <AttributeSelector character={character} setCharacter={setCharacter} />

      <SkillSelector character={character} setCharacter={setCharacter} />

      <EdgeSelector
        selectedEdges={character.edges || []}
        setSelectedEdges={(edges) => setCharacter({ ...character, edges })}
        character={character}
      />
    </>
  );
}

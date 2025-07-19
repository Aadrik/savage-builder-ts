//import React from "react";
import AttributeSelector from "./AttributeSelector";
import SkillSelector from "./SkillSelector";
import { Character } from "../types/character";
import EdgeSelector from "./EdgeSelector";
import HindranceSelector from "./HindranceSelector";

interface Props {
  character: Character;
  setCharacter: (char: Character) => void;
}

export default function CharacterForm({ character, setCharacter }: Props) {
  return (
    <>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={character.name}
          onChange={(e) => setCharacter({ ...character, name: e.target.value })}
        />
      </div>

      <HindranceSelector
        selectedHindrances={character.hindrances || []}
        setSelectedHindrances={(hindrances) =>
          setCharacter({ ...character, hindrances })
        }
        character={character}
      />

      <AttributeSelector
        attributes={character.attributes}
        setAttributes={(attrs) =>
          setCharacter({ ...character, attributes: attrs })
        }
      />

      <SkillSelector
        skills={character.skills}
        setSkills={(skills) => setCharacter({ ...character, skills })}
        attributes={character.attributes}
      />

      <EdgeSelector
        selectedEdges={character.edges || []}
        setSelectedEdges={(edges) => setCharacter({ ...character, edges })}
        character={character}
      />
    </>
  );
}

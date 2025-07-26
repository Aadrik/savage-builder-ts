//import React from "react";
import AttributeSelector from "./AttributeSelector";
import SkillSelector from "./SkillSelector";
import { Character } from "../types/character";
import EdgeSelector from "./EdgeSelector";
import HindranceSelector from "./HindranceSelector";
import { calculateHindrancePoints } from "../utils/hindrance";
import CharacterSheet from "./CharacterSheet";

interface Props {
  character: Character;
  setCharacter: (char: Character) => void;
}

export default function CharacterForm({ character, setCharacter }: Props) {
  const hindrancePoints = calculateHindrancePoints(character.hindrances);
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
          <h3>Hindrance Rewards ({hindrancePoints})</h3>
        </section>
      </div>

      <CharacterSheet></CharacterSheet>

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
        selectedSkills={character.skills}
        setSelectedSkills={(skills) => setCharacter({ ...character, skills })}
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

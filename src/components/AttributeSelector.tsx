import { useCharacter } from "../hooks/useCharacter";
import { Attributes, Character } from "../types/character";
import CollapsibleSection from "./CollapsibleSection";
import DiePicker from "./DiePicker";

interface Props {
  character: Character;
  setCharacter: (character: Character) => void;
}

export default function AttributeSelector({ character, setCharacter }: Props) {
  const { updateAttribute } = useCharacter(character, setCharacter);
  return (
    <CollapsibleSection title="Attributes">
      {Object.keys(character.attributes).map((attr) => {
        const typedAttr = attr as keyof Attributes;
        return (
          <div key={attr}>
            <strong>{attr}: </strong> {character.attributes[typedAttr]}
            <DiePicker
              currentDie={character.attributes[typedAttr]}
              onSelectDie={(newDie) => updateAttribute(typedAttr, newDie)}
            />
          </div>
        );
      })}
    </CollapsibleSection>
  );
}

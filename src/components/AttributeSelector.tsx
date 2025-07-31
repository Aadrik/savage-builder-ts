import { useCharacter } from "../hooks/useCharacter";
import { Attributes, Character } from "../types/character";
import CollapsibleSection from "./CollapsibleSection";
import DieLevelSlider from "./DieLevelSlider";

interface Props {
  character: Character;
  setCharacter: (character: Character) => void;
}

export default function AttributeSelector({ character, setCharacter }: Props) {
  const { decreaseAttribute, increaseAttribute } = useCharacter(
    character,
    setCharacter
  );
  return (
    <CollapsibleSection title="Attributes">
      {Object.keys(character.attributes).map((attr) => {
        const typedAttr = attr as keyof Attributes;
        return (
          <div key={attr}>
            <strong>{attr}: </strong> {character.attributes[typedAttr]}
            <button onClick={() => decreaseAttribute(typedAttr)}>-</button>
            <button onClick={() => increaseAttribute(typedAttr)}>+</button>
          </div>
        );
      })}
    </CollapsibleSection>
  );
}

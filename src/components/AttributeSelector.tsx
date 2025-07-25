import { Attributes } from "../types/character";
import CollapsibleSection from "./CollapsibleSection";
import DieLevelSlider from "./DieLevelSlider";

interface Props {
  attributes: Attributes;
  setAttributes: (newAttrs: Attributes) => void;
}

export default function AttributeSelector({
  attributes,
  setAttributes,
}: Props) {
  return (
    <CollapsibleSection title="Attributes">
      {Object.keys(attributes).map((attr) => (
        <div key={attr}>
          <label>{attr}:</label>
          <DieLevelSlider
            currentDie={attributes[attr as keyof Attributes]}
            onChange={(newDie) =>
              setAttributes({ ...attributes, [attr]: newDie })
            }
          />
        </div>
      ))}
    </CollapsibleSection>
  );
}

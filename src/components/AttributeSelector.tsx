import { Attributes, DieType } from "../types/character";
import DieLevelSlider from "./DieLevelSlider";

interface Props {
  attributes: Attributes;
  setAttributes: (newAttrs: Attributes) => void;
}

const diceOptions: DieType[] = ["d4", "d6", "d8", "d10", "d12"];

export default function AttributeSelector({
  attributes,
  setAttributes,
}: Props) {
  return (
    <div>
      <h2>Attributes</h2>
      {Object.keys(attributes).map((attr) => {
        const currentDie = attributes[attr as keyof Attributes];

        return (
          <div key={attr} style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              {attr}
            </label>
            <DieLevelSlider
              currentDie={currentDie}
              onChange={(newDie) => {
                const updated = {
                  ...attributes,
                  [attr]: newDie,
                };
                setAttributes(updated);
              }}
              minDie="d4"
              maxDie="d12"
            />
          </div>
        );
      })}
    </div>
  );
}

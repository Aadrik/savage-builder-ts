import React from "react";
import { Attributes, DieType } from "../types/character";

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
      {Object.keys(attributes).map((attr) => (
        <div key={attr}>
          <label>{attr}:</label>
          <select
            value={attributes[attr as keyof Attributes]}
            onChange={(e) => {
              const undated = {
                ...attributes,
                [attr]: e.target.value as DieType,
              };
              setAttributes(undated);
            }}
          >
            {diceOptions.map((die) => (
              <option key={die} value={die}>
                {die}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

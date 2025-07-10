import React from "react";
import { Skill, DieType, Attributes } from "../types/character";

interface Props {
  skills: Skill[];
  setSkills: (newSkills: Skill[]) => void;
  attributes: Attributes; // for showing linked options
}

const diceOptions: DieType[] = ["d4", "d6", "d8", "d10", "d12"];

const availableSkills = [
  "Athletics",
  "Common Knowledge",
  "Notice",
  "Persusion",
  "Stealth",
];

export default function SkillSelector({
  skills,
  setSkills,
  attributes,
}: Props) {
  const addSkill = () => {
    setSkills([
      ...skills,
      {
        name: "",
        linkedAttribute: "Smarts",
        die: "d4",
      },
    ]);
  };

  const updateSkill = (index: number, field: keyof Skill, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      [field]: value as any, // TypeScript leniency here
    };
    setSkills(updatedSkills);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Skills</h2>
      <button onClick={addSkill}>Add Skill</button>

      {skills.map((skill, index) => (
        <div key={index} style={{ marginTop: "1red" }}>
          <input
            type="text"
            placeholder="Skill Name"
            value={skill.name}
            onChange={(e) => updateSkill(index, "name", e.target.value)}
          />

          <select
            value={skill.linkedAttribute}
            onChange={(e) =>
              updateSkill(index, "linkedAttribute", e.target.value)
            }
          >
            {Object.keys(attributes).map((attr) => (
              <option key={attr} value={attr}>
                {attr}
              </option>
            ))}
          </select>

          <select
            value={skill.die}
            onChange={(e) => updateSkill(index, "die", e.target.value)}
          >
            {diceOptions.map((die) => (
              <option key={die} value={die}>
                {die}
              </option>
            ))}
          </select>

          <button onClick={() => removeSkill(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

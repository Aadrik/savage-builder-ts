import React from "react";
import { Skill, DieType, Attributes } from "../types/character";
import { skillDefinitions } from "../data/skills";

interface Props {
  skills: Skill[];
  setSkills: (newSkills: Skill[]) => void;
  attributes: Attributes; // for showing linked options
}

const diceOptions: DieType[] = ["d4", "d6", "d8", "d10", "d12"];

export default function SkillSelector({
  skills,
  setSkills,
  attributes,
}: Props) {
  const addSkill = () => {
    const firstSkill = skillDefinitions[0]; // default to first skill
    setSkills([
      ...skills,
      {
        name: firstSkill.name,
        linkedAttribute: firstSkill.linkedAttribute as keyof Attributes, // ensure type matches
        die: "d4",
      },
    ]);
  };

  const updateSkill = (index: number, field: keyof Skill, value: string) => {
    const updatedSkills = [...skills];

    if (field === "name") {
      const matched = skillDefinitions.find((s) => s.name === value);
      updatedSkills[index] = {
        ...updatedSkills[index],
        name: value,
        linkedAttribute: (matched?.linkedAttribute ??
          "Smarts") as keyof Attributes, // fallback attribute
      };
    } else {
      updatedSkills[index] = {
        ...updatedSkills[index],
        [field]: value as any,
      };
    }

    setSkills(updatedSkills);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const isPredefinedSkill = (name: string) => {
    return skillDefinitions.some((skill) => skill.name === name);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Skills</h2>
      <button onClick={addSkill}>Add Skill</button>

      {skills.map((skill, index) => (
        <div key={index} style={{ marginTop: "1red" }}>
          <select
            value={skill.name}
            onChange={(e) => updateSkill(index, "name", e.target.value)}
          >
            {skillDefinitions.map((skillDef) => (
              <option key={skillDef.name} value={skillDef.name}>
                {skillDef.name}
              </option>
            ))}
          </select>

          <select
            value={skill.linkedAttribute}
            disabled={isPredefinedSkill(skill.name)} // disable if predefined
            style={{
              opacity: isPredefinedSkill(skill.name) ? 0.5 : 1,
              pointerEvents: isPredefinedSkill(skill.name) ? "none" : "auto",
            }}
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

import { Skill, SkillDefinition } from "../types/character";

export function toggleSkill(
  skill: SkillDefinition,
  selectedSkills: Skill[],
  setSelectedSkills: (newSkills: Skill[]) => void
) {
  const isSelected = selectedSkills.some((e) => e.name === skill.name);
  if (isSelected) {
    setSelectedSkills(selectedSkills.filter((e) => e.name !== skill.name));
  } else {
    setSelectedSkills([
      ...selectedSkills,
      { name: skill.name, linkedAttribute: skill.linkedAttribute, die: "d4" },
    ]);
  }
}

// TODO: Add logic to check linked skill level and calculate
// cost to add skill.
// TODO: Add starter skills

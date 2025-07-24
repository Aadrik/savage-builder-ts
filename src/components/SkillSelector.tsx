import {
  Skill,
  DieType,
  Attributes,
  SkillDefinition,
} from "../types/character";
import { skillDefinitions } from "../data/skills";
import InfoCard from "./InfoCard";
import styles from "./SkillSelector.module.css";
import { toggleSkill } from "../utils/skill";

interface Props {
  selectedSkills: Skill[];
  setSelectedSkills: (newSkills: Skill[]) => void;
  attributes: Attributes; // for showing linked options
}

const diceOptions: DieType[] = ["d4", "d6", "d8", "d10", "d12"];

export default function SkillSelector({
  selectedSkills,
  setSelectedSkills,
}: Props) {
  return (
    <>
      {/* Container to hold Skill cards */}
      <div className={styles.cardGrid}>
        {/* Map through all skills and display */}
        {skillDefinitions.map((skill) => {
          const isSelected = selectedSkills.some((s) => s.name === skill.name);

          const handleToggle = () => {
            toggleSkill(skill, selectedSkills, setSelectedSkills);
          };

          return (
            <InfoCard
              key={skill.name}
              name={skill.name}
              description={`Linked to ${skill.linkedAttribute}`}
              isSelected={isSelected}
              isDisabled={false}
              onToggle={handleToggle}
            ></InfoCard>
          );
        })}
      </div>
    </>
  );
}

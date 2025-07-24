import { Skill, Attributes } from "../types/character";
import { skills } from "../data/skills";
import InfoCard from "./InfoCard";
import styles from "./SkillSelector.module.css";
import { toggleSkill } from "../utils/skill";
import { useState } from "react";

interface Props {
  selectedSkills: Skill[];
  setSelectedSkills: (newSkills: Skill[]) => void;
  attributes: Attributes; // for showing linked options
}

export default function SkillSelector({
  selectedSkills,
  setSelectedSkills,
}: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  return (
    <div>
      <h2 onClick={toggleCollapse} className={styles.header}>
        Skills
        <span className={styles.icon}>{isCollapsed ? "▶" : "▼"}</span>
      </h2>
      {!isCollapsed && (
        <div className={styles.cardGrid}>
          {/* Map through all skills and display */}
          {skills.map((skill) => {
            const isSelected = selectedSkills.some(
              (s) => s.name === skill.name
            );

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
      )}
    </div>
  );
}

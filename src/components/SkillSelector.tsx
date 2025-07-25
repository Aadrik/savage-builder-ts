import { Skill, Attributes } from "../types/character";
import { skills } from "../data/skills";
import InfoCard from "./InfoCard";
import styles from "./SkillSelector.module.css";
import { toggleSkill } from "../utils/skill";
import CollapsibleSection from "./CollapsibleSection";

interface Props {
  selectedSkills: Skill[];
  setSelectedSkills: (newSkills: Skill[]) => void;
  attributes: Attributes; // for showing linked options
}

export default function SkillSelector({
  selectedSkills,
  setSelectedSkills,
}: Props) {
  return (
    <CollapsibleSection title="Skills">
      <div className={styles.cardGrid}>
        {/* Map through all skills and display */}
        {skills.map((skill) => {
          const isSelected = selectedSkills.some((s) => s.name === skill.name);

          const handleToggle = () => {
            toggleSkill(skill, selectedSkills, setSelectedSkills);
          };

          return (
            <InfoCard
              key={skill.name}
              name={skill.name}
              description={skill.description ?? ""}
              isSelected={isSelected}
              isDisabled={false}
              onToggle={handleToggle}
              extraFields={
                <>
                  <p>Linked Attribute: {skill.linkedAttribute}</p>
                </>
              }
            ></InfoCard>
          );
        })}
      </div>
    </CollapsibleSection>
  );
}

import { Character } from "../types/character";
import { skills } from "../data/skills";
import InfoCard from "./InfoCard";
import styles from "./SkillSelector.module.css";
import CollapsibleSection from "./CollapsibleSection";
import { useCharacter } from "../hooks/useCharacter";

const defaultSkills = [
  "Athletics",
  "Common Knowledge",
  "Notice",
  "Persuasion",
  "Stealth",
];

interface Props {
  character: Character;
  setCharacter: (character: Character) => void;
}

export default function SkillSelector({ character, setCharacter }: Props) {
  const { addSkill, removeSkill } = useCharacter(character, setCharacter);
  const selectedSkills = character.skills;

  return (
    <CollapsibleSection title="Skills">
      <div className={styles.cardGrid}>
        {/* Map through all skills and display */}
        {skills.map((skill) => {
          const isSelected = selectedSkills.some((s) => s.name === skill.name);

          const handleToggle = () => {
            if (isSelected) {
              removeSkill(skill);
            } else {
              addSkill(skill);
            }
          };

          const isDisabled = defaultSkills.includes(skill.name) ? true : false;

          return (
            <InfoCard
              key={skill.name}
              name={skill.name}
              description={skill.description ?? ""}
              isSelected={isSelected}
              isDisabled={isDisabled}
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

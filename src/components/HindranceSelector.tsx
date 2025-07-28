import { useState } from "react";
import { hindrances } from "../data/hindrances";
import {
  Character,
  HindranceCategory,
  HindranceDefinition,
} from "../types/character";

import styles from "./HindranceSelector.module.css";
import InfoCard from "./InfoCard";
import CollapsibleSection from "./CollapsibleSection";
import { useCharacter } from "../hooks/useCharacter";

interface Props {
  character: Character;
  setCharacter: (character: Character) => void;
}

export default function HindranceSelector({ character, setCharacter }: Props) {
  const selectedHindrances = character.hindrances;

  const { addHindrance, hindrancePoints, removeHindrance, isValidHindrance } =
    useCharacter(character, setCharacter);

  const [categoryFilter, setCategoryFilter] = useState<
    HindranceCategory | "All"
  >("All");
  const [tagFilter, setTagFilter] = useState<string | "All">("All");

  const filteredHindrances = hindrances.filter((h) => {
    const matchCategory =
      categoryFilter === "All" || h.category === categoryFilter;
    const matchTag = tagFilter === "All" || h.tags?.includes(tagFilter);
    return matchCategory && matchTag;
  });

  return (
    <CollapsibleSection title="Hindrances">
      <div className={styles.panel}>
        <p>
          Selected Points: <strong>{hindrancePoints()}</strong> / 4
        </p>
        {/* Filter UI */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value as HindranceCategory | "All")
            }
          >
            <option value="All">All</option>
            <option value="Minor">Minor</option>
            <option value="Major">Major</option>
          </select>

          <select
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Physical">Physical</option>
            <option value="Mental">Mental</option>
            <option value="Social">Social</option>
          </select>
        </div>

        {/* Hindrance Options */}
        <div className={styles.cardGrid}>
          {filteredHindrances.map((hindrance) => {
            const isSelected = character.hindrances.some(
              (h) =>
                h.name === hindrance.name && h.category === hindrance.category
            );

            // Disable button if hindrance would push character past
            // four hindrance points
            const isDisabled = !isSelected && !isValidHindrance(hindrance);

            const handleToggle = () => {
              if (isSelected) {
                removeHindrance(hindrance);
              } else if (isValidHindrance(hindrance)) {
                addHindrance(hindrance);
              }
            };

            return (
              <InfoCard
                key={`${hindrance.name}-${hindrance.category}`}
                name={hindrance.name}
                category={hindrance.category}
                description={hindrance.description}
                tags={hindrance.tags}
                isSelected={isSelected}
                isDisabled={isDisabled}
                onToggle={handleToggle}
              ></InfoCard>
            );
          })}
        </div>

        <h3>Selected Hindrances</h3>
        <ul>
          {selectedHindrances.map((hindrance) => (
            <li key={hindrance.name}>
              <strong>{hindrance.name}</strong> {hindrance.description}
            </li>
          ))}
        </ul>
      </div>
    </CollapsibleSection>
  );
}

import { useState } from "react";
import { hindrances } from "../data/hindrances";
import {
  Character,
  HindranceCategory,
  HindranceDefinition,
} from "../types/character";
import {
  calculateHindrancePoints,
  isValid,
  toggleHindrance,
} from "../utils/hindrance";

import styles from "./HindranceSelector.module.css";
import InfoCard from "./InfoCard";
import CollapsibleSection from "./CollapsibleSection";

interface Props {
  selectedHindrances: HindranceDefinition[];
  setSelectedHindrances: (hinderance: HindranceDefinition[]) => void;
  character: Character;
}

export default function HindranceSelector({
  selectedHindrances,
  setSelectedHindrances,
  character,
}: Props) {
  const currentPoints = calculateHindrancePoints(selectedHindrances);
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
          Selected Points: <strong>{currentPoints}</strong> / 4
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
            const isSelected = selectedHindrances.some(
              (h) =>
                h.name === hindrance.name && h.category === hindrance.category
            );

            const projectedPoints = calculateHindrancePoints([
              ...selectedHindrances,
              hindrance,
            ]);

            const isDisabled = !isSelected && projectedPoints > 4;
            const handleToggle = () => {
              if (isSelected || isValid(currentPoints, hindrance)) {
                toggleHindrance(
                  hindrance,
                  selectedHindrances,
                  setSelectedHindrances
                );
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

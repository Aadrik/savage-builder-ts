import React, { useState } from "react";
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
    <div>
      <h2>Hindrances</h2>
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
      <ul>
        {filteredHindrances.map((hindrance) => (
          <li key={`${hindrance.name}-${hindrance.category}`}>
            <strong>{hindrance.name}</strong>({hindrance.category} -{" "}
            {hindrance.description})
            <button
              onClick={() => {
                if (isValid(currentPoints, hindrance)) {
                  toggleHindrance(
                    hindrance,
                    selectedHindrances,
                    setSelectedHindrances
                  );
                }
              }}
              style={{ marginTop: ".5rem" }}
            >
              {selectedHindrances.some((e) => e.name === hindrance.name)
                ? "Remove"
                : "Add"}
            </button>
          </li>
        ))}
      </ul>

      <h3>Selected Hindrances</h3>
      <ul>
        {selectedHindrances.map((hindrance) => (
          <li key={hindrance.name}>
            <strong>{hindrance.name}</strong> {hindrance.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

// TODO: Create a CSS file to turn these into cards that slightly grow when hovered over.
// Add a check to disable cards that are no longer available if too many hindrance points are needed.

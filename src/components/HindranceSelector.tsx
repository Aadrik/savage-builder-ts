import React, { useState } from "react";
import { hindrances } from "../data/hindrances";
import {
  Character,
  HindranceCategory,
  HindranceDefinition,
} from "../types/character";

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

  const toggleHindrance = (hindrance: HindranceDefinition) => {
    const isSelected = selectedHindrances.some(
      (e) => e.name === hindrance.name
    );
    if (isSelected) {
      setSelectedHindrances(
        selectedHindrances.filter((e) => e.name !== hindrance.name)
      );
    } else {
      setSelectedHindrances([...selectedHindrances, hindrance]);
    }
  };

  return (
    <div>
      <h2>Hindrances</h2>
      {/* Filter UI */}
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

      <select value={tagFilter} onChange={(e) => setTagFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Physical">Physical</option>
        <option value="Mental">Mental</option>
        <option value="Social">Social</option>
      </select>

      <ul>
        {filteredHindrances.map((hindrance) => (
          <li key={`${hindrance.name}-${hindrance.category}`}>
            <strong>{hindrance.name}</strong>({hindrance.category} -{" "}
            {hindrance.description})
            <button
              onClick={() => toggleHindrance(hindrance)}
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

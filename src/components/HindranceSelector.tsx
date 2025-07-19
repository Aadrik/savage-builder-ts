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

  return (
    <div>
      <h2>Hindrances</h2>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

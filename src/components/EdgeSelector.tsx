import React, { useState } from "react";
import { Character, EdgeDefinition, EdgeCategory } from "../types/character";
import { validateEdge } from "../utils/validation";
import { edges } from "../data/edges";

interface Props {
  selectedEdges: EdgeDefinition[];
  setSelectedEdges: (edge: EdgeDefinition[]) => void;
  edgePool: EdgeDefinition[];
  character: Character;
}

const edgeCategories: (EdgeCategory | "All")[] = [
  "All",
  "Background",
  "Combat",
  "Leadership",
  "Legendary",
  "Power",
  "Professional",
  "Social",
  "Weird",
];

export default function EdgeSelector({
  selectedEdges,
  setSelectedEdges,
  edgePool,
  character,
}: Props) {
  const [categoryFilter, setCategoryFilter] = useState<EdgeCategory | "All">(
    "All"
  );

  const filteredEdges =
    categoryFilter === "All"
      ? edges
      : edges.filter((edge) => edge.category === categoryFilter);

  const toggleEdge = (edge: EdgeDefinition) => {
    const isSelected = selectedEdges.some((e) => e.name === edge.name);
    if (isSelected) {
      setSelectedEdges(selectedEdges.filter((e) => e.name !== edge.name));
    } else {
      setSelectedEdges([...selectedEdges, edge]);
    }
  };

  return (
    <div>
      <h2>Edges</h2>

      {/* Filter UI */}
      <select
        value={categoryFilter}
        onChange={(e) =>
          setCategoryFilter(e.target.value as EdgeCategory | "All")
        }
      >
        {edgeCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <ul>
        {filteredEdges.map((edge) => {
          const { isValid, reasons } = validateEdge(edge, character);
          return (
            <li key={edge.name} style={{ marginBottom: "1rem" }}>
              <strong>{edge.name}</strong>: {edge.description}
              {!isValid && (
                <ul style={{ color: "red", marginTop: "0.5rem" }}>
                  {reasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => toggleEdge(edge)}
                disabled={!isValid}
                style={{ marginTop: "0.5rem" }}
              >
                {selectedEdges.some((e) => e.name === edge.name)
                  ? "Remove"
                  : "Add"}
              </button>
            </li>
          );
        })}
      </ul>

      <h3>Selected Edges</h3>
      <ul>
        {selectedEdges.map((edge) => (
          <li key={edge.name}>
            <strong>{edge.name}</strong>: {edge.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

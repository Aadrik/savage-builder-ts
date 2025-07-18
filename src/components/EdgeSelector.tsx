import React from "react";
import { Character, EdgeDefinition } from "../types/character";
import { validateEdge } from "../utils/validation";

interface Props {
  selectedEdges: EdgeDefinition[];
  setSelectedEdges: (edge: EdgeDefinition[]) => void;
  edgePool: EdgeDefinition[];
  character: Character;
}

export default function EdgeSelector({
  selectedEdges,
  setSelectedEdges,
  edgePool,
  character,
}: Props) {
  const toggleEdge = (edge: EdgeDefinition) => {
    const isSelected = selectedEdges.some((e) => e.name === edge.name);
    if (isSelected) {
      setSelectedEdges(selectedEdges.filter((e) => e.name !== edge.name));
    } else {
      setSelectedEdges([...selectedEdges, edge]);
    }
  };

  // TODO: Make edges a drop down and filterable to avoid having a
  // massive list always showing.

  return (
    <div>
      <h2>Edges</h2>
      <ul>
        {edgePool.map((edge) => {
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

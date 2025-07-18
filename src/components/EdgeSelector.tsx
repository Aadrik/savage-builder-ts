import React from "react";
import { EdgeDefinition } from "../types/character";

interface Props {
  selectedEdges: EdgeDefinition[];
  setSelectedEdges: (edge: EdgeDefinition[]) => void;
  edgePool: EdgeDefinition[];
}

export default function EdgeSelector({
  selectedEdges,
  setSelectedEdges,
  edgePool,
}: Props) {
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
      <ul>
        {edgePool.map((edge) => (
          <li key={edge.name} style={{ marginBottom: "0.75rem" }}>
            <strong>{edge.name}</strong>: {edge.description}
            <button
              onClick={() => toggleEdge(edge)}
              style={{ marginLeft: "0.5rem" }}
            >
              {selectedEdges.some((e) => e.name === edge.name)
                ? "Remove"
                : "Add"}
            </button>
          </li>
        ))}
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

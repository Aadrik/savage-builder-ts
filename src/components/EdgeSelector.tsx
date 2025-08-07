import { useState } from "react";
import { Character, EdgeDefinition, EdgeCategory } from "../types/character";
import { edges } from "../data/edges";
import styles from "./EdgeSelector.module.css";
import InfoCard from "./InfoCard";
import CollapsibleSection from "./CollapsibleSection";
import { useCharacter } from "../hooks/useCharacter";

interface Props {
  character: Character;
  setCharacter: (c: Character) => void;
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

function toggleEdge(
  edge: EdgeDefinition,
  selectedEdges: EdgeDefinition[],
  setSelectedEdges: (newEdges: EdgeDefinition[]) => void
) {
  const isSelected = selectedEdges.some((e) => e.name === edge.name);
  if (isSelected) {
    setSelectedEdges(selectedEdges.filter((e) => e.name !== edge.name));
  } else {
    setSelectedEdges([...selectedEdges, edge]);
  }
}

export default function EdgeSelector({ character, setCharacter }: Props) {
  const selectedEdges = character.edges;
  const { addEdge, removeEdge, validateEdge } = useCharacter(
    character,
    setCharacter
  );

  const [categoryFilter, setCategoryFilter] = useState<EdgeCategory | "All">(
    "All"
  );

  const filteredEdges =
    categoryFilter === "All"
      ? edges
      : edges.filter((edge) => edge.category === categoryFilter);

  return (
    <CollapsibleSection title="Edges">
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

      <div className={styles.cardGrid}>
        {filteredEdges.map((edge) => {
          const { isValid, reasons } = validateEdge(edge);
          const isSelected = selectedEdges.some((e) => e.name === edge.name);

          // Disable button if character does not have enough
          // hindrance points to pay for edge
          const isDisabled = !isSelected && !isValid;

          const handleToggle = () => {
            if (isSelected) {
              removeEdge(edge);
            } else if (isValid) {
              addEdge(edge);
            }
          };
          return (
            <InfoCard
              key={edge.name}
              name={edge.name}
              description={edge.description}
              isSelected={isSelected}
              isDisabled={isDisabled}
              disabledMessage={`Unavailable ${reasons.join(", ")}`}
              onToggle={handleToggle}
            />
          );
        })}
      </div>

      <h3>Selected Edges</h3>
      <ul>
        {selectedEdges.map((edge) => (
          <li key={edge.name}>
            <strong>{edge.name}</strong>: {edge.description}
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  );
}

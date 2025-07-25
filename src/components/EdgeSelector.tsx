import { useState } from "react";
import { Character, EdgeDefinition, EdgeCategory } from "../types/character";
import { toggleEdge, validateEdge } from "../utils/validation";
import { edges } from "../data/edges";
import styles from "./EdgeSelector.module.css";
import InfoCard from "./InfoCard";
import CollapsibleSection from "./CollapsibleSection";

interface Props {
  selectedEdges: EdgeDefinition[];
  setSelectedEdges: (edge: EdgeDefinition[]) => void;
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
  character,
}: Props) {
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
          const { isValid, reasons } = validateEdge(edge, character);
          const isSelected = selectedEdges.some((e) => e.name === edge.name);

          const handleToggle = () => {
            toggleEdge(edge, selectedEdges, setSelectedEdges);
          };
          return (
            <InfoCard
              key={edge.name}
              name={edge.name}
              description={edge.description}
              isSelected={isSelected}
              isDisabled={!isValid}
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

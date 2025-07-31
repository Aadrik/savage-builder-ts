import { DieType } from "../types/character";

const dieOrder = ["d4", "d6", "d8", "d10", "d12"];

interface Props {
  currentDie: DieType;
  onSelectDie: (newDie: DieType) => void;
}

export default function DiePicker({ currentDie, onSelectDie }: Props) {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {dieOrder.map((die) => (
        <button
          key={die}
          style={{
            padding: "6px 12px",
            backgroundColor: currentDie === die ? "#007acc" : "#eee",
            color: currentDie === die ? "#fff" : "#333",
            borderRadius: "4px",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
          onClick={() => onSelectDie(die as DieType)}
        >
          {die}
        </button>
      ))}
    </div>
  );
}

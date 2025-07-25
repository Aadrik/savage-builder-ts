import { DieType } from "../types/character";

interface Props {
  currentDie: DieType;
  onChange: (newDie: DieType) => void;
  minDie?: DieType;
  maxDie?: DieType;
}

const dieOrder: DieType[] = ["d4", "d6", "d8", "d10", "d12"];

export default function DieLevelSlider({
  currentDie,
  onChange,
  minDie = "d4",
  maxDie = "d12",
}: Props) {
  const minIndex = dieOrder.indexOf(minDie);
  const maxIndex = dieOrder.indexOf(maxDie);
  const currentIndex = dieOrder.indexOf(currentDie);

  return (
    <div>
      <input
        type="range"
        min={minIndex}
        max={maxIndex}
        value={currentIndex}
        onChange={(e) => {
          const index = parseInt(e.target.value, 10);
          onChange(dieOrder[index]);
        }}
      />
      <p>
        Current Die: <strong>{currentDie}</strong>
      </p>
    </div>
  );
}

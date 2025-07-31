import { useRef } from "react";
import { DieType } from "../types/character";

interface Props {
  currentDie: DieType;
  onChange: (newDie: DieType, direction: "up" | "down" | "none") => void;
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
  const previousDieRef = useRef<DieType>(currentDie);
  const minIndex = dieOrder.indexOf(minDie);
  const maxIndex = dieOrder.indexOf(maxDie);
  const currentIndex = dieOrder.indexOf(currentDie);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value, 10);
    const newDie = dieOrder[newIndex];

    // Access previous before triggering change
    const previousDie = previousDieRef.current;
    const previousIndex = dieOrder.indexOf(previousDie);

    let direction: "up" | "down" | "none" = "none";
    if (newIndex > previousIndex) direction = "up";
    else if (newIndex < previousIndex) direction = "down";

    previousDieRef.current = newDie;
    onChange(newDie, direction);
  };

  return (
    <div>
      <input
        type="range"
        min={minIndex}
        max={maxIndex}
        value={currentIndex}
        onChange={handleChange}
      />
      <p>
        Current Die: <strong>{currentDie}</strong>
      </p>
    </div>
  );
}

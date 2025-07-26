import { useState } from "react";
import { Attributes, DieType } from "../types/character";

const dieOrder: DieType[] = ["d4", "d6", "d8", "d10", "d12"];

// Returns how much it cost to get to a particular level
// I.E. to get d8 would return 2.
function calculateAttributeCost(die: DieType): number {
  return dieOrder.indexOf(die);
}

function getNextDie(current: DieType): DieType | null {
  const index = dieOrder.indexOf(current);
  return index < dieOrder.length - 1 ? dieOrder[index + 1] : null;
}

function getPreviousDie(current: DieType): DieType | null {
  const index = dieOrder.indexOf(current);
  return index > 0 ? dieOrder[index - 1] : null;
}

export function useCharacter(basePoints: number = 5) {
  const [baseHindrancePoints] = useState(0); // Fixed starting pool
  const [baseEdgePoints] = useState(0);
  const [attributePoints, setAttributePoints] = useState(0); // Earned via hindrances or levels
  const [pointsAvailable, setPointsAvailable] = useState(5);

  const [attributes, setAttributes] = useState<Attributes>({
    Agility: "d4",
    Smarts: "d4",
    Spirit: "d4",
    Strength: "d4",
    Vigor: "d4",
  });

  function spendHindrancePoint(): void {
    updatePointsAvailable(1);
  }

  function updatePointsAvailable(step: number): void {
    setPointsAvailable((currentPoints) => {
      return currentPoints + step;
    });
  }

  function upgradeAttribute(attr: keyof Attributes): void {
    // Check to ensure not going past highest die, d12
    const nextDie = getNextDie(attributes[attr]);
    if (nextDie && pointsAvailable > 0) {
      setAttributes((currentAttributes) => {
        return { ...currentAttributes, [attr]: nextDie };
      });
      updatePointsAvailable(-1);
    }
  }

  function downgradeAttribute(attr: keyof Attributes): void {
    // Check to ensure not going lower than lowest die, d4
    const prevDie = getPreviousDie(attributes[attr]);
    if (prevDie) {
      setAttributes((currentAttributes) => {
        return { ...currentAttributes, [attr]: prevDie };
      });
      updatePointsAvailable(1);
    }
  }

  return {
    attributes,
    pointsAvailable,
    upgradeAttribute,
    downgradeAttribute,
    spendHindrancePoint,
  };
}

import { HindranceDefinition } from "../types/character";

// export function calculateHindrancePoints(
//   hindrances: HindranceDefinition[]
// ): number {
//   return hindrances.reduce(
//     (sum, h) => sum + (h.category === "Major" ? 2 : 1),
//     0
//   );
// }

export function toggleHindrance(
  hindrance: HindranceDefinition,
  selectedHindrances: HindranceDefinition[],
  setSelectedHindrances: (newHindrances: HindranceDefinition[]) => void
) {
  const isSelected = selectedHindrances.some((e) => e.name === hindrance.name);
  if (isSelected) {
    setSelectedHindrances(
      selectedHindrances.filter((e) => e.name !== hindrance.name)
    );
  } else {
    setSelectedHindrances([...selectedHindrances, hindrance]);
  }
}

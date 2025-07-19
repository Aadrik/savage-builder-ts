import { hindrances } from "../data/hindrances";
import { Attributes, Character, HindranceDefinition } from "../types/character";
import { EdgeDefinition } from "../types/character";

export function validateEdge(
  edge: EdgeDefinition,
  character: Character
): {
  isValid: boolean;
  reasons: string[];
} {
  const reasons: string[] = [];

  // Check attribute prerequisites
  if (edge.prerequisites?.attributes) {
    for (const [key, requiredDie] of Object.entries(
      edge.prerequisites.attributes
    )) {
      const currentDie = character.attributes[key as keyof Attributes];
      if (!currentDie || dieRanking(currentDie) < dieRanking(requiredDie)) {
        reasons.push(
          `Requires ${key} to be at least ${requiredDie}, but is ${currentDie}.`
        );
      }
    }
  }

  // Check skill prerequisites
  if (edge.prerequisites?.skills) {
    for (const skill of edge.prerequisites.skills) {
      const characterSkill = character.skills.find(
        (s) => s.name === skill.name
      );
      if (
        !characterSkill ||
        dieRanking(characterSkill.die) < dieRanking(skill.die)
      ) {
        reasons.push(
          `Requires ${skill.name} to be at least ${skill.die}, but is ${
            characterSkill?.die ?? "not present"
          }.`
        );
      }
    }
  }

  // TODO: Add other prerequisites checks (e.g., Hinderances, Rank)

  const isValid = reasons.length === 0;
  return { isValid, reasons };
}

export function dieRanking(die: string): number {
  const rankMap: { [key: string]: number } = {
    d4: 1,
    d6: 2,
    d8: 3,
    d10: 4,
    d12: 5,
  };
  return rankMap[die] ?? 0;
}

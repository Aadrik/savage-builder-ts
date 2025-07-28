import { useState } from "react";
import {
  Attributes,
  Character,
  DieType,
  HindranceDefinition,
  Skill,
} from "../types/character";

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

// TODO: Add validation to only increase/decrease to max/min die value
// Do I want to break this into two different functions one to increase
// and one to decrease?
export function useCharacter(character: Character, setCharacter: any) {
  function updateAttributePoints(character: Character, step: number): void {
    setCharacter((character: Character) => {
      return {
        ...character,
        points: {
          ...character.points,
          attributePoints: character.points.attributePoints + step,
        },
      };
    });
  }

  const updateAttribute = (key: keyof Attributes, value: number) => {
    const nextDie = getNextDie(character.attributes[key]);
    if (nextDie && character.points.attributePoints > 0) {
      setCharacter((character: Character) => {
        return {
          ...character,
          attributes: {
            ...character.attributes,
            [key]: nextDie,
          },
        };
      });
      updateAttributePoints(character, value);
    }
  };

  const addSkill = (skill: Skill) => {
    setCharacter((prev: any) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  // TODO: Add and remove hindrance does not update hindrance points
  function addHindrance(hindrance: HindranceDefinition) {
    setCharacter((character: Character) => {
      return {
        ...character,
        hindrances: [...character.hindrances, hindrance],
      };
    });
    // Add a hindrance point
    const cost = hindrance.category === "Major" ? 2 : 1;
    character.points.hindrancePoints += cost;
  }

  function removeHindrance(hindrance: HindranceDefinition) {
    setCharacter((character: Character) => {
      return {
        ...character,
        hindrances: character.hindrances.filter(
          // Remove the hindrance that matches both name and category. Filter in
          // every other hindrance
          (h) => h.name !== hindrance.name || h.category !== hindrance.category
        ),
      };
    });
    // Remove a hindrance point
    const cost = hindrance.category === "Major" ? 2 : 1;
    character.points.hindrancePoints -= cost;
  }

  function isValidHindrance(hindrance: HindranceDefinition): boolean {
    const newPoints =
      character.points.hindrancePoints +
      (hindrance.category === "Major" ? 2 : 1);
    return newPoints <= 4 ? true : false;
  }

  function hindrancePoints(): number {
    return character.points.hindrancePoints;
  }

  return {
    updateAttribute,
    addSkill,
    addHindrance,
    hindrancePoints,
    removeHindrance,
    isValidHindrance,
  };
}

/*

  const [skills, setSkills] = useState<Skill[]>([
    { name: "Notice", linkedAttribute: "Smarts", die: "d4" },
  ]);

  function spendHindrancePoint(): void {
    updatePointsAvailable(1);
  }

  function calculateSkillCost(skill: keyof Skill): number {
    console.log(skill);
    return 0;
  }

  function upgradeSkill(skill: keyof Skill): void {
    // Calculate cost to upgrade skill. This is based off of linked skill level
    // Check if character has enough skill points to purchase
    // Increase skill level by 1 and reduce skill points by 1
  }

  function updatePointsAvailable(step: number): void {
    setAttributePoints((currentPoints) => {
      return currentPoints + step;
    });
  }

  function upgradeAttribute(attr: keyof Attributes): void {
    // Check to ensure not going past highest die, d12
    const nextDie = getNextDie(attributes[attr]);
    if (nextDie && attributePoints > 0) {
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
    attributePoints,
    upgradeAttribute,
    downgradeAttribute,
    spendHindrancePoint,
    skills,
    setSkills,
    calculateSkillCost,
  };
}

*/

import { useState } from "react";
import {
  Attributes,
  Character,
  DieType,
  HindranceDefinition,
  Skill,
  SkillDefinition,
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

function dieRanking(die: string): number {
  const rankMap: { [key: string]: number } = {
    d4: 1,
    d6: 2,
    d8: 3,
    d10: 4,
    d12: 5,
  };
  return rankMap[die] ?? 0;
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

  function addSkill(skill: SkillDefinition): void {
    const newSkill: Skill = { ...skill, die: "d4" };
    if (canAffordSkill(newSkill)) {
      setCharacter((character: Character) => {
        return {
          ...character,
          skills: [...character.skills, newSkill],
        };
      });
      // Multiply by -1 to spend the point.
      updateSkillPoints(calculateSkillCost(newSkill) * -1);
    }
  }

  // TODO: It is possible to add a skill that will only cost 1 point
  // then drop the linked attribute to be at or below the skill level
  // then return the skill to gain 2 skill points.
  // Need to add some level of control to prevent this.
  const removeSkill = (skill: SkillDefinition) => {
    const skillToRemove: Skill = { ...skill, die: "d4" };
    setCharacter((character: Character) => {
      return {
        ...character,
        skills: character.skills.filter((s) => s.name !== skill.name),
      };
    });
    updateSkillPoints(calculateSkillCost(skillToRemove));
  };

  function canAffordSkill(skill: Skill): boolean {
    return character.points.skillPoints - calculateSkillCost(skill) >= 0;
  }

  // Calculate skill cost. If the skill's die level is less than the
  // characters attribute linked to that skill the skill will cost 1 point else 2.
  function calculateSkillCost(skill: Skill): number {
    const characterAttributeLevel: DieType =
      character.attributes[skill.linkedAttribute];
    return dieRanking(characterAttributeLevel) > dieRanking(skill.die) ? 1 : 2;
  }

  // Updates charaters skill points returns the new amount
  function updateSkillPoints(points: number): number {
    return (character.points.skillPoints += points);
  }

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
    removeSkill,
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

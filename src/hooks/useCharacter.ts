import { useState } from "react";
import {
  addHindranceSVC,
  isValidHindranceSVC,
  removeHindranceSVC,
  hindrancePointsSVC,
  updateAttributeSVC,
  addSkillSVC,
  removeSkillSVC,
} from "../services/characterService";
import {
  Attributes,
  Character,
  DieType,
  HindranceDefinition,
  Skill,
  SkillDefinition,
} from "../types/character";

export function useCharacter(
  character: Character,
  setCharacter: (c: Character) => void
) {
  function updateAttribute(attr: keyof Attributes, newDie: DieType) {
    const updated = updateAttributeSVC(character, attr, newDie);
    setCharacter(updated);
  }

  function hindrancePoints(): number {
    return hindrancePointsSVC(character);
  }

  function isValidHindrance(hindrance: HindranceDefinition): boolean {
    return isValidHindranceSVC(character, hindrance);
  }

  function addHindrance(hindrance: HindranceDefinition): void {
    const updated = addHindranceSVC(character, hindrance);
    setCharacter(updated);
  }

  function removeHindrance(hindrance: HindranceDefinition): void {
    const updated = removeHindranceSVC(character, hindrance);
    setCharacter(updated);
  }

  function addSkill(skill: SkillDefinition): void {
    const updated = addSkillSVC(character, skill);
    setCharacter(updated);
  }

  function removeSkill(skill: SkillDefinition): void {
    const updated = removeSkillSVC(character, skill);
    setCharacter(updated);
  }

  return {
    character,
    addHindrance,
    addSkill,
    removeSkill,
    hindrancePoints,
    isValidHindrance,
    removeHindrance,
    updateAttribute,
  };
}

import { useState } from "react";
import {
  addHindranceSVC,
  isValidHindranceSVC,
  removeHindranceSVC,
  hindrancePointsSVC,
  updateAttributeSVC,
  addSkillSVC,
  removeSkillSVC,
  validateEdgeSVC,
  addEdgeSVC,
  removeEdgeSVC,
  hindrancePointsAwardedSVC,
} from "../services/characterService";
import {
  Attributes,
  Character,
  DieType,
  EdgeDefinition,
  HindranceDefinition,
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

  function hindrancePointsAwarded(): number {
    return hindrancePointsAwardedSVC(character);
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

  function validateEdge(edge: EdgeDefinition): {
    isValid: boolean;
    reasons: string[];
  } {
    return validateEdgeSVC(character, edge);
  }

  function addEdge(edge: EdgeDefinition): void {
    const updated = addEdgeSVC(character, edge);
    setCharacter(updated);
  }

  function removeEdge(edge: EdgeDefinition): void {
    const updated = removeEdgeSVC(character, edge);
    setCharacter(updated);
  }

  return {
    character,
    addEdge,
    addHindrance,
    addSkill,
    hindrancePoints,
    hindrancePointsAwarded,
    isValidHindrance,
    removeEdge,
    removeSkill,
    removeHindrance,
    updateAttribute,
    validateEdge,
  };
}

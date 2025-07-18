import { EdgeDefinition } from "../types/character";

export const edges: EdgeDefinition[] = [
  {
    name: "Brute",
    description: "Allows Athletics to use Strength instead of Agility.",
    prerequisites: {
      attributes: { Strength: "d8" },
    },
  },
  {
    name: "Alertness",
    description: "Character gets +2 Notice rolls.",
  },
  {
    name: "Charismatic",
    description: "Grants a +2 bonus to Persuasion rolls.",
    prerequisites: {
      attributes: { Spirit: "d8" },
    },
  },
];

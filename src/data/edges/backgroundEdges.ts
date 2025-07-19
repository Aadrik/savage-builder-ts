import { EdgeDefinition } from "../../types/character";

export const backgroundEdges: EdgeDefinition[] = [
  {
    name: "Alertness",
    description:
      "Add +2 to Notice rolls to hear, see, or otherwise sense the world around you.",
    category: "Background",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Brave",
    description:
      "+2 to Fear checks; subtract 2 from results on the Fear Table.",
    category: "Background",
    prerequisites: { attributes: { Spirit: "d6" }, other: ["Novice"] },
  },
  {
    name: "Brawny",
    description:
      "Size +1; increase Strength for gear capacity and armor limits.",
    category: "Background",
    prerequisites: {
      attributes: { Strength: "d6", Vigor: "d6" },
      other: ["Novice"],
    },
  },
  {
    name: "Elan",
    description: "+2 when rerolling Traits with Bennies.",
    category: "Background",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Fleet-Footed",
    description: "Increase Pace by +2 and running die one step.",
    category: "Background",
    prerequisites: { attributes: { Agility: "d6" }, other: ["Novice"] },
  },
  {
    name: "Fast Healer",
    description: "Add +2 to natural healing rolls; heal every three days.",
    category: "Background",
    prerequisites: { attributes: { Vigor: "d8" }, other: ["Novice"] },
  },
  {
    name: "Linguist",
    description: "Start play with half Smarts die in languages at d6.",
    category: "Background",
    prerequisites: { attributes: { Smarts: "d6" }, other: ["Novice"] },
  },
  {
    name: "Luck",
    description: "Draw one extra Benny at the start of each game session.",
    category: "Background",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Great Luck",
    description: "Draw two extra Bennies per game session.",
    category: "Background",
    prerequisites: { other: ["Novice", "Luck"] },
  },
  {
    name: "Rich",
    description: "Triple starting funds; $150k annual income if applicable.",
    category: "Background",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Filthy Rich",
    description: "Five times starting funds; $500k annual income.",
    category: "Background",
    prerequisites: { other: ["Novice", "Rich"] },
  },
];

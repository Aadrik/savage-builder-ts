import { EdgeDefinition } from "../../types/character";

export const leadershipEdges: EdgeDefinition[] = [
  {
    name: "Command",
    description:
      'Extras within 5" gain +1 to Spirit rolls to recover from being Shaken and Vigor vs Stunned.',
    category: "Leadership",
    prerequisites: { attributes: { Smarts: "d6" }, other: ["Novice"] },
  },
  {
    name: "Command Presence",
    description: 'Increases Command Range to 10" (20 yards).',
    category: "Leadership",
    prerequisites: { other: ["Seasoned", "Command"] },
  },
  {
    name: "Fervor",
    description: "Extras in range gain +1 to Fighting damage rolls.",
    category: "Leadership",
    prerequisites: {
      attributes: { Spirit: "d8" },
      other: ["Veteran", "Command"],
    },
  },
  {
    name: "Hold the Line!",
    description: "Extras in range gain +1 Toughness.",
    category: "Leadership",
    prerequisites: {
      attributes: { Smarts: "d8" },
      other: ["Seasoned", "Command"],
    },
  },
  {
    name: "Inspire",
    description:
      "Support one Trait for all Extras in range using Battle skill.",
    category: "Leadership",
    prerequisites: { other: ["Seasoned", "Command"] },
  },
  {
    name: "Natural Leader",
    description: "Leadership Edges also apply to allied Wild Cards.",
    category: "Leadership",
    prerequisites: {
      attributes: { Spirit: "d8" },
      other: ["Seasoned", "Command"],
    },
  },
  {
    name: "Tactician",
    description:
      "Draw an extra Action Card to give to an Extra in Command Range.",
    category: "Leadership",
    prerequisites: {
      attributes: { Smarts: "d8" },
      skills: [{ name: "Battle", die: "d6" }],
      other: ["Seasoned", "Command"],
    },
  },
  {
    name: "Master Tactician",
    description:
      "Draw two extra Action Cards to distribute to Extras each round.",
    category: "Leadership",
    prerequisites: { other: ["Veteran", "Tactician"] },
  },
];

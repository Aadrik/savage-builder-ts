import { EdgeDefinition } from "../../types/character";

export const professionalEdges: EdgeDefinition[] = [
  {
    name: "Ace",
    description:
      "Ignore 2 penalty points to Boating, Driving, or Piloting; may spend Bennies to Soak vehicle damage.",
    category: "Professional",
    prerequisites: { attributes: { Agility: "d8" }, other: ["Novice"] },
  },
  {
    name: "Acrobat",
    description:
      "Free reroll on Athletics rolls involving balance, tumbling, or grappling.",
    category: "Professional",
    prerequisites: {
      attributes: { Agility: "d8" },
      skills: [{ name: "Athletics", die: "d8" }],
      other: ["Novice"],
    },
  },
  {
    name: "Combat Acrobat",
    description:
      "Attacks against you suffer -1 if aware, mobile, and unencumbered.",
    category: "Professional",
    prerequisites: { other: ["Seasoned", "Acrobat"] },
  },
  {
    name: "Assassin",
    description:
      "+2 to damage rolls if the foe is Vulnerable or you have The Drop.",
    category: "Professional",
    prerequisites: {
      attributes: { Agility: "d8" },
      skills: [
        { name: "Fighting", die: "d6" },
        { name: "Stealth", die: "d8" },
      ],
      other: ["Novice"],
    },
  },
  {
    name: "Investigator",
    description:
      "+2 to Research and Notice rolls when searching through physical information.",
    category: "Professional",
    prerequisites: {
      attributes: { Smarts: "d8" },
      skills: [{ name: "Research", die: "d8" }],
      other: ["Novice"],
    },
  },
  {
    name: "Jack-of-All-Trades",
    description:
      "Smarts roll grants d4 (or d6 with raise) in a new skill until another is attempted.",
    category: "Professional",
    prerequisites: { attributes: { Smarts: "d10" }, other: ["Novice"] },
  },
  {
    name: "McGyver",
    description:
      "Improvise weapons, explosives, or tools with a Repair roll using common items.",
    category: "Professional",
    prerequisites: {
      attributes: { Smarts: "d6" },
      skills: [
        { name: "Notice", die: "d8" },
        { name: "Repair", die: "d6" },
      ],
      other: ["Novice"],
    },
  },
  {
    name: "Mr. Fix It",
    description: "+2 to Repair rolls; halve time on raises.",
    category: "Professional",
    prerequisites: {
      skills: [{ name: "Repair", die: "d8" }],
      other: ["Novice"],
    },
  },
  {
    name: "Scholar",
    description:
      "+2 to one Smarts-based knowledge skill (may take multiple times).",
    category: "Professional",
    prerequisites: {
      skills: [{ name: "Research", die: "d8" }],
      other: ["Novice"],
    },
  },
  {
    name: "Soldier",
    description:
      "Treat Strength as higher for gear limits; free reroll to resist environmental hazards.",
    category: "Professional",
    prerequisites: {
      attributes: { Strength: "d6", Vigor: "d6" },
      other: ["Novice"],
    },
  },
  {
    name: "Thief",
    description:
      "Add +1 to climbing, Stealth in urban areas, and all Thievery rolls.",
    category: "Professional",
    prerequisites: {
      attributes: { Agility: "d8" },
      skills: [
        { name: "Stealth", die: "d6" },
        { name: "Thievery", die: "d6" },
      ],
      other: ["Novice"],
    },
  },
  {
    name: "Woodsman",
    description: "+2 to Survival and Stealth rolls in wilderness settings.",
    category: "Professional",
    prerequisites: {
      attributes: { Spirit: "d6" },
      skills: [{ name: "Survival", die: "d8" }],
      other: ["Novice"],
    },
  },
];

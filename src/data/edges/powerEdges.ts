import { EdgeDefinition } from "../../types/character";

export const powerEdges: EdgeDefinition[] = [
  {
    name: "Arcane Background",
    description: "Gain access to supernatural abilities and powers.",
    category: "Power",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Artificer",
    description: "Create Arcane Devices and give them to allies.",
    category: "Power",
    prerequisites: { other: ["Seasoned", "Arcane Background (Any)"] },
  },
  {
    name: "Channeling",
    description: "Reduce Power Point cost by 1 on a raise.",
    category: "Power",
    prerequisites: { other: ["Seasoned", "Arcane Background (Any)"] },
  },
  {
    name: "Concentration",
    description: "Double base Duration of non-Instant powers.",
    category: "Power",
    prerequisites: { other: ["Seasoned", "Arcane Background (Any)"] },
  },
  {
    name: "Extra Effort",
    description: "Boost Focus totals by +1 or +2 for 1 or 3 Power Points.",
    category: "Power",
    prerequisites: {
      skills: [{ name: "Focus", die: "d6" }],
      other: ["Seasoned", "Arcane Background (Gifted)"],
    },
  },
  {
    name: "Gadgeteer",
    description: "Create temporary Weird Science gadgets on the fly.",
    category: "Power",
    prerequisites: {
      skills: [{ name: "Weird Science", die: "d6" }],
      other: ["Seasoned", "Arcane Background (Weird Science)"],
    },
  },
  {
    name: "Holy/Unholy Warrior",
    description: "Add +1 to final Soak roll per Power Point spent (max +4).",
    category: "Power",
    prerequisites: {
      skills: [{ name: "Faith", die: "d6" }],
      other: ["Seasoned", "Arcane Background (Miracles)"],
    },
  },
  {
    name: "Mentalist",
    description: "Add +2 to opposed Psionics rolls.",
    category: "Power",
    prerequisites: {
      skills: [{ name: "Psionics", die: "d6" }],
      other: ["Seasoned", "Arcane Background (Psionics)"],
    },
  },
  {
    name: "New Powers",
    description:
      "Learn two new powers or add a new Trapping to an existing one.",
    category: "Power",
    prerequisites: { other: ["Novice", "Arcane Background (Any)"] },
  },
  {
    name: "Power Points",
    description: "Gain 5 additional Power Points.",
    category: "Power",
    prerequisites: { other: ["Novice", "Arcane Background (Any)"] },
  },
  {
    name: "Power Surge",
    description: "Recover 10 Power Points when Action Card is a Joker.",
    category: "Power",
    prerequisites: {
      skills: [{ name: "arcane skill", die: "d8" }],
      other: ["Wild Card", "Novice", "Arcane Background (Any)"],
    },
  },
  {
    name: "Rapid Recharge",
    description: "Power Points recharge at 10 per hour instead of 5.",
    category: "Power",
    prerequisites: {
      attributes: { Spirit: "d6" },
      other: ["Seasoned", "Arcane Background (Any)"],
    },
  },
  {
    name: "Improved Rapid Recharge",
    description: "Power Points recharge at 20 per hour.",
    category: "Power",
    prerequisites: { other: ["Veteran", "Rapid Recharge"] },
  },
  {
    name: "Soul Drain",
    description: "Convert Fatigue into Power Points up to 10 (Exhaustion max).",
    category: "Power",
    prerequisites: {
      skills: [{ name: "arcane skill", die: "d10" }],
      other: ["Seasoned", "Arcane Background (Any)"],
    },
  },
  {
    name: "Wizard",
    description: "Change spell Trapping by spending 1 extra Power Point.",
    category: "Power",
    prerequisites: {
      skills: [{ name: "Spellcasting", die: "d6" }],
      other: ["Seasoned", "Arcane Background (Magic)"],
    },
  },
];

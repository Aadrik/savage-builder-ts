import { EdgeDefinition } from "../../types/character";

export const legendaryEdges: EdgeDefinition[] = [
  {
    name: "Followers",
    description:
      "Gain 5 loyal followers; replaced over time if lost. Use Soldier profile or customize.",
    category: "Legendary",
    prerequisites: { other: ["Wild Card", "Legendary"] },
  },
  {
    name: "Professional",
    description:
      "Increase selected Trait and its limit one step (e.g. d12+1 to d12+2).",
    category: "Legendary",
    prerequisites: { other: ["Legendary"] },
  },
  {
    name: "Expert",
    description: "Increase selected Trait and its limit another step.",
    category: "Legendary",
    prerequisites: { other: ["Legendary", "Professional"] },
  },
  {
    name: "Master",
    description:
      "Wild Die increases to d10 when rolling selected Expert Trait.",
    category: "Legendary",
    prerequisites: { other: ["Wild Card", "Legendary", "Expert"] },
  },
  {
    name: "Sidekick",
    description:
      "Gain a Novice Rank Wild Card companion; acts as an ally with Bennies and advancement.",
    category: "Legendary",
    prerequisites: { other: ["Wild Card", "Legendary"] },
  },
  {
    name: "Tough as Nails",
    description:
      "Can take four Wounds before being Incapacitated (penalty still max -3).",
    category: "Legendary",
    prerequisites: { attributes: { Vigor: "d8" }, other: ["Legendary"] },
  },
  {
    name: "Tougher than Nails",
    description:
      "Can take five Wounds before being Incapacitated (penalty still max -3).",
    category: "Legendary",
    prerequisites: {
      attributes: { Vigor: "d12" },
      other: ["Legendary", "Tough as Nails"],
    },
  },
  {
    name: "Weapon Master",
    description: "+1 Parry and increase Fighting bonus damage die to d8.",
    category: "Legendary",
    prerequisites: {
      skills: [{ name: "Fighting", die: "d12" }],
      other: ["Legendary"],
    },
  },
  {
    name: "Master of Arms",
    description:
      "+1 additional Parry; Fighting bonus damage die increases to d10.",
    category: "Legendary",
    prerequisites: { other: ["Legendary", "Weapon Master"] },
  },
];

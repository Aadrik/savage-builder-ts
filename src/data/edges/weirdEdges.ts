import { EdgeDefinition } from "../../types/character";

export const weirdEdges: EdgeDefinition[] = [
  {
    name: "Beast Bond",
    description:
      "Spend your own Bennies for animals under your control, including mounts and familiars.",
    category: "Weird",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Beast Master",
    description:
      "Animals won’t attack unless provoked; gain a loyal Size 0 pet Extra.",
    category: "Weird",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Champion",
    description: "+2 damage against supernaturally evil (or good) creatures.",
    category: "Weird",
    prerequisites: {
      attributes: { Spirit: "d8" },
      skills: [{ name: "Fighting", die: "d6" }],
      other: ["Novice"],
    },
  },
  {
    name: "Chi",
    description:
      "Gain 1 Chi Point per encounter; spend to reroll attacks, force enemy rerolls, or add damage.",
    category: "Weird",
    prerequisites: { other: ["Veteran", "Martial Warrior"] },
  },
  {
    name: "Danger Sense",
    description: "Add +2 to Notice rolls for Surprise and hazard detection.",
    category: "Weird",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Healer",
    description: "+2 to all Healing rolls, natural and magical.",
    category: "Weird",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Liquid Courage",
    description:
      "After drinking, gain +1 Vigor die and ignore one Wound penalty; suffer penalties and Fatigue later.",
    category: "Weird",
    prerequisites: { attributes: { Vigor: "d8" }, other: ["Novice"] },
  },
  {
    name: "Scavenger",
    description: "Once per encounter, find or recall a useful item or ammo.",
    category: "Weird",
    prerequisites: { other: ["Novice", "Luck"] },
  },
];

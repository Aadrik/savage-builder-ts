import { EdgeDefinition } from "../../types/character";

export const combatEdges: EdgeDefinition[] = [
  {
    name: "Berserk",
    description:
      "Enter berserk rage after damage; gain Strength and Toughness boosts with Wild Attacks.",
    category: "Combat",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Brute",
    description:
      "Links Athletics to Strength instead of Agility; improves thrown range and resistance rolls.",
    category: "Combat",
    prerequisites: {
      attributes: { Strength: "d6", Vigor: "d6" },
      other: ["Novice"],
    },
  },
  {
    name: "Quick",
    description: "Redraw Action Card if it’s Five or lower.",
    category: "Combat",
    prerequisites: { attributes: { Agility: "d8" }, other: ["Novice"] },
  },
  {
    name: "Block",
    description: "Gain +1 Parry; reduce Gang Up bonus by one.",
    category: "Combat",
    prerequisites: {
      skills: [{ name: "Fighting", die: "d8" }],
      other: ["Seasoned"],
    },
  },
  {
    name: "Improved Block",
    description: "Parry bonus +2; reduce Gang Up bonus by 2.",
    category: "Combat",
    prerequisites: { other: ["Veteran", "Block"] },
  },
  {
    name: "Brawler",
    description: "+1 Toughness; unarmed attacks deal Strength + d4.",
    category: "Combat",
    prerequisites: {
      attributes: { Strength: "d8", Vigor: "d8" },
      other: ["Novice"],
    },
  },
  {
    name: "Bruiser",
    description: "+1 Toughness and improve unarmed damage die.",
    category: "Combat",
    prerequisites: { other: ["Seasoned", "Brawler"] },
  },
  {
    name: "Combat Reflexes",
    description: "+2 to recover from Shaken or Stunned.",
    category: "Combat",
    prerequisites: { other: ["Seasoned"] },
  },
  {
    name: "Counterattack",
    description:
      "Free attack against one failed Fighting attack against you per round.",
    category: "Combat",
    prerequisites: {
      skills: [{ name: "Fighting", die: "d8" }],
      other: ["Seasoned"],
    },
  },
  {
    name: "Improved Counterattack",
    description: "Up to three free attacks per round against failed attacks.",
    category: "Combat",
    prerequisites: { other: ["Veteran", "Counterattack"] },
  },
  {
    name: "Dead Shot",
    description:
      "Joker doubles damage on first Athletics or Shooting hit this round.",
    category: "Combat",
    prerequisites: {
      skills: [{ name: "Shooting", die: "d8" }],
      other: ["Wild Card", "Novice"],
    },
  },
  {
    name: "Dodge",
    description: "Subtract 2 from ranged attacks against you.",
    category: "Combat",
    prerequisites: { attributes: { Agility: "d8" }, other: ["Seasoned"] },
  },
  {
    name: "Improved Dodge",
    description: "+2 when Evading area effects.",
    category: "Combat",
    prerequisites: { other: ["Seasoned", "Dodge"] },
  },
  {
    name: "Double Tap",
    description: "Add +1 to Shooting rolls and damage with two-round bursts.",
    category: "Combat",
    prerequisites: {
      skills: [{ name: "Shooting", die: "d6" }],
      other: ["Seasoned"],
    },
  },
  {
    name: "Extraction",
    description: "Ignore one free attack when disengaging from melee.",
    category: "Combat",
    prerequisites: { attributes: { Agility: "d8" }, other: ["Novice"] },
  },
  {
    name: "Improved Extraction",
    description: "Ignore up to three free attacks when disengaging.",
    category: "Combat",
    prerequisites: { other: ["Seasoned", "Extraction"] },
  },
  {
    name: "Feint",
    description:
      "When performing a Test with Fighting, target resists with Smarts instead of Agility.",
    category: "Combat",
    prerequisites: {
      skills: [{ name: "Fighting", die: "d8" }],
      other: ["Novice"],
    },
  },
  {
    name: "First Strike",
    description: "Free attack against one foe who moves into Reach.",
    category: "Combat",
    prerequisites: { attributes: { Agility: "d8" }, other: ["Novice"] },
  },
  {
    name: "Improved First Strike",
    description: "Free attack against up to three foes entering Reach.",
    category: "Combat",
    prerequisites: { other: ["Heroic", "First Strike"] },
  },
  {
    name: "Frenzy",
    description: "Roll two Fighting dice with one attack per round.",
    category: "Combat",
    prerequisites: {
      skills: [{ name: "Fighting", die: "d8" }],
      other: ["Seasoned"],
    },
  },
  {
    name: "Improved Frenzy",
    description: "Roll three Fighting dice with Frenzy attacks.",
    category: "Combat",
    prerequisites: { other: ["Veteran", "Frenzy"] },
  },
  {
    name: "Giant Killer",
    description: "Add +1d6 damage against creatures 3+ Sizes larger.",
    category: "Combat",
    prerequisites: { other: ["Veteran"] },
  },
  {
    name: "Iron Jaw",
    description: "+2 to Soak rolls and Vigor vs Knockout Blows.",
    category: "Combat",
    prerequisites: { attributes: { Vigor: "d8" }, other: ["Novice"] },
  },
  {
    name: "Level Headed",
    description: "Draw an additional Action Card; choose which to keep.",
    category: "Combat",
    prerequisites: { attributes: { Smarts: "d8" }, other: ["Seasoned"] },
  },
  {
    name: "Improved Level Headed",
    description: "Draw two extra Action Cards; choose which to keep.",
    category: "Combat",
    prerequisites: { other: ["Seasoned", "Level Headed"] },
  },
];

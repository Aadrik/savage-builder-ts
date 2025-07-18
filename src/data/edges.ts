import { EdgeDefinition } from "../types/character";

export const edges: EdgeDefinition[] = [
  {
    name: "Alertness",
    description:
      "Add +2 to Notice rolls to hear, see, or sense the environment.",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Ambidextrous",
    description:
      "Ignores Off-Hand penalty; may stack Parry bonuses with two weapons.",
    prerequisites: { attributes: { Agility: "d8" }, other: ["Novice"] },
  },
  {
    name: "Arcane Resistance",
    description:
      "Enemies suffer -2 to arcane rolls and arcane damage is reduced by 2.",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Improved Arcane Resistance",
    description: "Arcane penalty increased to -4.",
    prerequisites: { other: ["Novice", "Arcane Resistance"] },
  },
  {
    name: "Aristocrat",
    description:
      "+2 Persuasion when Networking with elite contacts; +2 Common Knowledge on etiquette, heraldry, gossip.",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Attractive",
    description:
      "+1 to Performance and Persuasion rolls if target is attracted to you.",
    prerequisites: { attributes: { Vigor: "d6" }, other: ["Novice"] },
  },
  {
    name: "Very Attractive",
    description:
      "+2 to Performance and Persuasion rolls if target is attracted.",
    prerequisites: { other: ["Novice", "Attractive"] },
  },
  {
    name: "Berserk",
    description:
      "Gains Strength, Wild Attack, +2 Toughness when enraged; risky on Critical Failures.",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Brave",
    description: "+2 to Fear checks, subtract 2 from Fear Table results.",
    prerequisites: { attributes: { Spirit: "d6" }, other: ["Novice"] },
  },
  {
    name: "Brawny",
    description:
      "Size +1; Strength acts one die higher for Encumbrance and gear strength.",
    prerequisites: {
      attributes: { Strength: "d6", Vigor: "d6" },
      other: ["Novice"],
    },
  },
  {
    name: "Brute",
    description:
      "Links Athletics to Strength; increased thrown range and resistance options.",
    prerequisites: {
      attributes: { Strength: "d6", Vigor: "d6" },
      other: ["Novice"],
    },
  },
  {
    name: "Charismatic",
    description: "One free reroll on Persuasion rolls.",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Elan",
    description:
      "+2 bonus when rerolling Traits with Bennies (not damage or Soak).",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Fame",
    description:
      "Double performance pay; +1 Persuasion vs friendly fans; recognizable and often followed.",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Famous",
    description:
      "Performs for 5x pay; +2 Persuasion vs fans; widely recognized.",
    prerequisites: { other: ["Seasoned", "Fame"] },
  },
  {
    name: "Fast Healer",
    description: "+2 Vigor for natural healing; checks every 3 days.",
    prerequisites: { attributes: { Vigor: "d8" }, other: ["Novice"] },
  },
  {
    name: "Fleet-Footed",
    description: "Pace +2; running die increases one step.",
    prerequisites: { attributes: { Agility: "d6" }, other: ["Novice"] },
  },
  {
    name: "Linguist",
    description: "Start play with half Smarts die in Language skills at d6.",
    prerequisites: { attributes: { Smarts: "d6" }, other: ["Novice"] },
  },
  {
    name: "Luck",
    description: "Draw one extra Benny per game session.",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Great Luck",
    description: "Draw two extra Bennies per session.",
    prerequisites: { other: ["Novice", "Luck"] },
  },
  {
    name: "Quick",
    description:
      "If Action Card is 5 or lower, may redraw until higher than Five.",
    prerequisites: { attributes: { Agility: "d8" }, other: ["Novice"] },
  },
  {
    name: "Rich",
    description:
      "Triple starting funds; annual income of ~$150k if applicable.",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Filthy Rich",
    description: "Five times starting funds; annual income of ~$500k.",
    prerequisites: { other: ["Novice", "Rich"] },
  },
  {
    name: "Command",
    description:
      "Allied Extras in Command Range add +1 to Spirit rolls vs Shaken and Vigor vs Stunned.",
    prerequisites: { attributes: { Smarts: "d6" }, other: ["Novice"] },
  },
  {
    name: "Arcane Background",
    description: "Grants access to supernatural abilities and Powers.",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Improvisational Fighter",
    description: "Ignore -2 penalty for improvised weapons.",
    prerequisites: { attributes: { Smarts: "d6" }, other: ["Seasoned"] },
  },
  {
    name: "Hard to Kill",
    description: "Ignore Wound penalties on Vigor rolls to avoid Bleeding Out.",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Harder to Kill",
    description:
      "On death roll, even result means survival via Incapacitation.",
    prerequisites: { other: ["Veteran", "Hard to Kill"] },
  },
  {
    name: "Champion",
    description: "+2 damage vs supernaturally evil (or good) creatures.",
    prerequisites: {
      attributes: { Spirit: "d8" },
      skills: [{ name: "Fighting", die: "d6" }],
      other: ["Novice"],
    },
  },
  {
    name: "Danger Sense",
    description:
      "+2 Notice for Surprise checks; roll Notice to avoid traps/sneak attacks.",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Healer",
    description: "+2 to all Healing rolls (natural or magical).",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Liquid Courage",
    description:
      "After drinking: Vigor +1 die, Toughness +1, ignore 1 Wound penalty; penalty to Smarts, Agility & linked skills.",
    prerequisites: { attributes: { Vigor: "d8" }, other: ["Novice"] },
  },
  {
    name: "Scavenger",
    description: "Once per encounter, discover useful item or ammunition.",
    prerequisites: { other: ["Novice", "Luck"] },
  },
  {
    name: "Jack-of-All-Trades",
    description: "Smarts roll grants d4 or d6 in a skill temporarily.",
    prerequisites: { attributes: { Smarts: "d10" }, other: ["Novice"] },
  },
];

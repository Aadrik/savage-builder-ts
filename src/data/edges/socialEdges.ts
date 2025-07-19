import { EdgeDefinition } from "../../types/character";

export const socialEdges: EdgeDefinition[] = [
  {
    name: "Aristocrat",
    description:
      "+2 Persuasion when Networking with elite contacts; +2 Common Knowledge on etiquette, heraldry, gossip.",
    category: "Social",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Attractive",
    description:
      "+1 to Performance and Persuasion rolls if the target is attracted to you.",
    category: "Social",
    prerequisites: { attributes: { Vigor: "d6" }, other: ["Novice"] },
  },
  {
    name: "Very Attractive",
    description:
      "+2 to Performance and Persuasion rolls if the target is attracted.",
    category: "Social",
    prerequisites: { other: ["Novice", "Attractive"] },
  },
  {
    name: "Bolster",
    description:
      "After a successful Test, remove Distracted or Vulnerable from one ally.",
    category: "Social",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Common Bond",
    description: "Freely give your Bennies to allies you can communicate with.",
    category: "Social",
    prerequisites: {
      attributes: { Spirit: "d8" },
      other: ["Wild Card", "Novice"],
    },
  },
  {
    name: "Connections",
    description: "Call in favors once per session from a faction or contact.",
    category: "Social",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Humiliate",
    description: "Gain a free reroll on Taunt Tests.",
    category: "Social",
    prerequisites: {
      skills: [{ name: "Taunt", die: "d8" }],
      other: ["Novice"],
    },
  },
  {
    name: "Menacing",
    description:
      "Add +2 to Intimidation if you have Bloodthirsty, Mean, Ruthless, or Ugly.",
    category: "Social",
    prerequisites: { other: ["Novice"] },
  },
  {
    name: "Provoke",
    description:
      "Force enemy to focus on you after a successful Test with a raise.",
    category: "Social",
    prerequisites: {
      skills: [{ name: "Taunt", die: "d6" }],
      other: ["Novice"],
    },
  },
  {
    name: "Rabble-Rouser",
    description: "Make Tests against all foes in a Medium Blast Template.",
    category: "Social",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Seasoned"] },
  },
  {
    name: "Reliable",
    description: "Free reroll on Support rolls.",
    category: "Social",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Retort",
    description:
      "Distract enemy if you get a raise when resisting Intimidation or Taunt Test.",
    category: "Social",
    prerequisites: {
      skills: [{ name: "Taunt", die: "d6" }],
      other: ["Novice"],
    },
  },
  {
    name: "Streetwise",
    description:
      "+2 to Intimidation or Persuasion rolls with shady contacts; +2 to related Common Knowledge.",
    category: "Social",
    prerequisites: { attributes: { Smarts: "d6" }, other: ["Novice"] },
  },
  {
    name: "Strong Willed",
    description: "+2 to resist Tests using Smarts or Spirit.",
    category: "Social",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Iron Will",
    description: "Add Strong Willed bonus to resist powers and negate effects.",
    category: "Social",
    prerequisites: { other: ["Seasoned", "Brave", "Strong Willed"] },
  },
  {
    name: "Work the Room",
    description:
      "Support an additional ally with a second skill die when using Persuasion or Performance.",
    category: "Social",
    prerequisites: { attributes: { Spirit: "d8" }, other: ["Novice"] },
  },
  {
    name: "Work the Crowd",
    description:
      "Support two additional allies with a third skill die when using Persuasion or Performance.",
    category: "Social",
    prerequisites: { other: ["Seasoned", "Work the Room"] },
  },
];

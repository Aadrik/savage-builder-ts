import { HindranceDefinition } from "../../types/character";

export const socialHindrances: HindranceDefinition[] = [
  {
    name: "Arrogant",
    description:
      "Seeks dominance, flaunts superiority, targets the strongest opponents in battle.",
    category: "Major",
    tags: ["Social"],
  },
  {
    name: "Big Mouth",
    description:
      "Frequently reveals secrets, spoils plans, and blurts critical information.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Bloodthirsty",
    description:
      "Takes no prisoners and shows little mercy; may strain relations with allies or authorities.",
    category: "Major",
    tags: ["Social"],
  },
  {
    name: "Heroic",
    description:
      "Always helps those in need, even when inconvenient or dangerous.",
    category: "Major",
    tags: ["Social", "Roleplay"],
  },
  {
    name: "Mean",
    description: "Unfriendly and ungracious; -1 to Persuasion rolls.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Mild Mannered",
    description:
      "Soft appearance makes intimidation difficult; -2 to Intimidation rolls.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Mute",
    description:
      "Cannot speak; communicates only via writing, signs, or visual cues.",
    category: "Major",
    tags: ["Social", "Physical"],
  },
  {
    name: "Obligation",
    description:
      "Requires time-consuming commitment each week; limits availability.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Obligation",
    description:
      "Major version involves 40+ weekly hours; may impose regular or daily interruptions.",
    category: "Major",
    tags: ["Social"],
  },
  {
    name: "Outsider",
    description:
      "Unfamiliar to locals; -2 Persuasion penalty. Major version lacks legal rights.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Outsider",
    description:
      "Major: cultural alienation; faces systemic bias or lack of civil protections.",
    category: "Major",
    tags: ["Social"],
  },
  {
    name: "Pacifist",
    description:
      "Minor: avoids unnecessary violence. Major: won’t harm sapient, living beings.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Pacifist",
    description:
      "Major: avoids permanent harm to intelligent living foes; uses nonlethal force only.",
    category: "Major",
    tags: ["Social"],
  },
  {
    name: "Ruthless",
    description:
      "Minor: willing to hurt to achieve goals. Major: harms anyone who stands in their way.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Ruthless",
    description:
      "Major: stops at nothing; will harm innocents to accomplish objectives.",
    category: "Major",
    tags: ["Social"],
  },
  {
    name: "Ugly",
    description:
      "Minor: -1 to Persuasion rolls due to unpleasant appearance. Major: -2 penalty.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Ugly",
    description:
      "Major: prominent unattractiveness impacts social interactions (-2 Persuasion).",
    category: "Major",
    tags: ["Social"],
  },
  {
    name: "Vengeful",
    description:
      "Minor: seeks justice through legal or patient means. Major: unstoppable pursuit of revenge.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Vengeful",
    description:
      "Major: escalates actions until satisfaction is achieved, no matter the cost.",
    category: "Major",
    tags: ["Social"],
  },
  {
    name: "Wanted",
    description:
      "Minor: low-level crime, infrequent enforcement. Major: serious offense, active pursuit.",
    category: "Minor",
    tags: ["Social"],
  },
  {
    name: "Wanted",
    description:
      "Major: known criminal; hunted by authorities or bounty hunters.",
    category: "Major",
    tags: ["Social"],
  },
];

import { HindranceDefinition } from "../../types/character";

export const physicalHindrances: HindranceDefinition[] = [
  {
    name: "All Thumbs",
    description:
      "-2 to use mechanical/electrical devices. Critical failure may break item.",
    category: "Minor",
    tags: ["Physical"],
  },
  {
    name: "Anemic",
    description:
      "-2 to resist Fatigue from sickness, disease, and environmental effects.",
    category: "Minor",
    tags: ["Physical"],
  },
  {
    name: "Bad Eyes",
    description:
      "Minor: -1 to vision-based Trait rolls. Major: -2 and potential Vulnerable when glasses are lost.",
    category: "Minor",
    tags: ["Physical"],
  },
  {
    name: "Bad Eyes",
    description:
      "Major: -2 to vision-based Trait rolls. Vulnerable if glasses are lost in combat.",
    category: "Major",
    tags: ["Physical"],
  },
  {
    name: "Blind",
    description:
      "-6 to all tasks requiring sight. Gains one free Edge to compensate.",
    category: "Major",
    tags: ["Physical"],
  },
  {
    name: "Clumsy",
    description: "-2 to Athletics and Stealth rolls due to poor coordination.",
    category: "Major",
    tags: ["Physical"],
  },
  {
    name: "Hard of Hearing",
    description:
      "Minor: -4 to hear-based Notice rolls. Major: completely deaf.",
    category: "Minor",
    tags: ["Physical"],
  },
  {
    name: "Hard of Hearing",
    description: "Major: automatically fail hear-based Notice rolls.",
    category: "Major",
    tags: ["Physical"],
  },
  {
    name: "Lame",
    description: "Pace reduced to 3. Cannot run.",
    category: "Major",
    tags: ["Physical"],
  },
  {
    name: "Obese",
    description:
      "Size +1 and Toughness bonus; -1 Pace, weaker Strength for gear use.",
    category: "Minor",
    tags: ["Physical"],
  },
  {
    name: "One Arm",
    description: "-4 penalty to tasks requiring two hands.",
    category: "Major",
    tags: ["Physical"],
  },
  {
    name: "One Eye",
    description: "-2 to Trait rolls relying on vision beyond 10 yards.",
    category: "Major",
    tags: ["Physical"],
  },
  {
    name: "Slow",
    description:
      "Minor: -1 Pace and smaller running die. Major: -2 Pace, Athletics penalties.",
    category: "Minor",
    tags: ["Physical"],
  },
  {
    name: "Slow",
    description: "Major: -2 Pace, -2 Athletics and resistance rolls.",
    category: "Major",
    tags: ["Physical"],
  },
  {
    name: "Small",
    description: "Size -1; reduces Toughness.",
    category: "Minor",
    tags: ["Physical"],
  },
  {
    name: "Young",
    description:
      "Major: Reduced stats, Small Hindrance, two bonus Bennies per session.",
    category: "Major",
    tags: ["Physical"],
  },
];

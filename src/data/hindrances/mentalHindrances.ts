import { HindranceDefinition } from "../../types/character";

export const mentalHindrances: HindranceDefinition[] = [
  {
    name: "Clueless",
    description:
      "-1 to Common Knowledge and Notice rolls due to poor situational awareness.",
    category: "Major",
    tags: ["Mental"],
  },
  {
    name: "Delusional",
    description:
      "Minor: harmless or private belief. Major: frequently expressed and potentially dangerous.",
    category: "Minor",
    tags: ["Mental"],
  },
  {
    name: "Delusional",
    description:
      "Major: speaks and acts on strange beliefs that can lead to danger.",
    category: "Major",
    tags: ["Mental"],
  },
  {
    name: "Doubting Thomas",
    description:
      "Skeptic of supernatural; attempts rationalizations even in the face of evidence.",
    category: "Minor",
    tags: ["Mental"],
  },
  {
    name: "Impulsive",
    description: "Rarely thinks things through; rushes into action.",
    category: "Major",
    tags: ["Mental"],
  },
  {
    name: "Jealous",
    description:
      "Minor: focused envy or insecurity. Major: widespread envy and sabotage.",
    category: "Minor",
    tags: ["Mental"],
  },
  {
    name: "Jealous",
    description: "Major: consistently undermines others due to envy.",
    category: "Major",
    tags: ["Mental"],
  },
  {
    name: "Phobia",
    description:
      "Minor: -1 to Trait rolls in presence of irrational fear. Major: -2 penalty.",
    category: "Minor",
    tags: ["Mental"],
  },
  {
    name: "Phobia",
    description: "Major: significant penalty when exposed to irrational fear.",
    category: "Major",
    tags: ["Mental"],
  },
  {
    name: "Suspicious",
    description:
      "Minor: distrustful and requires proof. Major: -2 to Support rolls from others.",
    category: "Minor",
    tags: ["Mental"],
  },
  {
    name: "Suspicious",
    description: "Major: deep paranoia; Support rolls suffer -2.",
    category: "Major",
    tags: ["Mental"],
  },
  {
    name: "Thin Skinned",
    description: "Minor: -2 to resist Taunt attacks. Major: -4 penalty.",
    category: "Minor",
    tags: ["Mental"],
  },
  {
    name: "Thin Skinned",
    description:
      "Major: extreme sensitivity; heavily penalized against verbal attacks.",
    category: "Major",
    tags: ["Mental"],
  },
  {
    name: "Stubborn",
    description: "Unwilling to admit fault; rationalizes poor choices.",
    category: "Minor",
    tags: ["Mental"],
  },
];

export type DieType = "d4" | "d6" | "d8" | "d10" | "d12";

export interface Attributes {
  Agility: DieType;
  Smarts: DieType;
  Spirit: DieType;
  Strength: DieType;
  Vigor: DieType;
}

export interface Skill {
  name: string;
  linkedAttribute: keyof Attributes;
  die: DieType;
}

export interface Character {
  name: string;
  attributes: Attributes;
  skills: Skill[];
}

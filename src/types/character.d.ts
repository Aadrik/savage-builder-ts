export type DieType = "d4" | "d6" | "d8" | "d10" | "d12";

export interface Attributes {
  Agility: number;
  Smarts: number;
  Spirit: number;
  Strength: number;
  Vigor: number;
}

export interface Character {
  name: string;
  attributes: Attributes;
}

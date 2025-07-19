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

export interface SkillDefinition {
  name: string;
  linkedAttribute: keyof Attributes;
}

export type EdgeCategory =
  | "Background"
  | "Combat"
  | "Social"
  | "Leadership"
  | "Power"
  | "Professional"
  | "Weird"
  | "Legendary";

export interface EdgeDefinition {
  name: string;
  description: string;
  category: EdgeCategory;
  prerequisites?: {
    attributes?: Partial<Attributes>;
    skills?: { name: string; die: DieType }[];
    other?: string[]; // Hinderances, Rank, etc...
  };
}

export interface Character {
  name: string;
  attributes: Attributes;
  skills: Skill[];
  edges: EdgeDefinition[];
}

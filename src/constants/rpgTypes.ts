export type Character = {
  id: number;
  name: string;
  image: string;
  level: number;
  stats: CharacterStat;
  description: string;
  personalLog: Log[];
  gear: Gear;
  inventory: Inventory;
  skills: Skill[];
  health: StatusBar;
  stamina: StatusBar;
  mana: StatusBar;
};

export type CharacterStat = {
  // combat stat
  strength: number;
  magicPower: number;
  agility: number;
  defense: number;
  magicDefense: number;

  // social stat
  charisma: number;
  intelligence: number;
  luck: number;
};

export type Log = {
  title: string;
  date: string;
  content: string;
};

export type Gear = {
  head: Equipment | null;
  torso: Equipment | null;
  legs: Equipment | null;
  feet: Equipment | null;
  hands: Equipment | null;
  accessory1: Equipment | null;
  accessory2: Equipment | null;
};

export type Inventory = {
  equipment: Equipment[];
  consumables: Consumable[];
  keyItems: KeyItem[];
  gold: number;
};

export type Equipment = {
  id: number;
  name: string;
  description: string;
  type: string;
};

export type Consumable = {
  id: number;
  name: string;
  description: string;
};

export type KeyItem = {
  id: number;
  name: string;
  description: string;
};

export type Skill = {
  id: number;
  name: string;
  description: string;
  type: string;
  manaCost: number;
  staminaCost: number;
};

export type StatusBar = {
  value: number;
  max: number;
};

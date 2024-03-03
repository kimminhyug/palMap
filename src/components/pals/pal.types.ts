export interface IPalInfo {
  asset: string;
  aura: IAura;
  description: string;
  drops: string[];
  genus: string;
  id: number;
  image: string;
  imageWiki: string;
  key: string;
  maps: IMaps;
  name: string;
  price: number;
  rarity: number;
  size: string;
  skills: ISkill[];
  stats: IStats;
  suitability: ISuitability[];
  types: string[];
  wiki: string;
}

interface ISuitability {
  image: string;
  level: number;
  type: string;
}

interface IStats {
  attack: IAttack;
  defense: number;
  food: number;
  hp: number;
  speed: ISpeed;
  stamina: number;
  support: number;
}

interface ISpeed {
  ride: number;
  run: number;
  walk: number;
}

interface IAttack {
  melee: number;
  ranged: number;
}

interface ISkill {
  cooldown: number;
  description: string;
  level: number;
  name: string;
  power: number;
  type: string;
}

interface IMaps {
  day: string;
  night: string;
}

interface IAura {
  description: string;
  name: string;
  tech: string;
}

import { Reward } from "./reward";

export interface Mission {
  description: string;
  node: string;
  nodeKey: string;
  type: string;
  typeKey: string;
  faction: string;
  factionKey: string;
  reward: Reward;
  minEnemyLevel: number;
  maxEnemyLevel: number;
  nightmare: boolean;
  archwingRequired: boolean;
  isSharkwing: boolean;
  levelOverride: string;
  enemySpec: string;
  advancedSpawners: any[];
  requiredItems: any[];
  levelAuras: any[];
}

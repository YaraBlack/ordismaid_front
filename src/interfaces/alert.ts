import { Mission } from "./mission";

export interface Alert {
  id: string | number;
  activation: string;
  expiry: string;
  mission: Mission;
  rewardTypes: any[];
  tag: string;
}

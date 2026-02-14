import { WorldState } from "./worldState";

export interface BackendResponse {
  success: boolean;
  httpCode: string | number;
  message: string;
  timestamp: string;
  data: WorldState;
}

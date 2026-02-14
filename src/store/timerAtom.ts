import { atom } from "jotai";
import { BackendResponse } from "../interfaces/backendResponse";

export const timerDataAtom = atom<BackendResponse | null>(null);
export const timerLoadingAtom = atom<boolean>(true);
export const timerErrorAtom = atom<string | null>(null);

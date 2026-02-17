import { fetch } from "@tauri-apps/plugin-http";
import { useCallback } from "react";
import { useAtom } from "jotai";
import {
  timerDataAtom,
  timerLoadingAtom,
  timerErrorAtom,
} from "../storage/timerAtom";

export const useTimers = () => {
  const [data, setData] = useAtom(timerDataAtom);
  const [loading, setLoading] = useAtom(timerLoadingAtom);
  const [error, setError] = useAtom(timerErrorAtom);

  const fetchData = useCallback(async () => {
    // This request happens in Rust, bypassing browser CORS
    try {
      setError(null);
      setLoading(true);

      const response = await fetch("http://localhost:3000/api/worldState", {
        method: "GET",
        connectTimeout: 5000,
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();

      if (!result?.data.alerts) {
        throw new Error("Invalid response shape");
      }

      setData(result);
    } catch (error) {
      console.error("Failed to fetch timers:", error);

      setError("Unable to fetch latest world state.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};

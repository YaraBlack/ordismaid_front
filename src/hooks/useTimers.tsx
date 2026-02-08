import { fetch } from "@tauri-apps/plugin-http";
import { useState, useEffect, useCallback } from "react";

export const useTimers = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    // This request happens in Rust, bypassing browser CORS
    try {
      const response = await fetch("http://localhost:3000/api/pc", {
        method: "GET",
        connectTimeout: 5000,
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch timers:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // 1. Fetch immediately on mount
    fetchData();

    // 2. Set up interval (5 minutes = 300,000 ms)
    const intervalId = setInterval(() => {
      console.log("Auto-refreshing timers...");
      fetchData();
    }, 300000);

    // 3. Cleanup: This stops the timer if the user leaves the page
    return () => clearInterval(intervalId);
  }, [fetchData]);

  return { data, loading, fetchData };
};

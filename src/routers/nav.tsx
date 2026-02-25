import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Timers } from "../pages/Timers";
import { Settings } from "../pages/Settings";
import { Equipment } from "../pages/Equipment";
import { Mods } from "../pages/Mods";
import { Codex } from "../pages/Codex";
import { HomeLayout } from "../layouts/HomeLayout";
import { useTimers } from "../hooks/useTimers";
import { useEffect } from "react";

export const Nav = () => {
  const { fetchData } = useTimers();

  useEffect(() => {
    fetchData();

    // Background refresh every 5 minutes
    const intervalId = setInterval(fetchData, 300000);

    return () => clearInterval(intervalId);
  }, [fetchData]);

  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/equipment" element={<Equipment />} />
        <Route index path="/mods" element={<Mods />} />
        <Route index path="/codex" element={<Codex />} />
        <Route path="/timers" element={<Timers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

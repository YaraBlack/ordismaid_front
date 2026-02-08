import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Baro } from "../pages/Baro";
import { Timers } from "../pages/Timers";
import { Settings } from "../pages/Settings";
import { HomeLayout } from "../layouts/HomeLayout";

export const Nav = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/timers" element={<Timers />} />
        <Route path="/baro" element={<Baro />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

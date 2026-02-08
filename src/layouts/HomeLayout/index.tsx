import { NavLink, Outlet } from "react-router";
import styles from "./styles.module.css";

export const HomeLayout = () => {
  return (
    <div className={styles.main}>
      <div className={styles.navigation}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/timers">Timers</NavLink>
        <NavLink to="/baro">Baro</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

import { NavLink, Outlet } from "react-router"
import { Nav } from "../../routers/nav"
import { ReactNode } from "react"
import styles from "./styles.module.css"

export const HomeLo = () => {
  return (
    <div>
        <div className={styles.navigation}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

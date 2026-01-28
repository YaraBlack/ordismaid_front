import {Route, Routes} from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { HomeLo } from "../layouts/HomeLo";


export const Nav = () => {
  return (
    <Routes>
        <Route element={<HomeLo />}>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Route>
    </Routes>
  )
}

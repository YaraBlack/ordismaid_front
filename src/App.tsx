// import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router";
import { Nav } from "./routers/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
}

export default App;

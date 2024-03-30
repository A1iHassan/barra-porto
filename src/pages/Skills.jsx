import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/skills components/navBar";

function Skills() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <NavBar />
      <h1>Skills</h1>
    </>
  );
}

export default Skills;

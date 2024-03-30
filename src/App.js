import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./pages/footer";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import Activities from "./pages/Activities";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/WorkExperience" element={<WorkExperience />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Activities" element={<Activities />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

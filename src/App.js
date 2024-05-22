import React from "react";
import "./index.css"
import Project from "./routes/Project";
import About from "./routes/About";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   </>
  );
}

export default App;

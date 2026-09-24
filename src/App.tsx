import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

import { TopNavBar } from "./components/TopNavBar";
import { Navbar } from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";

import "./styles/main.scss";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* Top Red Info Header */}
      <TopNavBar />

      {/* Main Navigation Header */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;

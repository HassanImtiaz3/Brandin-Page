import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      {/* Nav Bar section Start */}
      <Navbar />
      {/* Nav Bar section End */}

      {/* Hero section Start */}
      <Hero />
      {/* Hero section End */}
    </div>
  );
}

export default App;

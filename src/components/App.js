import React from "react";
import About from "./About";
import NavBar from "./Navbar";
import Home from "./Home";

{/* write an <About> component here */}
<About />

function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

export default App;

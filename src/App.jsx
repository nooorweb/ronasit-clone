import React from "react";
import "./App.css";
import Home from ".//Components/layout/Home/Home";
import Header from "./Components/layout/Header/index.jsx";
import Calculater from "./Components/layout/CalculaterSec/index.jsx";
import Home2 from "./Components/layout/Home/Home2";

import MouseFollower from "./Components/layout/MouseFollower.jsx";


function App() {
  return (
    <div>
   
      <MouseFollower /> 
       <Header />
      <Home />
        <Calculater />
      <Home2 /> 
    </div>
  );
}

export default App;

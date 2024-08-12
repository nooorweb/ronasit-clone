import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/index.jsx'
import Calculater from './Components/CalculaterSec/index.jsx';
import Home2 from './Components/Home/Home2';



function App() {
  return (
  
      <div>
        <Header /> 
        <Home />
        <Calculater />
        <Home2 />
      
      </div>

  );
}

export default App;

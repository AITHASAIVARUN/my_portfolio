import './App.css';
import Home from "./Pages/Home/Homescreen";
import React from "react";
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;

import './App.css';
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";
import React from "react";
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<div>Dude you came to the wrong Address</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

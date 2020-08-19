import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './Calculator.js';
import Calculator2 from './Calculator.js';


//three inputs sections in one row, separate by drop down 4 mathematical operation
//and equal push button
//error message "Please provide a valid number for both operands"

function App() {
  return (
    <div className="App">
      <header>
        React Calculator
      </header>

      <Calculator2/>
    </div>
  );
}

export default App;

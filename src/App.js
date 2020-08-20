import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';


//three inputs sections in one row, separate by drop down 4 mathematical operation
//and equal push button
//error message "Please provide a valid number for both operands"

function App() {
  return (
    <div className="app calculator">

      <header>
        React Calculator
        </header>

       <Calculator/>
    </div>
  );
}

export default App;

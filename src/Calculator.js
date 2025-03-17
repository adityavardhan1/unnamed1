import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import calculators from "./data/calculators"; // Adjust the relative path if needed
import "./Calculator.css";

function Calculator() {
  return (
    <div>  {/* Parent div added here */}
      {/* Calculator content */}
      <div className="container">
        {calculators.map((calc, index) => (
          <div className="image-grid" key={index}>
            <img src={calc.img} alt={calc.label} />  
            <div className="middle">
              <Link to={calc.link}>
                <button>Launch Calculator</button>
              </Link>
            </div>
            <p className="caption">{calc.label}</p>
          </div>
        ))}
      </div>

      {/* Routes for Each Calculator */}
      <Routes>
        {calculators.map((calc, index) => (
          <Route key={index} path={calc.link} element={<calc.component />} />
        ))}
      </Routes>
    </div>
  );
}

export default Calculator;
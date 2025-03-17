import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculator from "./Calculator";
import ContactUs from "./ContactUs";
import AskUs from "./AskUs";
import Market from "./Market";
import Login from "./Login";
import Signup from "./Signup";
import FIRE from "./FIRE";
import SIPCalculator from "./components/sip"; // Ensure correct filename
import "./App.css";

function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-left">
          <h1 className="Logo">SochSahi</h1>
        </div>
        <div className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/ContactUs">Support Us</Link>
          <Link to="/AskUs">Ask Us</Link>
          <Link to="/Calculator">Calculator</Link>
          <Link to="/FIRE">F.I.R.E</Link>
          <Link to="/Market">Market</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Signup">Sign Up</Link>
          <Link to="/sip">SIP Calculator</Link> {/* Added link */}
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<index />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AskUs" element={<AskUs />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/FIRE" element={<FIRE />} />
        <Route path="/sip" element={<SIPCalculator />} /> {/* Fixed Route */}
      </Routes>
    </Router>
  );
}

export default App;

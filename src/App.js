import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Registration from "./components/Registration/registration";
import Info from "./components/Info/info";
import Login from "./components/Login/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration/>} />
        <Route path="/Info" element={<Info />} />
      
      </Routes>
    </Router>
  );
}

export default App

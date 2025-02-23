import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayPage from "./components/pages/DisplayPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

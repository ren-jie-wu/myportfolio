import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OtherProjects from './pages/other-projects';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/myportfolio" element={<Home />} />
        <Route path="/other-projects" element={<OtherProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

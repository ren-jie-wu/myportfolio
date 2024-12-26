import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OtherProjects from './pages/OtherProjects';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/otherprojects" element={<OtherProjects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

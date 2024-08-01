// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ForEachAcademy from './ForEachAcademy';
import FormationDetail from './FormationDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Inclure Navbar ici pour qu'il s'affiche sur toutes les pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/foreach-academy" element={<ForEachAcademy />} />
          <Route path="/formations/:id" element={<FormationDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

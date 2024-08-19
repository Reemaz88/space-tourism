import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
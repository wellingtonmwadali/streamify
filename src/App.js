import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MovieDetails from './pages/MovieDetails';
//display routes
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/movies/:id" element={<MovieDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;


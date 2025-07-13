import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/Home'; // or About if renamed
import Resume from './pages/Resume';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

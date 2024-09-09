import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, HomePage, Contact,CardDetail, Animation } from "./Components";

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<CardDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;

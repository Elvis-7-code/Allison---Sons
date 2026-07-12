import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; Alison's Hardware - Quality Construction Materials.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
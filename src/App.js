import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Header';
import Footer from '../src/Footer';
import Home from '../src/Home';
import About from '../src/About';
import Services from '../src/Services';
import Contact from '../src/Contact';
import Leadership from './Leadership';
import History from './History';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Expertise from '../src/Expertise'; 


const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content"> {/* Adjust margin to avoid overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
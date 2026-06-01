import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// All Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import DigitalLibrary from './pages/DigitalLibrary';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Membership from './pages/Membership';
import VisionMission from './pages/VisionMission';

export const LangContext = React.createContext();

function App() {
  const [lang, setLang] = useState('en');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Router>
        <div className="flex flex-col min-h-screen bg-background text-textMain font-sans">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              {/* Main Navigation Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/library" element={<DigitalLibrary />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Action & Extra Routes */}
              <Route path="/donate" element={<Donate />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/vision-mission" element={<VisionMission />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </LangContext.Provider>
  );
}

export default App;
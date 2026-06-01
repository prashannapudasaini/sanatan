import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useContext(LangContext);

  const toggleLang = () => setLang(lang === 'en' ? 'np' : 'en');

  const navLinks = {
    en: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Programs', path: '/programs' },
      { name: 'Library', path: '/library' },
      { name: 'Contact', path: '/contact' },
    ],
    np: [
      { name: 'गृहपृष्ठ', path: '/' },
      { name: 'हाम्रो बारेमा', path: '/about' },
      { name: 'कार्यक्रमहरू', path: '/programs' },
      { name: 'पुस्तकालय', path: '/library' },
      { name: 'सम्पर्क', path: '/contact' },
    ]
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
           <img src="/logo.png" alt="SDB Nepal Logo" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary leading-tight">SDB Nepal</span>
              <span className="text-xs text-textMain hidden sm:block">Sanatan Dharma Bigyan Samaj</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks[lang].map((link, index) => (
              <Link key={index} to={link.path} className="text-textMain hover:text-primary transition font-medium">
                {link.name}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button onClick={toggleLang} className="flex items-center gap-1 text-textMain hover:text-primary transition">
              <Globe size={18} />
              <span className="uppercase font-semibold">{lang}</span>
            </button>

            <Link to="/donate" className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition shadow-sm">
              {lang === 'en' ? 'Donate' : 'सहयोग गर्नुहोस्'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-textMain">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-borderSoft">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks[lang].map((link, index) => (
              <Link key={index} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-textMain hover:bg-secondary rounded-md">
                {link.name}
              </Link>
            ))}
            <button onClick={toggleLang} className="w-full text-left px-3 py-2 flex items-center gap-2 text-textMain">
              <Globe size={18} /> {lang === 'en' ? 'Switch to Nepali' : 'अंग्रेजीमा बदल्नुहोस्'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
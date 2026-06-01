import React, { useState, useContext } from 'react';
import { LangContext } from '../App';
import { Search, Download, Book, FileText } from 'lucide-react';

const DigitalLibrary = () => {
  const { lang } = useContext(LangContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Vedas', 'Upanishads', 'Puranas', 'Geeta', 'Tripitaka', 'Research'];
  
  // Dummy data - in production, fetch from /api/library/read.php
  const documents = [
    { id: 1, title: 'Rigveda Samhita', category: 'Vedas', author: 'Vyasa', lang: 'Sanskrit/Nepali' },
    { id: 2, title: 'Bhagavad Geeta - Scientific Analysis', category: 'Geeta', author: 'SDB Research Wing', lang: 'English' },
    { id: 3, title: 'Isha Upanishad Translated', category: 'Upanishads', author: 'SDB Translators', lang: 'Nepali' },
  ];

  const filteredDocs = documents.filter(doc => 
    (activeCategory === 'All' || doc.category === activeCategory) &&
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16 bg-borderSoft/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-textMain mb-8 text-center">
          {lang === 'en' ? 'Digital Library' : 'डिजिटल पुस्तकालय'}
        </h1>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder={lang === 'en' ? "Search scriptures, papers..." : "शास्त्र, अनुसन्धान खोज्नुहोस्..."}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map(doc => (
            <div key={doc.id} className="bg-white p-6 rounded-xl shadow-sm border border-borderSoft hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">
                  {doc.category}
                </div>
                <Book className="text-gray-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-2 mb-1"><FileText size={14}/> {doc.author}</p>
              <p className="text-sm text-gray-500 mb-6">{lang === 'en' ? 'Language:' : 'भाषा:'} {doc.lang}</p>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-secondary/50 text-textMain py-2 rounded-lg font-medium hover:bg-secondary transition text-sm flex justify-center items-center gap-2">
                  Read Online
                </button>
                <button className="flex-1 bg-primary text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition text-sm flex justify-center items-center gap-2">
                  <Download size={16} /> PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalLibrary;
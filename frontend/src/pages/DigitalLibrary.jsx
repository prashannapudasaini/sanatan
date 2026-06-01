import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LangContext } from '../App';
import { Search, Calendar, MapPin, ArrowLeft, Image as ImageIcon } from 'lucide-react';

const EventsGallery = () => {
  const { lang } = useContext(LangContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // --- Dummy Event Data ---
  // To add your own, change the coverImage and add paths to the gallery array (e.g., '/assets/event1.jpg')
  const eventsData = [
    {
      id: 1,
      title: { en: 'Annual Geeta Saptaha 2083', np: 'वार्षिक गीता सप्ताह २०८३' },
      date: { en: 'March 15, 2024', np: 'चैत्र २, २०८०' },
      location: { en: 'Kathmandu, Nepal', np: 'काठमाडौं, नेपाल' },
      coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1588694833215-9c98ba8040bc?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605367175591-53609804e768?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      id: 2,
      title: { en: 'Vedic Science Symposium', np: 'वैदिक विज्ञान गोष्ठी' },
      date: { en: 'January 10, 2024', np: 'पुष २६, २०८०' },
      location: { en: 'Pokhara, Nepal', np: 'पोखरा, नेपाल' },
      coverImage: 'https://images.unsplash.com/photo-1588694833215-9c98ba8040bc?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1588694833215-9c98ba8040bc?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605367175591-53609804e768?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
      ]
    },
    {
      id: 3,
      title: { en: 'Gurukul Heritage Restoration', np: 'गुरुकुल सम्पदा पुनर्निर्माण' },
      date: { en: 'November 5, 2023', np: 'कार्तिक १९, २०८०' },
      location: { en: 'Lumbini, Nepal', np: 'लुम्बिनी, नेपाल' },
      coverImage: 'https://images.unsplash.com/photo-1605367175591-53609804e768?q=80&w=800&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1605367175591-53609804e768?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1588694833215-9c98ba8040bc?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605367175591-53609804e768?q=80&w=800&auto=format&fit=crop'
      ]
    }
  ];

  // Filter events based on search input
  const filteredEvents = eventsData.filter(event => 
    event.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.title.np.includes(searchTerm)
  );

  return (
    <div className="py-16 bg-borderSoft/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-textMain mb-4">
            {lang === 'en' ? 'Events & Gallery' : 'कार्यक्रम र ग्यालरी'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Explore our recent programs, symposiums, and community initiatives.' 
              : 'हाम्रा भर्खरका कार्यक्रमहरू, गोष्ठीहरू, र सामुदायिक पहलहरू अन्वेषण गर्नुहोस्।'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* ==========================================
              VIEW 1: EVENT GRID (Shows when no event is selected)
              ========================================== */}
          {!selectedEvent ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Search Bar */}
              <div className="bg-white p-4 rounded-xl shadow-sm mb-8 max-w-2xl mx-auto relative">
                <Search className="absolute left-7 top-7 text-gray-400 -translate-y-1/2" size={20} />
                <input 
                  type="text" 
                  placeholder={lang === 'en' ? "Search events..." : "कार्यक्रम खोज्नुहोस्..."}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Event Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event, idx) => (
                  <motion.div 
                    key={event.id} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedEvent(event)}
                    className="bg-white rounded-2xl shadow-sm border border-borderSoft overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    {/* Cover Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={event.coverImage} 
                        alt={event.title[lang]} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-textMain px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                        <ImageIcon size={14} className="text-primary"/> 
                        {event.gallery.length} {lang === 'en' ? 'Photos' : 'तस्बिरहरू'}
                      </div>
                    </div>
                    
                    {/* Event Details */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-textMain mb-4 group-hover:text-primary transition-colors">
                        {event.title[lang]}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary"/> {event.date[lang]}
                        </p>
                        <p className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary"/> {event.location[lang]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredEvents.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  {lang === 'en' ? 'No events found.' : 'कुनै कार्यक्रम फेला परेन।'}
                </div>
              )}
            </motion.div>

          ) : (

            /* ==========================================
               VIEW 2: GALLERY GRID (Shows when an event is clicked)
               ========================================== */
            <motion.div
              key="gallery"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Back Button & Event Header */}
              <div className="mb-8">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition font-medium mb-6 bg-white px-4 py-2 rounded-full shadow-sm w-fit border border-gray-100"
                >
                  <ArrowLeft size={18} /> 
                  {lang === 'en' ? 'Back to Events' : 'कार्यक्रमहरूमा फर्कनुहोस्'}
                </button>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-borderSoft">
                  <h2 className="text-3xl font-bold text-textMain mb-4">{selectedEvent.title[lang]}</h2>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-600 font-medium">
                    <span className="flex items-center gap-2 bg-secondary/20 px-3 py-1.5 rounded-lg">
                      <Calendar size={18} className="text-primary"/> {selectedEvent.date[lang]}
                    </span>
                    <span className="flex items-center gap-2 bg-secondary/20 px-3 py-1.5 rounded-lg">
                      <MapPin size={18} className="text-primary"/> {selectedEvent.location[lang]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Photo Masonry/Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedEvent.gallery.map((imgUrl, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Gallery image ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default EventsGallery;
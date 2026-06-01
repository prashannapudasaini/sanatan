import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LangContext } from '../App';
import { ChevronRight, ChevronLeft, MousePointer2 } from 'lucide-react';

const Hero = () => {
  const { lang } = useContext(LangContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Slide Data (3 Images and 3 Different Texts) ---
  const slides = [
    {
      id: 0,
      image: 'https://images.unsplash.com/photo-1588694833215-9c98ba8040bc?q=80&w=1600&auto=format&fit=crop', // Replace with '/assets/image1.jpg'
      content: {
        en: { headline: "Preserving Eternal Wisdom", subline: "Through Science, Education & Service" },
        np: { headline: "सनातन ज्ञानको संरक्षण", subline: "विज्ञान, शिक्षा र सेवामार्फत" }
      }
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop', // Replace with '/assets/image2.jpg'
      content: {
        en: { headline: "Awakening Inner Consciousness", subline: "Guiding humanity towards spiritual and scientific truths" },
        np: { headline: "आन्तरिक चेतनाको जागरण", subline: "मानवतालाई आध्यात्मिक वैज्ञानिक सत्यतर्फ डोर्याउँदै" }
      }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1605367175591-53609804e768?q=80&w=1600&auto=format&fit=crop', // Replace with '/assets/image3.jpg'
      content: {
        en: { headline: "Empowering Future Generations", subline: "Bridging ancient Gurukul traditions with modern learning" },
        np: { headline: "भावी पुस्ताको सशक्तिकरण", subline: "प्राचीन परम्परा र आधुनिक शिक्षाको संगम" }
      }
    }
  ];

  // --- Auto Slide Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); // 2000ms = 2 seconds

    // Clear interval on unmount or when currentSlide changes manually
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  // --- Manual Controls ---
  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black group">
      
      {/* 1. Background Images (Fading between slides) */}
      {slides.map((slide, index) => (
        <motion.div 
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0, scale: currentSlide === index ? 1.05 : 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      
      {/* 2. Gradient Overlays for Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-primary/30 to-black/90 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {/* 3. Main Text Content (Animated transitions when sliding) */}
      <div className="relative z-10 text-center px-12 md:px-24 max-w-6xl mx-auto w-full">
        
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-semibold tracking-wider uppercase">
            {lang === 'en' ? 'Sanatan Dharma Bigyan Samaj' : 'सनातन धर्म विज्ञान समाज'}
          </span>
        </div>

        {/* Dynamic Text with AnimatePresence */}
        <div className="min-h-[160px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight">
                {slides[currentSlide].content[lang].headline}
              </h1>
              <h2 className="text-xl md:text-3xl font-medium text-orange-100 mb-8 drop-shadow-lg max-w-3xl mx-auto">
                {slides[currentSlide].content[lang].subline}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Action Buttons (Static across slides) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/membership" 
              className="group relative bg-primary text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.8)] hover:bg-orange-600 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">{lang === 'en' ? 'Join Our Mission' : 'हाम्रो अभियानमा जोडिनुहोस्'}</span>
              <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/about" 
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-textMain transition-all shadow-lg"
            >
              {lang === 'en' ? 'Learn More' : 'थप जान्नुहोस्'}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 5. Manual Controls (Arrows) */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} />
      </button>

      {/* 6. Navigation Dots & Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
        
        {/* Dots */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${currentSlide === index ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>

        {/* Bouncing Mouse */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/50"
        >
          <MousePointer2 size={28} />
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;
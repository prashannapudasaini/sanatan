import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const { lang } = useContext(LangContext);

  const content = {
    en: {
      headline: "Preserving Eternal Wisdom Through Science, Education & Service",
      btnLearn: "Learn More",
      btnJoin: "Join Our Mission"
    },
    np: {
      headline: "विज्ञान, शिक्षा र सेवामार्फत सनातन ज्ञानको संरक्षण",
      btnLearn: "थप जान्नुहोस्",
      btnJoin: "हाम्रो अभियानमा जोडिनुहोस्"
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Saffron Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/himalayan-temple.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8"
        >
          {content[lang].headline}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg flex items-center justify-center gap-2">
            {content[lang].btnJoin} <ChevronRight size={20} />
          </button>
          <button className="bg-white text-textMain px-8 py-3 rounded-full font-semibold hover:bg-secondary transition shadow-lg">
            {content[lang].btnLearn}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
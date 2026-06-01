import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { Target, Compass, Sparkles } from 'lucide-react';

const VisionMission = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="py-16 bg-background relative overflow-hidden">
      {/* Background Mandala overlay */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none w-[600px] h-[600px] bg-[url('/assets/om-mandala.svg')] bg-cover bg-center"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-textMain mb-4 flex justify-center items-center gap-3">
            <Sparkles className="text-primary" />
            {lang === 'en' ? 'Vision & Mission' : 'दृष्टिकोण र लक्ष्य'}
            <Sparkles className="text-primary" />
          </h1>
        </div>

        <div className="flex flex-col gap-12">
          {/* Vision Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 bg-white p-10 rounded-3xl shadow-xl border-l-8 border-primary"
          >
            <div className="bg-primary/10 p-6 rounded-full shrink-0">
              <Compass className="w-16 h-16 text-primary" />
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-textMain mb-3 border-b-2 border-secondary pb-2">Vision (English)</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become a globally respected institution dedicated to the scientific understanding, preservation, and promotion of eternal wisdom systems rooted in the Vedas, Puranas, Upanishads, Geeta, Tripiṭaka, and similar scriptures.
                </p>
              </div>
              <div className="md:border-l-2 md:border-borderSoft md:pl-8">
                <h3 className="text-2xl font-bold text-textMain mb-3 border-b-2 border-secondary pb-2 sanskrit-accent">दृष्टिकोण (Nepali)</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  वेद, पुराण, उपनिषद्, गीता, त्रिपिटक लगायत सनातन शास्त्रहरूको ज्ञान, संरक्षण र प्रचारप्रसार गर्ने विश्वस्तरीय संस्था बन्नु।
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white p-10 rounded-3xl shadow-xl border-r-8 border-primary"
          >
            <div className="bg-primary/10 p-6 rounded-full shrink-0">
              <Target className="w-16 h-16 text-primary" />
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-8">
              <div className="md:border-r-2 md:border-borderSoft md:pr-8 text-right">
                <h3 className="text-2xl font-bold text-textMain mb-3 border-b-2 border-secondary pb-2">Mission (English)</h3>
                <p className="text-gray-700 leading-relaxed">
                  To research, teach, translate, and apply spiritual-scientific knowledge through education, service, communication, and institutional development.
                </p>
              </div>
              <div className="text-right md:text-left">
                <h3 className="text-2xl font-bold text-textMain mb-3 border-b-2 border-secondary pb-2 sanskrit-accent">लक्ष्य (Nepali)</h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  शिक्षा, समाजसेवा, सञ्चार तथा संस्था विकासमार्फत सनातन ज्ञानको अनुसन्धान, शिक्षा, अनुवाद तथा प्रयोग गर्नु।
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
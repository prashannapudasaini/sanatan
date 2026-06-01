import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { BookOpen, Search, Map, HeartHandshake } from 'lucide-react';

const Programs = () => {
  const { lang } = useContext(LangContext);

  const programs = [
    {
      id: 1,
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: { en: 'Education', np: 'शिक्षा' },
      items: { en: ['Gurukul Support', 'Vedic Scholarships', 'Workshops'], np: ['गुरुकुल समर्थन', 'वैदिक छात्रवृत्ति', 'कार्यशालाहरू'] }
    },
    {
      id: 2,
      icon: <Search className="w-10 h-10 text-primary" />,
      title: { en: 'Research', np: 'अनुसन्धान' },
      items: { en: ['Scriptural Translation', 'Scientific Studies on Rituals'], np: ['शास्त्र अनुवाद', 'संस्कारहरूमा वैज्ञानिक अध्ययन'] }
    },
    {
      id: 3,
      icon: <Map className="w-10 h-10 text-primary" />,
      title: { en: 'Preservation', np: 'संरक्षण' },
      items: { en: ['Temple Restoration', 'Manuscript Digitization'], np: ['मन्दिर पुनर्निर्माण', 'पाण्डुलिपि डिजिटलाइजेसन'] }
    },
    {
      id: 4,
      icon: <HeartHandshake className="w-10 h-10 text-primary" />,
      title: { en: 'Humanitarian', np: 'मानवीय सेवा' },
      items: { en: ['Disaster Response', 'Elderly Support', 'Student Assistance'], np: ['प्रकोप उद्धार', 'वृद्धवृद्धा सहायता', 'विद्यार्थी सहयोग'] }
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-textMain mb-4">
            {lang === 'en' ? 'Our Programs & Projects' : 'हाम्रा कार्यक्रम र परियोजनाहरू'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Discover how we are actively working in the community to preserve heritage and promote well-being.'
              : 'हामीले सम्पदाको संरक्षण र कल्याणको प्रवर्द्धन गर्न समुदायमा कसरी सक्रिय रूपमा काम गरिरहेका छौं भन्ने पत्ता लगाउनुहोस्।'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((prog, idx) => (
            <motion.div 
              key={prog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-borderSoft hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {prog.icon}
              </div>
              <div className="relative z-10">
                <div className="mb-6">{prog.icon}</div>
                <h3 className="text-2xl font-bold text-textMain mb-4 border-b border-secondary pb-4 inline-block">
                  {prog.title[lang]}
                </h3>
                <ul className="space-y-3">
                  {prog.items[lang].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
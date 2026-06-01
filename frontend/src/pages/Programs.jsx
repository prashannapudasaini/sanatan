import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { BookOpen, Search, Map, HeartHandshake, ArrowRight, Target, ShieldCheck, Lightbulb } from 'lucide-react';

const Programs = () => {
  const { lang } = useContext(LangContext);

  const programs = [
    {
      id: 1,
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      title: { en: 'Education & Gurukul', np: 'शिक्षा र गुरुकुल' },
      summary: { en: 'Reviving the ancient Gurukul system to foster holistic growth.', np: 'समग्र विकासका लागि प्राचीन गुरुकुल प्रणालीलाई पुनर्जीवित गर्दै।' },
      details: { 
        en: 'We integrate traditional Vedic values with modern academic standards. Our aim is to build scholars who are deeply rooted in culture yet capable of thriving in the contemporary world.',
        np: 'हामी परम्परागत वैदिक मूल्य र मान्यताहरूलाई आधुनिक शैक्षिक मापदण्डहरूसँग जोड्दछौं। हाम्रो उद्देश्य संस्कृतिमा आधारित विद्वानहरू तयार पार्नु हो।'
      },
      items: { en: ['Gurukul Infrastructure Support', 'Vedic Scholarship Programs', 'Modern Science Integration Workshops'], np: ['गुरुकुल पूर्वाधार सहयोग', 'वैदिक छात्रवृत्ति कार्यक्रम', 'आधुनिक विज्ञान एकीकरण कार्यशाला'] }
    },
    {
      id: 2,
      icon: <Search className="w-10 h-10 text-primary" />,
      title: { en: 'Research & Innovation', np: 'अनुसन्धान र नवाचार' },
      summary: { en: 'Scientific validation and translation of ancient wisdom.', np: 'प्राचीन ज्ञानको वैज्ञानिक प्रमाणीकरण र अनुवाद।' },
      details: { 
        en: 'Our research wing focuses on decoding the scientific utility of ancient rituals, medicinal plants, and architectural principles documented in scriptures.',
        np: 'हाम्रो अनुसन्धान विभागले प्राचीन संस्कार, जडीबुटी, र शास्त्रहरूमा उल्लेखित वास्तुकलाका वैज्ञानिक पक्षहरूको व्याख्या गर्नमा केन्द्रित छ।'
      },
      items: { en: ['Scriptural Translation (Sanskrit to Nepali/English)', 'Scientific Studies on Rituals', 'Vedic Mathematics Research'], np: ['शास्त्र अनुवाद (संस्कृतबाट नेपाली/अङ्ग्रेजी)', 'संस्कारहरूमा वैज्ञानिक अध्ययन', 'वैदिक गणित अनुसन्धान'] }
    },
    {
      id: 3,
      icon: <Map className="w-10 h-10 text-primary" />,
      title: { en: 'Preservation', np: 'संरक्षण' },
      summary: { en: 'Protecting our sacred physical and literary heritage.', np: 'हाम्रो पवित्र भौतिक र साहित्यिक सम्पदाको सुरक्षा।' },
      details: { 
        en: 'Preserving endangered manuscripts and heritage sites is our duty. We use digital technologies to archive and restore our cultural identity.',
        np: 'लोपोन्मुख पाण्डुलिपि र सम्पदा स्थलहरूको संरक्षण हाम्रो कर्तव्य हो। हामी हाम्रो सांस्कृतिक पहिचानलाई अभिलेखीकरण गर्न आधुनिक प्रविधिको प्रयोग गर्दछौं।'
      },
      items: { en: ['Temple & Heritage Restoration', 'Manuscript Digitization', 'Gaushala Management'], np: ['मन्दिर र सम्पदा पुनर्निर्माण', 'पाण्डुलिपि डिजिटलाइजेसन', 'गौशाला व्यवस्थापन'] }
    },
    {
      id: 4,
      icon: <HeartHandshake className="w-10 h-10 text-primary" />,
      title: { en: 'Humanitarian Service', np: 'मानवीय सेवा' },
      summary: { en: 'Direct support to the needy through the lens of Dharma.', np: 'धर्मको दृष्टिकोणबाट खाँचोमा परेकाहरूलाई प्रत्यक्ष सहयोग।' },
      details: { 
        en: 'Through selfless "Seva," we offer disaster relief, support the elderly and orphans, and ensure that no student is denied education due to financial instability.',
        np: 'निःस्वार्थ "सेवा" मार्फत, हामी प्रकोप उद्धार, वृद्धवृद्धा र अनाथालयको सहयोग, र विपन्न विद्यार्थीहरूको शिक्षाका लागि निरन्तर काम गरिरहेका छौं।'
      },
      items: { en: ['Disaster Relief Operations', 'Elderly & Orphanage Support', 'Educational Assistance for Students'], np: ['प्रकोप उद्धार', 'वृद्धवृद्धा तथा अनाथालय सहयोग', 'विद्यार्थीहरूलाई शैक्षिक सहायता'] }
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-textMain mb-4">
            {lang === 'en' ? 'Our Programs & Projects' : 'हाम्रा कार्यक्रम र परियोजनाहरू'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {lang === 'en' 
              ? 'We operate through a multi-dimensional approach to ensure Sanatan values are applied scientifically and practically in today\'s world.'
              : 'सनातन मूल्यहरूलाई आजको संसारमा वैज्ञानिक र व्यावहारिक रूपमा लागू गर्न हामी बहुआयामिक दृष्टिकोण अपनाउँछौं।'}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {programs.map((prog, idx) => (
            <motion.div 
              key={prog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-borderSoft hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{prog.icon}</div>
              <h3 className="text-2xl font-bold text-textMain mb-2">{prog.title[lang]}</h3>
              <p className="text-primary font-medium mb-4 italic">{prog.summary[lang]}</p>
              
              {/* Detailed Content */}
              <div className="bg-secondary/10 p-4 rounded-xl mb-6 text-gray-700 text-sm">
                {prog.details[lang]}
              </div>

              <ul className="space-y-3">
                {prog.items[lang].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <ArrowRight size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* New "Strategy" Section */}
        <div className="bg-textMain rounded-3xl p-10 md:p-16 text-white grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="text-primary" /> 
              {lang === 'en' ? 'Our Strategy for Change' : 'परिवर्तनको लागि हाम्रो रणनीति'}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {lang === 'en' 
                ? 'Our operational strategy follows a three-step model: Research the scriptural foundation, Educate the community, and Implement practical, scientific solutions. By maintaining this cycle, we ensure that our efforts result in measurable and sustainable long-term impact.'
                : 'हाम्रो रणनीति तीन चरणमा आधारित छ: शास्त्रीय आधारको अनुसन्धान, समुदायलाई शिक्षित गर्ने, र व्यावहारिक वैज्ञानिक समाधानहरूको कार्यान्वयन। यो चक्रलाई कायम राख्दै, हामीले गर्ने प्रयासहरूले दिगो प्रभाव पार्ने सुनिश्चित गर्छौं।'}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
             <div className="flex items-center gap-3"><ShieldCheck className="text-primary" /> <span>{lang === 'en' ? 'Verified Science' : 'प्रमाणित विज्ञान'}</span></div>
             <div className="flex items-center gap-3"><Target className="text-primary" /> <span>{lang === 'en' ? 'Sustainable Goals' : 'दिगो लक्ष्यहरू'}</span></div>
             <button className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition">
               {lang === 'en' ? 'Learn More' : 'थप जान्नुहोस्'}
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Programs;
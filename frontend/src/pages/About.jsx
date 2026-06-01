import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { FileText, Shield, Heart, Leaf, Users, Eye } from 'lucide-react';

const About = () => {
  const { lang } = useContext(LangContext);

  const values = [
    { icon: <Shield size={28} />, name: { en: 'Truth (Satya)', np: 'सत्य' } },
    { icon: <FileText size={28} />, name: { en: 'Dharma', np: 'धर्म' } },
    { icon: <Heart size={28} />, name: { en: 'Compassion', np: 'करुणा' } },
    { icon: <Leaf size={28} />, name: { en: 'Sustainability', np: 'दिगोपन' } },
    { icon: <Users size={28} />, name: { en: 'Inclusiveness', np: 'समावेशीता' } },
    { icon: <Eye size={28} />, name: { en: 'Transparency', np: 'पारदर्शिता' } },
  ];

  return (
    <div className="bg-background">
      {/* Page Header */}
      <div className="bg-textMain py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          {lang === 'en' ? 'About SDB Nepal' : 'SDB नेपालको बारेमा'}
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          {lang === 'en' 
            ? 'Bridging ancient Vedic wisdom with modern scientific paradigms for the betterment of humanity.' 
            : 'मानव जातिको भलाइको लागि प्राचीन वैदिक ज्ञान र आधुनिक विज्ञानलाई जोड्दै।'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-primary mb-6">
              {lang === 'en' ? 'Organization Overview' : 'संस्थाको सिंहावलोकन'}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {lang === 'en' 
                ? 'Sanatan Dharma Bigyan Samaj (SDB Nepal) is a non-governmental, non-political, and non-profit organization dedicated to the research, preservation, and education of Sanatan wisdom.' 
                : 'सनातन धर्म विज्ञान समाज (SDB नेपाल) एक गैर-सरकारी, गैर-राजनीतिक र गैर-नाफामुखी संस्था हो जुन सनातन ज्ञानको अनुसन्धान, संरक्षण र शिक्षाको लागि समर्पित छ।'}
            </p>
            <div className="bg-borderSoft p-6 rounded-xl mt-6 border-l-4 border-primary">
              <h4 className="font-semibold text-textMain mb-2">{lang === 'en' ? 'Registration Details' : 'दर्ता विवरण'}</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>{lang === 'en' ? 'Name:' : 'नाम:'}</strong> Sanatan Dharma Bigyan Samaj (SDB Nepal)</li>
                <li><strong>{lang === 'en' ? 'Reg. Number:' : 'दर्ता नम्बर:'}</strong> 111</li>
                <li><strong>{lang === 'en' ? 'Registered At:' : 'दर्ता कार्यालय:'}</strong> Chief District Officer's Office, Kathmandu</li>
                <li><strong>{lang === 'en' ? 'Established:' : 'स्थापना मिति:'}</strong> 2081/07/26 B.S.</li>
              </ul>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             {/* Replace with actual image */}
            <div className="aspect-video bg-secondary rounded-2xl shadow-lg flex items-center justify-center text-gray-500 overflow-hidden">
               <img src="/assets/sdb-team.jpg" alt="SDB Team" className="object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-textMain mb-4">
            {lang === 'en' ? 'Our Core Values' : 'हाम्रा प्रमुख मूल्यहरू'}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-borderSoft text-center flex flex-col items-center group"
            >
              <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                {val.icon}
              </div>
              <h3 className="font-semibold text-textMain">{val.name[lang]}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
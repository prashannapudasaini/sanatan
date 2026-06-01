import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { 
  FileText, Shield, Heart, Leaf, Users, Eye, 
  History, Microscope, BookOpen, HandHeart 
} from 'lucide-react';

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

  const approaches = [
    {
      icon: <Microscope size={32} className="text-primary" />,
      title: { en: 'Scientific Research', np: 'वैज्ञानिक अनुसन्धान' },
      desc: { en: 'Validating ancient Vedic practices through modern scientific methodologies and laboratory research.', np: 'आधुनिक वैज्ञानिक विधि र प्रयोगशाला अनुसन्धानमार्फत प्राचीन वैदिक अभ्यासहरूको प्रमाणीकरण गर्दै।' }
    },
    {
      icon: <BookOpen size={32} className="text-primary" />,
      title: { en: 'Gurukul Education', np: 'गुरुकुल शिक्षा' },
      desc: { en: 'Empowering traditional Gurukuls with modern curriculum integration to create well-rounded scholars.', np: 'बहुआयामिक विद्वानहरू तयार गर्न आधुनिक पाठ्यक्रमलाई परम्परागत गुरुकुलहरूमा समावेश गर्दै।' }
    },
    {
      icon: <FileText size={32} className="text-primary" />,
      title: { en: 'Manuscript Preservation', np: 'पाण्डुलिपि संरक्षण' },
      desc: { en: 'Digitizing, translating, and securely archiving rare Sanatan scriptures for future generations.', np: 'भावी पुस्ताका लागि दुर्लभ सनातन शास्त्रहरूको डिजिटलाइजेसन, अनुवाद, र सुरक्षित भण्डारण गर्दै।' }
    },
    {
      icon: <HandHeart size={32} className="text-primary" />,
      title: { en: 'Community Service', np: 'सामुदायिक सेवा' },
      desc: { en: 'Applying the principle of "Seva" (Selfless Service) through disaster relief, healthcare, and poverty alleviation.', np: 'प्रकोप उद्धार, स्वास्थ्य सेवा, र गरिबी निवारणमार्फत "सेवा" (निःस्वार्थ सेवा) को सिद्धान्त लागू गर्दै।' }
    }
  ];

  // Placeholder for Team Members
  const team = [
    { name: 'Dr. Hari Prasad Sharma', role: { en: 'President / Lead Researcher', np: 'अध्यक्ष / प्रमुख अनुसन्धानकर्ता' }, img: '' },
    { name: 'Saraswati Acharya', role: { en: 'Secretary General', np: 'महासचिव' }, img: '' },
    { name: 'Ramesh Koirala', role: { en: 'Head of Education Wing', np: 'शिक्षा विभाग प्रमुख' }, img: '' },
  ];

  return (
    <div className="bg-background">
      
      {/* 1. Page Header */}
      <div className="bg-textMain py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/om-mandala.svg')] bg-center bg-cover"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'en' ? 'About SDB Nepal' : 'SDB नेपालको बारेमा'}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {lang === 'en' 
              ? 'Bridging ancient Vedic wisdom with modern scientific paradigms for the betterment of humanity.' 
              : 'मानव जातिको भलाइको लागि प्राचीन वैदिक ज्ञान र आधुनिक विज्ञानलाई जोड्दै।'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 2. Organization Overview & Registration */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-textMain mb-6 border-b-2 border-secondary pb-2 inline-block">
              {lang === 'en' ? 'Organization Overview' : 'संस्थाको सिंहावलोकन'}
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4 mb-6">
              <p>
                {lang === 'en' 
                  ? 'Sanatan Dharma Bigyan Samaj (SDB Nepal) is a non-governmental, non-political, and non-profit organization dedicated to the research, preservation, and education of Sanatan wisdom.' 
                  : 'सनातन धर्म विज्ञान समाज (SDB नेपाल) एक गैर-सरकारी, गैर-राजनीतिक र गैर-नाफामुखी संस्था हो जुन सनातन ज्ञानको अनुसन्धान, संरक्षण र शिक्षाको लागि समर्पित छ।'}
              </p>
              <p>
                {lang === 'en'
                  ? 'We firmly believe that the ancient texts—Vedas, Upanishads, and Puranas—hold profound scientific truths that are highly relevant to modern society. Our goal is to extract this knowledge and apply it to solve contemporary global challenges.'
                  : 'हामी दृढतापूर्वक विश्वास गर्छौं कि प्राचीन ग्रन्थहरू—वेद, उपनिषद् र पुराणहरूमा गहन वैज्ञानिक सत्यहरू लुकेका छन् जुन आधुनिक समाजको लागि अत्यधिक सान्दर्भिक छन्।'}
              </p>
            </div>
            
            <div className="bg-borderSoft p-6 rounded-2xl mt-6 border-l-4 border-primary shadow-sm">
              <h4 className="font-bold text-textMain mb-3 flex items-center gap-2">
                <Shield size={20} className="text-primary"/> 
                {lang === 'en' ? 'Official Registration Details' : 'आधिकारिक दर्ता विवरण'}
              </h4>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex justify-between border-b border-gray-300 pb-1"><strong>{lang === 'en' ? 'Organization Name:' : 'नाम:'}</strong> <span>SDB Nepal</span></li>
                <li className="flex justify-between border-b border-gray-300 pb-1"><strong>{lang === 'en' ? 'Registration Number:' : 'दर्ता नम्बर:'}</strong> <span>111</span></li>
                <li className="flex justify-between border-b border-gray-300 pb-1"><strong>{lang === 'en' ? 'Registered At:' : 'दर्ता कार्यालय:'}</strong> <span>CDO Office, Kathmandu</span></li>
                <li className="flex justify-between pb-1"><strong>{lang === 'en' ? 'Established:' : 'स्थापना मिति:'}</strong> <span>2081/07/26 B.S.</span></li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
              alt="Community Gathering" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
          </motion.div>
        </div>

        {/* 3. History & Motivation Section */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-24 border border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <History size={40} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-textMain mb-6">
              {lang === 'en' ? 'Our History & Motivation' : 'हाम्रो इतिहास र प्रेरणा'}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {lang === 'en'
                ? "In an era of rapid modernization, profound Vedic sciences, ethical frameworks, and spiritual disciplines are at risk of being misunderstood or entirely forgotten. Recognizing this critical gap, a group of scholars, scientists, and social workers came together in 2081 B.S. to form SDB Nepal."
                : "तीव्र आधुनिकीकरणको यस युगमा, गहन वैदिक विज्ञान, नैतिक ढाँचाहरू, र आध्यात्मिक अनुशासनहरू गलत बुझिने वा पूर्ण रूपमा बिर्सिने जोखिममा छन्। यस गम्भीर अभावलाई पहिचान गर्दै, २०८१ सालमा विद्वान, वैज्ञानिक र समाजसेवीहरूको समूह मिलेर SDB नेपाल स्थापना गरे।"}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {lang === 'en'
                ? "Our motivation stems from the belief that 'Dharma' is not a mere religion, but the scientific law that sustains the universe. By reviving this knowledge, we aim to build a society rooted in sustainability, mental peace, and technological harmony."
                : "हाम्रो प्रेरणा यो विश्वासबाट आउँछ कि 'धर्म' केवल धर्म मात्र होइन, तर ब्रह्माण्डलाई दिगो राख्ने वैज्ञानिक नियम हो। यस ज्ञानलाई पुनर्जीवित गरेर, हामी दिगोपन, मानसिक शान्ति र प्राविधिक सद्भावमा आधारित समाज निर्माण गर्ने लक्ष्य राख्छौं।"}
            </p>
          </div>
        </div>

        {/* 4. Our Approach / Methodology */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textMain mb-4">
              {lang === 'en' ? 'Our Approach' : 'हाम्रो कार्यशैली'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {lang === 'en' ? 'How we translate our vision into actionable impact.' : 'हामी हाम्रो दृष्टिकोणलाई कसरी प्रभावकारी कार्यमा परिणत गर्छौं।'}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-borderSoft hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="mb-6 bg-secondary/20 w-16 h-16 flex items-center justify-center rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-textMain mb-3">{item.title[lang]}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-textMain mb-4">
            {lang === 'en' ? 'Our Core Values' : 'हाम्रा प्रमुख मूल्यहरू'}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
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

        {/* 6. Executive Committee / Leadership */}
        <div className="bg-textMain text-white rounded-3xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              {lang === 'en' ? 'Executive Committee' : 'कार्यकारी समिति'}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {lang === 'en' 
                ? 'Meet the dedicated leaders guiding SDB Nepal towards its global mission.' 
                : 'SDB नेपाललाई यसको विश्वव्यापी लक्ष्यतर्फ डोर्याउने समर्पित नेतृत्वकर्ताहरूलाई चिन्नुहोस्।'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-primary/50 mb-4 shadow-lg"
                />
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-primary font-medium mt-1">{member.role[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
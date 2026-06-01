import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import Hero from '../components/Hero';
import { 
  BookOpen, Users, Landmark, Globe, Flower, Sun, Heart, 
  Layers, Scale, Infinity as InfinityIcon, Compass 
} from 'lucide-react';

const Home = () => {
  const { lang } = useContext(LangContext);

  // 1. NGO Statistics
  const stats = [
    { icon: <BookOpen size={32}/>, num: "50+", label: { en: "Publications", np: "प्रकाशनहरू" } },
    { icon: <Users size={32}/>, num: "1000+", label: { en: "Volunteers", np: "स्वयंसेवकहरू" } },
    { icon: <Landmark size={32}/>, num: "15", label: { en: "Gurukuls Supported", np: "समर्थित गुरुकुलहरू" } },
    { icon: <Globe size={32}/>, num: "10+", label: { en: "Research Projects", np: "अनुसन्धान परियोजनाहरू" } },
  ];

  // 2. Britannica Virtues
  const virtues = [
    { en: "Honesty & Truth", np: "सत्य र इमानदारी" },
    { en: "Non-violence (Ahimsa)", np: "अहिंसा" },
    { en: "Purity & Goodwill", np: "पवित्रता र सद्भाव" },
    { en: "Patience & Self-restraint", np: "धैर्यता र आत्म-संयम" }
  ];

  // 3. Dharmik Vibes Pillars
  const pillars = [
    { 
      title: { en: "Satya (Truth)", np: "सत्य" }, 
      desc: { en: "The absolute cosmic reality and honesty in thought, speech, and action.", np: "परम ब्रह्माण्डीय यथार्थ र विचार, वाणी तथा कर्ममा इमानदारी।" } 
    },
    { 
      title: { en: "Daya (Compassion)", np: "दया" }, 
      desc: { en: "Empathy and kindness toward all living beings, recognizing the divine in everyone.", np: "सबै जीवित प्राणीहरू प्रति समानुभूति र दया, जसमा ईश्वरीय अंश देख्नु।" } 
    },
    { 
      title: { en: "Tapa (Austerity)", np: "तप" }, 
      desc: { en: "Self-discipline, mental strength, and dedication to higher spiritual goals.", np: "आत्म-अनुशासन, मानसिक शक्ति, र उच्च आध्यात्मिक लक्ष्यहरूमा समर्पण।" } 
    },
    { 
      title: { en: "Pavitrata (Purity)", np: "पवित्रता" }, 
      desc: { en: "Internal cleanliness of thoughts and external cleanliness of life.", np: "विचारहरूको आन्तरिक शुद्धता र जीवनको बाह्य निर्मलता।" } 
    }
  ];

  // 4. Dharmik Vibes Cosmic Laws
  const cosmicLaws = [
    {
      icon: <Scale className="text-primary w-8 h-8" />,
      title: { en: "Law of Karma", np: "कर्मको नियम" },
      desc: { en: "The infallible cosmic law of cause and effect. Every action generates an equivalent energy that returns to the doer.", np: "कार्य र कारणको अचुक नियम। हरेक कार्यले एक समान ऊर्जा उत्पन्न गर्छ जुन कर्ताकहाँ नै फर्किन्छ।" }
    },
    {
      icon: <InfinityIcon className="text-primary w-8 h-8" />,
      title: { en: "Samsara (Rebirth)", np: "संसार (पुनर्जन्म)" },
      desc: { en: "The continuous cycle of birth, death, and rebirth aimed at evolutionary growth of the soul.", np: "आत्माको क्रमिक विकासको लागि जन्म, मृत्यु र पुनर्जन्मको निरन्तर चक्र।" }
    },
    {
      icon: <Compass className="text-primary w-8 h-8" />,
      title: { en: "Moksha (Liberation)", np: "मोक्ष (मुक्ति)" },
      desc: { en: "The ultimate destination—liberation from the cycle of rebirth and absolute alignment with the cosmic consciousness.", np: "परम गन्तव्य—पुनर्जन्मको चक्रबाट मुक्ति र ब्रह्माण्डीय चेतनासँग एकाकार।" }
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* SECTION 1: Who We Are (Stats) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
              {lang === 'en' ? 'Who We Are' : 'हाम्रो परिचय'}
            </h2>
            <p className="text-lg text-gray-600">
              {lang === 'en' 
                ? "Established in 2081 B.S., SDB Nepal is a registered non-governmental, non-political, and non-profit organization dedicated to bridging eternal Vedic wisdom with modern scientific understanding." 
                : "२०८१ सालमा स्थापित SDB नेपाल एक दर्ताकृत गैर-सरकारी, गैर-राजनीतिक र गैर-नाफामुखी संस्था हो जसले सनातन वैदिक ज्ञानलाई आधुनिक विज्ञानसँग जोड्ने काम गर्छ।"}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center p-6 bg-borderSoft rounded-2xl shadow-sm hover:shadow-md transition group"
              >
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <h4 className="text-3xl font-bold text-textMain mb-1">{stat.num}</h4>
                <p className="text-gray-600 text-center font-medium">{stat.label[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: What is Sanatan Dharma? (Britannica Content) */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sun className="text-primary" size={28} />
                <h2 className="text-3xl md:text-4xl font-bold text-textMain">
                  {lang === 'en' ? 'What is Sanatan Dharma?' : 'सनातन धर्म के हो?'}
                </h2>
              </div>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {lang === 'en'
                    ? 'Often translated as the "eternal religion" or "eternal duty," Sanatan Dharma represents the absolute set of duties ordained for all individuals. It is the universal foundation that connects humanity to spiritual truth.'
                    : 'प्रायः "शाश्वत धर्म" वा "शाश्वत कर्तव्य" भनेर अनुवाद गरिने सनातन धर्मले सबै व्यक्तिहरूका लागि लागू हुने निरपेक्ष कर्तव्यहरूको प्रतिनिधित्व गर्दछ। यो मानवतालाई आध्यात्मिक सत्यसँग जोड्ने विश्वव्यापी आधार हो।'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'Unlike specific duties that depend on one\'s class or stage of life (Svadharma), Sanatan Dharma transcends social boundaries. It calls upon every individual to practice universal virtues for the betterment of society and the soul.'
                    : 'कुनै व्यक्तिको वर्ग वा जीवनको चरणमा निर्भर हुने विशिष्ट कर्तव्यहरू (स्वधर्म) भन्दा फरक, सनातन धर्म सामाजिक सीमाहरूभन्दा माथि छ। यसले समाज र आत्माको भलाइको लागि हरेक व्यक्तिलाई विश्वव्यापी सद्गुणहरूको अभ्यास गर्न आह्वान गर्दछ।'}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {virtues.map((virtue, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-textMain font-medium">
                    <Heart className="text-primary w-4 h-4" />
                    <span>{virtue[lang]}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform scale-110"></div>
              <div className="relative w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-white z-10">
                <Flower className="w-32 h-32 text-primary" strokeWidth={1.2} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Essence & Pillars (Dharmik Vibes Content) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">
                {lang === 'en' ? 'The Essence & Philosophy' : 'सार र दर्शन'}
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  {lang === 'en'
                    ? 'Unlike structured belief systems, Sanatan Dharma is not a historical religion founded by a single prophet. It translates directly to "The Eternal Law" or "The Perennial Way of Life"—a framework of natural, cosmic principles meant to sustain human consciousness and environmental balance.'
                    : 'संरचित विश्वास प्रणालीहरू भन्दा फरक, सनातन धर्म कुनै एक पैगम्बर वा ऐतिहासिक व्यक्तिद्वारा स्थापित धर्म होइन। यसको सीधा अर्थ "शाश्वत नियम" वा "जीवनको शाश्वत मार्ग" हो—मानव चेतना र पर्यावरणीय सन्तुलनलाई जोगाउन बनेको ब्रह्माण्डीय नियम।'}
                </p>
                <p>
                  {lang === 'en'
                    ? 'Rooted in timeless Vedic texts, it presents an elegant concept where everything in existence is interconnected. While modern labels group it as "Hinduism," its core philosophy is entirely universal.'
                    : 'कालजयी वैदिक ग्रन्थहरूमा आधारित यो दर्शनले ब्रह्माण्डका प्रत्येक तत्व एकअर्कासँग जोडिएको उत्कृष्ट अवधारणा प्रस्तुत गर्दछ। आधुनिक समयमा यसलाई "हिन्दू धर्म" भनिए तापनि, यसको मूल दर्शन पूर्ण रूपमा विश्वव्यापी छ।'}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {pillars.map((pillar, idx) => (
                <div key={idx} className="bg-borderSoft/30 p-6 rounded-2xl shadow-sm border-t-4 border-primary/70">
                  <h4 className="font-bold text-xl text-primary mb-2 flex items-center gap-2">
                    <Layers size={18} /> {pillar.title[lang]}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc[lang]}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Cosmic Realities Section (Karma, Samsara, Moksha) */}
      <section className="py-20 bg-secondary/10 border-y border-borderSoft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-textMain mb-4">
              {lang === 'en' ? 'Universal Cosmic Principles' : 'विश्वव्यापी ब्रह्माण्डीय सिद्धान्तहरू'}
            </h2>
            <p className="text-gray-600">
              {lang === 'en'
                ? 'Sanatan Dharma operates under natural, immutable laws that govern the evolution of life and soul.'
                : 'सनातन धर्म प्राकृतिक र अपरिवर्तनीय नियमहरू अन्तर्गत सञ्चालित हुन्छ जसले जीवन र आत्माको विकासलाई निर्देशित गर्दछ।'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cosmicLaws.map((law, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-borderSoft hover:shadow-xl transition duration-300"
              >
                <div className="mb-4 bg-primary/5 p-3 rounded-xl inline-block">{law.icon}</div>
                <h3 className="text-xl font-bold text-textMain mb-2">{law.title[lang]}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{law.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Vision & Mission Section */}
      <section className="py-20 bg-textMain relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
           <img src="/assets/om-mandala.svg" alt="mandala pattern" className="w-[500px] h-[500px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <Globe /> {lang === 'en' ? 'Our Vision' : 'हाम्रो दृष्टिकोण'}
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                {lang === 'en' 
                  ? "To become a globally respected institution dedicated to the scientific understanding, preservation, and promotion of eternal wisdom systems rooted in the Vedas, Puranas, Upanishads, Geeta, and Tripiṭaka." 
                  : "वेद, पुराण, उपनिषद्, गीता, त्रिपिटक लगायत सनातन शास्त्रहरूको ज्ञान, संरक्षण र प्रचारप्रसार गर्ने विश्वस्तरीय संस्था बन्नु।"}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <Landmark /> {lang === 'en' ? 'Our Mission' : 'हाम्रो लक्ष्य'}
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                {lang === 'en' 
                  ? "To research, teach, translate, and apply spiritual-scientific knowledge through education, service, communication, and robust institutional development." 
                  : "शिक्षा, समाजसेवा, सञ्चार तथा संस्था विकासमार्फत सनातन ज्ञानको अनुसन्धान, शिक्षा, अनुवाद तथा प्रयोग गर्नु।"}
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
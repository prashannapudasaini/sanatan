import React, { useContext } from 'react';
import { LangContext } from '../App';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

// Custom SVG for Facebook (Since Lucide removed it)
const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// Custom SVG for YouTube (Since Lucide removed it)
const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Footer = () => {
  const { lang } = useContext(LangContext);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-textMain text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Col */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">SDB Nepal</h3>
            <p className="text-gray-300 mb-6">
              {lang === 'en' 
                ? '"Preserving Eternal Wisdom for Future Generations"'
                : '"भावी पुस्ताका लागि सनातन ज्ञानको संरक्षण"'}
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary transition"><FacebookIcon size={24} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-primary transition"><YoutubeIcon size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">
              {lang === 'en' ? 'Quick Links' : 'द्रुत लिङ्कहरू'}
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/programs" className="hover:text-white transition">Our Programs</a></li>
              <li><a href="/library" className="hover:text-white transition">Digital Library</a></li>
              <li><a href="/membership" className="hover:text-white transition">Become a Member</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2 inline-block">
              {lang === 'en' ? 'Contact Us' : 'सम्पर्क गर्नुहोस्'}
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <span>Thali (Kageshwori Manohara-05), Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+977 9843549625, 9741766637</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>sdbnepal.org@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {year} Sanatan Dharma Bigyan Samaj. All Rights Reserved.</p>
<p>
                                                         Design and developed by Motionage
          </p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={14} className="text-primary" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
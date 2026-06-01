import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { QrCode, Building, ShieldCheck } from 'lucide-react';

const Donate = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="py-16 bg-borderSoft/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-textMain mb-4">
            {lang === 'en' ? 'Support Our Mission' : 'हाम्रो अभियानलाई समर्थन गर्नुहोस्'}
          </h1>
          <p className="text-gray-600">
            {lang === 'en' 
              ? 'Your contribution helps us preserve eternal wisdom, support Gurukuls, and serve the community. 100% transparent fund utilization.'
              : 'तपाईंको योगदानले हामीलाई सनातन ज्ञानको संरक्षण गर्न, गुरुकुलहरूलाई समर्थन गर्न र समुदायको सेवा गर्न मद्दत गर्दछ।'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bank Transfer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-borderSoft pb-4">
              <Building className="text-primary w-8 h-8" />
              <h3 className="text-xl font-bold text-textMain">
                {lang === 'en' ? 'Bank Transfer' : 'बैंक ट्रान्सफर'}
              </h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p><strong>Account Name:</strong> Sanatan Dharma Bigyan Samaj</p>
              <p><strong>Bank Name:</strong> Nepal Bank Limited / Global IME</p>
              <p><strong>Account Number:</strong> 0000-0000-0000-0000</p>
              <p><strong>Branch:</strong> Kathmandu</p>
            </div>
          </motion.div>

          {/* eSewa / FonePay QR */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md text-center flex flex-col items-center justify-center"
          >
             <div className="flex items-center gap-3 mb-6 w-full justify-center border-b border-borderSoft pb-4">
              <QrCode className="text-primary w-8 h-8" />
              <h3 className="text-xl font-bold text-textMain">
                {lang === 'en' ? 'Scan & Pay' : 'स्क्यान र भुक्तानी'}
              </h3>
            </div>
            <div className="w-48 h-48 bg-secondary rounded-lg mb-4 flex items-center justify-center text-gray-500">
              {/* Replace with actual QR Code Image */}
              [ QR Code Here ]
            </div>
            <p className="text-sm text-gray-500">Supports eSewa, Khalti, and FonePay</p>
          </motion.div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-green-100 flex items-start gap-4">
          <ShieldCheck className="text-green-600 w-8 h-8 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-textMain mb-1">
              {lang === 'en' ? 'Trust & Transparency' : 'विश्वास र पारदर्शिता'}
            </h4>
            <p className="text-sm text-gray-600">
              {lang === 'en' 
                ? 'We maintain a strict Audit Transparency Score. Annual reports and fund utilization metrics are published publicly in our Library section.' 
                : 'हामी कडा लेखापरीक्षण पारदर्शिता कायम राख्छौं। वार्षिक प्रतिवेदनहरू हाम्रो पुस्तकालय खण्डमा सार्वजनिक गरिन्छ।'}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;
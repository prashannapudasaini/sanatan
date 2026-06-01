import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import api from '../services/api';

const Contact = () => {
  const { lang } = useContext(LangContext);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Endpoint to map to backend/api/contact/send.php
      await api.post('/contact/send.php', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-textMain mb-4">
            {lang === 'en' ? 'Contact Us' : 'सम्पर्क गर्नुहोस्'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Have questions or want to join our mission? Reach out to us.'
              : 'कुनै प्रश्न छ वा हाम्रो अभियानमा सामेल हुन चाहनुहुन्छ? हामीलाई सम्पर्क गर्नुहोस्।'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary"><MapPin /></div>
              <div>
                <h4 className="font-bold text-textMain">{lang === 'en' ? 'Address' : 'ठेगाना'}</h4>
                <p className="text-gray-600 text-sm">Thali (Kageshwori Manohara-05),<br/>Kathmandu, Nepal</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary"><Phone /></div>
              <div>
                <h4 className="font-bold text-textMain">{lang === 'en' ? 'Phone' : 'फोन'}</h4>
                <p className="text-gray-600 text-sm">+977 9843549625<br/>+977 9741766637<br/>+977 9843233944<br/>+977 9841448898</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary"><Mail /></div>
              <div>
                <h4 className="font-bold text-textMain">{lang === 'en' ? 'Email & Web' : 'इमेल र वेबसाइट'}</h4>
                <p className="text-gray-600 text-sm">sdbnepal.org@gmail.com<br/>www.sdbnepal.org.np</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary"><Clock /></div>
              <div>
                <h4 className="font-bold text-textMain">{lang === 'en' ? 'Office Hours' : 'कार्यालय समय'}</h4>
                <p className="text-gray-600 text-sm">Sun - Fri: 10:00 AM - 5:00 PM<br/>Saturday Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-borderSoft"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'en' ? 'Full Name' : 'पूरा नाम'}</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'en' ? 'Email Address' : 'इमेल ठेगाना'}</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'en' ? 'Phone Number' : 'फोन नम्बर'}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{lang === 'en' ? 'Your Message' : 'तपाईंको सन्देश'}</label>
                <textarea 
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : <><Send size={18} /> {lang === 'en' ? 'Send Message' : 'सन्देश पठाउनुहोस्'}</>}
              </button>

              {status === 'success' && <p className="text-green-600 text-center mt-2">{lang === 'en' ? 'Message sent successfully!' : 'सन्देश सफलतापूर्वक पठाइयो!'}</p>}
              {status === 'error' && <p className="text-red-600 text-center mt-2">{lang === 'en' ? 'Error sending message. Please try again.' : 'सन्देश पठाउन त्रुटि भयो। कृपया फेरि प्रयास गर्नुहोस्।'}</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
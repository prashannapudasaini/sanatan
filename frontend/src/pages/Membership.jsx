import React, { useState, useContext } from 'react';
import { LangContext } from '../App';
import { UserPlus, Send } from 'lucide-react';
import api from '../services/api';

const Membership = () => {
  const { lang } = useContext(LangContext);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', address: '', occupation: '', type: 'General', interests: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await api.post('/memberships/apply.php', formData);
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', address: '', occupation: '', type: 'General', interests: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="py-16 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <UserPlus className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-textMain mb-2">
            {lang === 'en' ? 'Become a Member' : 'सदस्य बन्नुहोस्'}
          </h1>
          <p className="text-gray-600">
            {lang === 'en' ? 'Join our global family dedicated to Sanatan Dharma.' : 'सनातन धर्ममा समर्पित हाम्रो विश्वव्यापी परिवारमा सामेल हुनुहोस्।'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-borderSoft space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="text" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
              <input type="text" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none" value={formData.occupation} onChange={(e) => setFormData({...formData, occupation: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input type="text" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Membership Type</label>
            <select className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
              <option value="General">General Member</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Research">Research Member</option>
              <option value="Lifetime">Lifetime Member</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest / Message</label>
            <textarea rows="3" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary outline-none resize-none" value={formData.interests} onChange={(e) => setFormData({...formData, interests: e.target.value})}></textarea>
          </div>

          <button type="submit" disabled={status === 'submitting'} className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2">
            {status === 'submitting' ? 'Submitting...' : <><Send size={18}/> Submit Application</>}
          </button>
          
          {status === 'success' && <p className="text-green-600 text-center font-medium">Application submitted successfully! We will contact you soon.</p>}
        </form>
      </div>
    </div>
  );
};

export default Membership;
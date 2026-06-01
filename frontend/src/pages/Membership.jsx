import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { LangContext } from '../App';
import { 
  Users, CreditCard, Building2, Smartphone, DollarSign, 
  Loader2, CheckCircle2, XCircle, ShieldCheck, HeartHandshake, ArrowRight 
} from 'lucide-react';

// --- Static Data ---
const membershipTypes = [
  {
    id: "basic", name: "Basic Membership", fee: 500, duration: "1 Year",
    benefits: ["Access to all events", "Monthly newsletter", "Community forum access", "Basic library access"],
  },
  {
    id: "premium", name: "Premium Membership", fee: 2000, duration: "1 Year",
    benefits: ["All Basic benefits", "Priority event booking", "Exclusive content access", "Full library access", "Personal consultation"],
  },
  {
    id: "lifetime", name: "Lifetime Membership", fee: 25000, duration: "Lifetime",
    benefits: ["All Premium benefits", "Lifetime access", "VIP event access", "Annual recognition", "Advisory board invitation"],
  },
];

const paymentMethods = [
  { id: "esewa", name: "eSewa", icon: Smartphone, description: "Pay with eSewa digital wallet" },
  { id: "cash", name: "Cash Payment", icon: DollarSign, description: "Pay cash at our office" },
];

const Membership = () => {
  const { lang } = useContext(LangContext);
  const [activeTab, setActiveTab] = useState('apply'); // 'apply', 'check', 'login'

  // --- APPLICATION STATE ---
  const [isApplying, setIsApplying] = useState(false);
  const [applyError, setApplyError] = useState("");
  const [applySuccess, setApplySuccess] = useState("");
  const [formData, setFormData] = useState({
    membershipType: "", paymentMethod: "", fullName: "", email: "", phone: "", dateOfBirth: "", gender: "", nationality: "",
    currentAddress: "", permanentAddress: "", city: "", state: "", country: "", postalCode: "",
    occupation: "", organization: "", designation: "", emergencyContactName: "", emergencyContactPhone: "", emergencyContactRelation: "",
    profilePhoto: "", identityDocument: "", interests: "", experience: "", motivation: "", referredBy: "",
    agreeTerms: false, agreePrivacy: false, receiveUpdates: true,
  });
  const selectedMembership = membershipTypes.find((type) => type.id === formData.membershipType);

  // --- CHECK STATUS STATE ---
  const [isChecking, setIsChecking] = useState(false);
  const [checkData, setCheckData] = useState({ serialNumber: "", registrationDate: "" });
  const [checkResult, setCheckResult] = useState(null);

  // --- LOGIN STATE ---
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginData, setLoginData] = useState({ serialNumber: "", password: "" });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  // --- HANDLERS (Connected to PHP Backend) ---
  const handleApply = async (e) => {
    e.preventDefault();
    setApplyError(""); setApplySuccess(""); setIsApplying(true);
    try {
      if (!formData.membershipType) throw new Error("Please select a membership type");
      if (!formData.paymentMethod) throw new Error("Please select a payment method");
      if (!formData.agreeTerms || !formData.agreePrivacy) throw new Error("Please agree to the terms and privacy policy");
      
      const response = await fetch("http://localhost/sdb/backend/api/membership/apply.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if(data.status) {
         setApplySuccess("Your membership application has been submitted successfully!");
         // Reset form optionally
         setFormData({...formData, fullName: "", email: "", phone: "", agreeTerms: false, agreePrivacy: false});
      } else {
         throw new Error(data.message || "Failed to submit application");
      }
    } catch (err) {
      setApplyError(err.message || "An error occurred connecting to the server");
    } finally {
      setIsApplying(false);
    }
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    setIsChecking(true); setCheckResult(null);
    try {
      const response = await fetch("http://localhost/sdb/backend/api/membership/check.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkData)
      });

      const data = await response.json();
      setCheckResult({ status: data.status, message: data.message });

    } catch (err) {
      setCheckResult({ status: "not-found", message: "Failed to connect to the server. Please try again later." });
    } finally {
      setIsChecking(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true); setLoginError("");
    try {
      const response = await fetch("http://localhost/sdb/backend/api/auth/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if(data.status) {
          if(data.token) localStorage.setItem('sdb_token', data.token);
          setLoginSuccess(true);
      } else {
          throw new Error(data.message || "Invalid serial number or password.");
      }
    } catch (err) {
      setLoginError(err.message || "An error occurred connecting to the server");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Hero Section */}
      <div className="bg-textMain py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=1500&auto=format&fit=crop" alt="Community" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <Users className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'en' ? 'SDB Nepal Membership' : 'SDB नेपाल सदस्यता'}
          </h1>
          <p className="text-xl text-gray-200">
            {lang === 'en' ? 'Join Sanatan Dharma Bigyan Samaj and become part of our growing community dedicated to eternal wisdom.' : 'सनातन धर्म विज्ञान समाजमा सामेल हुनुहोस् र हाम्रो बढ्दो समुदायको हिस्सा बन्नुहोस्।'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        
        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col sm:flex-row gap-2 mb-12 max-w-3xl mx-auto">
          <button onClick={() => setActiveTab('apply')} className={`flex-1 py-3 px-4 rounded-xl font-bold transition ${activeTab === 'apply' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            Apply for Membership
          </button>
          <button onClick={() => setActiveTab('check')} className={`flex-1 py-3 px-4 rounded-xl font-bold transition ${activeTab === 'check' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            Check Status
          </button>
          <button onClick={() => setActiveTab('login')} className={`flex-1 py-3 px-4 rounded-xl font-bold transition ${activeTab === 'login' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}>
            Member Login
          </button>
        </div>

        {/* --- TAB CONTENT: APPLY --- */}
        {activeTab === 'apply' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-borderSoft p-8">
              <h2 className="text-2xl font-bold text-textMain mb-2 flex items-center gap-2">
                <Users className="text-primary" /> Membership Application Form
              </h2>
              <p className="text-gray-500 mb-8">Please fill in all required information accurately.</p>
              
              <form onSubmit={handleApply} className="space-y-8">
                
                {/* 1. Membership Type */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold border-b pb-2">Membership Type *</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {membershipTypes.map((type) => (
                      <label key={type.id} className={`border-2 rounded-xl p-4 cursor-pointer transition ${formData.membershipType === type.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <input type="radio" name="membershipType" value={type.id} checked={formData.membershipType === type.id} onChange={(e) => setFormData({ ...formData, membershipType: e.target.value })} className="text-primary focus:ring-primary" />
                          <span className="font-bold text-textMain">{type.name}</span>
                        </div>
                        <div className="text-primary font-bold mb-2">NPR {type.fee.toLocaleString()} <span className="text-sm text-gray-500 font-normal">({type.duration})</span></div>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {type.benefits.map((b, i) => <li key={i}>• {b}</li>)}
                        </ul>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 2. Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold border-b pb-2">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label><input required type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label><input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label><input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label><input type="date" value={formData.dateOfBirth} onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <select value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
                        <option value="">Select Gender</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option>
                      </select>
                    </div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label><input type="text" value={formData.nationality} onChange={(e) => setFormData({...formData, nationality: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                  </div>
                </div>

                {/* 3. Address & Professional */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold border-b pb-2">Address & Professional Info</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">Current Address</label><input type="text" value={formData.currentAddress} onChange={(e) => setFormData({...formData, currentAddress: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">Permanent Address</label><input type="text" value={formData.permanentAddress} onChange={(e) => setFormData({...formData, permanentAddress: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label><input type="text" value={formData.occupation} onChange={(e) => setFormData({...formData, occupation: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                     <div><label className="block text-sm font-medium text-gray-700 mb-1">Organization</label><input type="text" value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" /></div>
                  </div>
                </div>

                {/* 4. Payment Method */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold border-b pb-2">Payment Method *</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {paymentMethods.map((method) => (
                      <label key={method.id} className={`border rounded-lg p-3 cursor-pointer flex items-center gap-3 transition ${formData.paymentMethod === method.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                        <input type="radio" name="paymentMethod" value={method.id} checked={formData.paymentMethod === method.id} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} className="text-primary focus:ring-primary" />
                        <div>
                          <p className="font-bold text-sm text-textMain">{method.name}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 5. Agreements & Submit */}
                <div className="space-y-3 bg-gray-50 p-6 rounded-xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={formData.agreeTerms} onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})} className="w-5 h-5 text-primary rounded focus:ring-primary" />
                    <span className="text-sm text-gray-700">I agree to the terms and conditions *</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={formData.agreePrivacy} onChange={(e) => setFormData({...formData, agreePrivacy: e.target.checked})} className="w-5 h-5 text-primary rounded focus:ring-primary" />
                    <span className="text-sm text-gray-700">I agree to the privacy policy *</span>
                  </label>
                </div>

                {applyError && <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">{applyError}</div>}
                {applySuccess && <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg">{applySuccess}</div>}

                <button type="submit" disabled={isApplying} className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition flex justify-center items-center gap-2 disabled:opacity-70">
                  {isApplying ? <><Loader2 className="animate-spin" /> Processing...</> : <><Users /> Submit Application {selectedMembership && `(NPR ${selectedMembership.fee.toLocaleString()})`}</>}
                </button>
              </form>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-lg border border-borderSoft p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><ShieldCheck className="text-primary"/> Membership Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2 items-center"><div className="w-2 h-2 bg-primary rounded-full"></div> Access to all events</li>
                  <li className="flex gap-2 items-center"><div className="w-2 h-2 bg-primary rounded-full"></div> Library access</li>
                  <li className="flex gap-2 items-center"><div className="w-2 h-2 bg-primary rounded-full"></div> Community network</li>
                  <li className="flex gap-2 items-center"><div className="w-2 h-2 bg-primary rounded-full"></div> Special discounts</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-3xl shadow-lg border border-borderSoft overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Join Us" className="w-full h-48 object-cover" />
                 <div className="p-6">
                   <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><HeartHandshake className="text-primary"/> Why Join Us?</h3>
                   <p className="text-sm text-gray-600 mb-4">By becoming a member, you directly support the preservation of ancient Vedic wisdom and help us provide education and relief to those in need across Nepal.</p>
                   <p className="text-xs font-bold text-primary">Processing Time: 3-5 business days.</p>
                 </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- TAB CONTENT: CHECK STATUS --- */}
        {activeTab === 'check' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-borderSoft p-8">
              <h2 className="text-2xl font-bold text-textMain mb-2">Check Status</h2>
              <p className="text-gray-500 mb-8 text-sm">Enter your serial number and registration date to check your membership status.</p>
              
              <form onSubmit={handleCheck} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Serial Number</label>
                  <input required type="text" value={checkData.serialNumber} onChange={(e) => setCheckData({...checkData, serialNumber: e.target.value})} placeholder="Enter your serial number" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Registration Date</label>
                  <input required type="date" value={checkData.registrationDate} onChange={(e) => setCheckData({...checkData, registrationDate: e.target.value})} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <button type="submit" disabled={isChecking} className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 disabled:opacity-70 mt-4">
                  {isChecking ? "Checking..." : "Check Status"}
                </button>
              </form>

              {checkResult && (
                <div className={`mt-6 p-4 rounded-xl flex gap-3 ${checkResult.status === 'active' ? 'bg-green-50 text-green-800 border border-green-200' : checkResult.status === 'expired' ? 'bg-amber-50 text-amber-800 border border-amber-200' : checkResult.status === 'pending' ? 'bg-blue-50 text-blue-800 border border-blue-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                  {checkResult.status === 'active' ? <CheckCircle2 className="shrink-0 text-green-600"/> : <XCircle className="shrink-0"/>}
                  <p className="text-sm font-medium">{checkResult.message}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* --- TAB CONTENT: LOGIN --- */}
        {activeTab === 'login' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-borderSoft p-8">
              
              {loginSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Login Successful</h2>
                  <p className="text-gray-600 mb-8">You have successfully logged in to your membership account.</p>
                  <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition">
                    Go to Dashboard
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-textMain mb-2">Member Login</h2>
                  <p className="text-gray-500 mb-8 text-sm">Enter your serial number and password to access your account.</p>
                  
                  {loginError && <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm">{loginError}</div>}

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Serial Number</label>
                      <input required type="text" value={loginData.serialNumber} onChange={(e) => setLoginData({...loginData, serialNumber: e.target.value})} placeholder="Enter your serial number" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input required type="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} placeholder="Enter your password" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                    </div>
                    <button type="submit" disabled={isLoggingIn} className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 disabled:opacity-70 mt-4">
                      {isLoggingIn ? "Logging in..." : "Login"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default Membership;
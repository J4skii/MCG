import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { UserProfile } from '../types';
import { validateEmail, validateRequired, validateSouthAfricanPhone, validateCIPC } from '../utils/validators';
import { Check, ChevronRight, Upload, Briefcase, User } from 'lucide-react';

interface RegisterProps {
  onSuccess: () => void;
}

const Register: React.FC<RegisterProps> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    type: 'entrepreneur',
    documents: []
  });
  const [user, setUser] = useLocalStorage<UserProfile | null>('mcg_user', null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleNext = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!validateRequired(formData.name || '')) newErrors.name = 'Name is required';
      
      if (!validateRequired(formData.email || '')) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email || '')) {
        newErrors.email = 'Please enter a valid email address';
      }

      if (formData.phone && !validateSouthAfricanPhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid SA phone number (e.g., 082 123 4567)';
      }
    } else if (step === 2) {
      if (!validateRequired(formData.companyName || '')) newErrors.companyName = 'Company name is required';
      
      if (formData.type === 'entrepreneur') {
        if (!validateRequired(formData.regNumber || '')) {
           newErrors.regNumber = 'Registration number is required';
        } else if (!validateCIPC(formData.regNumber || '')) {
           newErrors.regNumber = 'Invalid format. Use YYYY/NNNNNN/NN';
        }
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final Submit
      const newUser: UserProfile = {
        id: Math.random().toString(36).substr(2, 9),
        registrationDate: new Date().toISOString(),
        isVerified: false,
        status: 'pending',
        documents: ['kyc_docs_simulated.pdf'],
        ...formData as UserProfile
      };
      setUser(newUser);
      onSuccess();
    }
  };

  const handleTypeSelect = (type: 'entrepreneur' | 'funder') => {
    setFormData({ ...formData, type });
  };

  return (
    <div className="py-16 bg-slate-950 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-4">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span className={step >= 1 ? 'text-blue-300' : ''}>Basic Info</span>
            <span className={step >= 2 ? 'text-blue-300' : ''}>Details</span>
            <span className={step >= 3 ? 'text-blue-300' : ''}>Verification</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
             <div 
               className="h-full bg-blue-500 transition-all duration-500 ease-out" 
               style={{ width: `${(step / 3) * 100}%` }}
             ></div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            {step === 1 && "Let's get started"}
            {step === 2 && "Tell us about your organization"}
            {step === 3 && "Verification Documents"}
          </h2>

          {/* Step 1: Basic Info & Type */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => handleTypeSelect('entrepreneur')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                    formData.type === 'entrepreneur' 
                    ? 'border-blue-400 bg-blue-500/10 text-blue-200' 
                    : 'border-slate-700 hover:border-blue-400'
                  }`}
                >
                  <User size={24} />
                  <span className="font-bold text-sm">Entrepreneur</span>
                </button>
                <button 
                  onClick={() => handleTypeSelect('funder')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                    formData.type === 'funder' 
                    ? 'border-yellow-400 bg-yellow-500/10 text-yellow-200' 
                    : 'border-slate-700 hover:border-yellow-400'
                  }`}
                >
                  <Briefcase size={24} />
                  <span className="font-bold text-sm">Funder</span>
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.name || ''}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Jared Pillay"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    value={formData.email || ''}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Phone Number <span className="text-slate-500 font-normal">(Optional)</span></label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    value={formData.phone || ''}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="082 123 4567"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="space-y-6">
               <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Company / Entity Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  value={formData.companyName || ''}
                  onChange={e => setFormData({...formData, companyName: e.target.value})}
                />
                 {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
              </div>

              {formData.type === 'entrepreneur' ? (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">CIPC Registration Number</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    value={formData.regNumber || ''}
                    onChange={e => setFormData({...formData, regNumber: e.target.value})}
                    placeholder="2024/123456/07"
                  />
                  {errors.regNumber && <p className="text-red-500 text-xs mt-1">{errors.regNumber}</p>}
                  <p className="text-xs text-slate-500 mt-1">Format: YYYY/NNNNNN/NN</p>
                </div>
              ) : (
                 <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Estimated Fund Size / Allocation (ZAR)</label>
                  <select 
                     className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-950 text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                     value={formData.fundSize || ''}
                     onChange={e => setFormData({...formData, fundSize: e.target.value})}
                  >
                    <option value="">Select range...</option>
                    <option value="10m-50m">R10m - R50m</option>
                    <option value="50m-200m">R50m - R200m</option>
                    <option value="200m+">R200m+</option>
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Simulation of Upload */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 mb-6 hover:bg-slate-900 transition-colors cursor-pointer group">
                 <div className="w-16 h-16 bg-blue-500/10 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                   <Upload size={24} />
                 </div>
                 <h4 className="font-bold text-slate-100">Upload KYC Documents</h4>
                 <p className="text-sm text-slate-400 mt-2">Drag and drop or click to upload<br/>(CIPC, Tax Clearance, ID Copies)</p>
              </div>

              <div className="bg-yellow-500/10 text-yellow-200 text-sm p-4 rounded-lg flex items-start gap-3 text-left">
                <div className="mt-0.5 font-bold text-yellow-300">Note:</div>
                <p>For this demo, clicking "Complete" will simulate a successful upload and create your local profile.</p>
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-between items-center">
            {step > 1 ? (
              <button 
                onClick={() => setStep(step - 1)}
                className="text-slate-400 font-semibold hover:text-slate-200 transition-colors"
              >
                Back
              </button>
            ) : <div></div>}
            
            <button 
              onClick={handleNext}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
            >
              {step === 3 ? 'Complete Registration' : 'Continue'}
              {step < 3 && <ChevronRight size={18} />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
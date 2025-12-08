import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { UserProfile, ProcessStep } from '../types';
import { ShieldCheck, Clock, AlertCircle, FileText, CheckCircle2, Edit2, X, Save, ArrowRight } from 'lucide-react';
import { validateCIPC, validateSouthAfricanPhone } from '../utils/validators';
import { ENTREPRENEUR_FLOW, FUNDER_FLOW } from '../data/processMap';

interface DashboardProps {
    onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [user, setUser] = useLocalStorage<UserProfile | null>('mcg_user', null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<UserProfile>>({});
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Simulate loading local data
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (user) {
      setEditForm(user);
    }
  }, [user]);

  const handleSaveProfile = () => {
    if (!editForm) return;

    const newErrors: Record<string, string> = {};
    if (!editForm.name?.trim()) newErrors.name = 'Name is required';
    if (!editForm.companyName?.trim()) newErrors.companyName = 'Company Name is required';
    
    if (editForm.phone && !validateSouthAfricanPhone(editForm.phone)) {
       newErrors.phone = 'Invalid phone format';
    }
    
    if (user?.type === 'entrepreneur' && editForm.regNumber && !validateCIPC(editForm.regNumber)) {
        newErrors.regNumber = 'Invalid CIPC format (YYYY/NNNNNN/NN)';
    }

    if (Object.keys(newErrors).length > 0) {
      setEditErrors(newErrors);
      return;
    }

    // Save to local storage
    if (user) {
      setUser({ ...user, ...editForm });
    }
    setIsEditing(false);
    setEditErrors({});
  };

  const handleCancelEdit = () => {
    if (user) setEditForm(user);
    setIsEditing(false);
    setEditErrors({});
  };

  const getFlowData = (): ProcessStep[] => {
    if (!user) return [];
    return user.type === 'entrepreneur' ? ENTREPRENEUR_FLOW : FUNDER_FLOW;
  };

  const getCurrentStepIndex = (): number => {
      // Logic to map internal status strings to the visual step index
      if (!user) return 0;
      // Step 1 is always Registration (Completed)
      // Step 2 is Assessment/Alignment (Pending)
      // Step 3 is Packaging/Access (Verified)
      // Step 4+ is Investor Ready
      
      if (user.status === 'pending') return 1; // Index 1 is the second item (Business Assessment)
      if (user.status === 'verified') return 2;
      if (user.status === 'investor-ready') return 3;
      return 1;
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>;
  }

  if (!user) {
    return (
      <div className="min-h-[70vh] bg-slate-950 flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6">
            <UserIcon className="text-slate-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100 mb-2">No active session found</h2>
        <p className="text-slate-400 mb-8">Please register or log in to view your dashboard.</p>
        <button 
          onClick={() => onNavigate('register')}
          className="px-8 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all"
        >
          Register Now
        </button>
      </div>
    );
  }

  const flowSteps = getFlowData();
  const currentStepIdx = getCurrentStepIndex();
  const currentStepData = flowSteps[currentStepIdx] || flowSteps[0];
  const nextStepData = flowSteps[currentStepIdx + 1];

  return (
    <div className="bg-slate-950 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-grow">
                {isEditing ? (
                   <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-md max-w-2xl">
                       <h3 className="font-bold text-lg mb-4 text-slate-100">Edit Profile</h3>
                       <div className="grid md:grid-cols-2 gap-4">
                          <div>
                             <label className="block text-xs font-semibold text-slate-400 mb-1">Full Name</label>
                             <input 
                               type="text" 
                               value={editForm.name || ''} 
                               onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                               className="w-full px-3 py-2 border border-slate-700 bg-slate-950 text-slate-100 rounded-lg text-sm placeholder:text-slate-500"
                             />
                             {editErrors.name && <p className="text-red-400 text-xs mt-1">{editErrors.name}</p>}
                          </div>
                          <div>
                             <label className="block text-xs font-semibold text-slate-400 mb-1">Company Name</label>
                             <input 
                               type="text" 
                               value={editForm.companyName || ''} 
                               onChange={(e) => setEditForm({...editForm, companyName: e.target.value})}
                               className="w-full px-3 py-2 border border-slate-700 bg-slate-950 text-slate-100 rounded-lg text-sm placeholder:text-slate-500"
                             />
                             {editErrors.companyName && <p className="text-red-400 text-xs mt-1">{editErrors.companyName}</p>}
                          </div>
                          <div>
                             <label className="block text-xs font-semibold text-slate-400 mb-1">Phone Number</label>
                             <input 
                               type="text" 
                               value={editForm.phone || ''} 
                               onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                               className="w-full px-3 py-2 border border-slate-700 bg-slate-950 text-slate-100 rounded-lg text-sm placeholder:text-slate-500"
                             />
                             {editErrors.phone && <p className="text-red-400 text-xs mt-1">{editErrors.phone}</p>}
                          </div>
                          {user.type === 'entrepreneur' && (
                            <div>
                               <label className="block text-xs font-semibold text-slate-400 mb-1">Reg Number</label>
                               <input 
                                 type="text" 
                                 value={editForm.regNumber || ''} 
                                 onChange={(e) => setEditForm({...editForm, regNumber: e.target.value})}
                                 className="w-full px-3 py-2 border border-slate-700 bg-slate-950 text-slate-100 rounded-lg text-sm placeholder:text-slate-500"
                               />
                               {editErrors.regNumber && <p className="text-red-400 text-xs mt-1">{editErrors.regNumber}</p>}
                            </div>
                          )}
                       </div>
                       <div className="flex justify-end gap-3 mt-4">
                           <button onClick={handleCancelEdit} className="flex items-center gap-1 text-sm text-slate-400 hover:text-slate-200 px-3 py-2">
                             <X size={16} /> Cancel
                           </button>
                           <button onClick={handleSaveProfile} className="flex items-center gap-1 text-sm bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                             <Save size={16} /> Save Changes
                           </button>
                       </div>
                   </div>
                ) : (
                  <div className="group relative">
                      <h1 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                          Welcome, {user.name} 
                          <button 
                            onClick={() => setIsEditing(true)} 
                            className="text-slate-500 hover:text-blue-300 transition-colors p-1"
                            title="Edit Profile"
                          >
                            <Edit2 size={20} />
                          </button>
                      </h1>
                      <p className="text-slate-400 flex items-center gap-2">
                         {user.companyName} | <span className="uppercase font-semibold text-blue-200 text-xs bg-blue-500/10 px-2 py-0.5 rounded">{user.type}</span>
                      </p>
                      {user.phone && <p className="text-sm text-slate-500 mt-1">{user.phone}</p>}
                      {user.regNumber && <p className="text-xs text-slate-600 mt-0.5">{user.regNumber}</p>}
                  </div>
                )}
            </div>
            
            <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 shadow-sm self-start">
                <div className={`w-3 h-3 rounded-full ${user.status === 'pending' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                <span className="font-medium text-sm text-slate-200 capitalize">Status: {user.status}</span>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Status Card */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-slate-100">Application Progress</h3>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Step {currentStepIdx + 1} of {flowSteps.length}</span>
                  </div>
                    
                    {/* Dynamic Stepper */}
                    <div className="relative pt-4 pb-12 px-2">
                        {/* Connecting Line */}
                        <div className="absolute top-7 left-0 w-full h-1 bg-slate-800 rounded-full -z-10"></div>
                        <div 
                          className="absolute top-7 left-0 h-1 bg-blue-500 rounded-full -z-10 transition-all duration-700"
                           style={{ width: `${(currentStepIdx / (flowSteps.length - 1)) * 100}%` }}
                        ></div>

                        <div className="flex justify-between">
                           {flowSteps.map((step, idx) => {
                               const isCompleted = idx < currentStepIdx;
                               const isCurrent = idx === currentStepIdx;
                               
                               return (
                                     <div key={step.id} className="flex flex-col items-center relative group">
                                       <div 
                                         className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold transition-all duration-300 z-10 
                                      ${isCompleted || isCurrent ? 'bg-blue-500 border-blue-500 text-white' : 'bg-slate-900 border-slate-700 text-slate-500'}`}
                                       >
                                           {isCompleted ? <CheckCircle2 size={14} /> : step.id}
                                       </div>
                                       {/* Mobile-friendly: Only show labels for current, prev and next, or use very small font */}
                                       <div className={`absolute top-8 w-24 text-center text-[10px] sm:text-xs font-medium transition-colors ${isCurrent ? 'text-blue-300 font-bold' : 'text-slate-500'}`}>
                                           {step.title}
                                       </div>
                                   </div>
                               );
                           })}
                        </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-5 flex gap-4 items-start">
                      <div className="bg-blue-500/20 p-2 rounded-full text-blue-200 shrink-0">
                           <currentStepData.Icon size={20} />
                        </div>
                        <div>
                        <h4 className="font-bold text-blue-200 text-sm uppercase tracking-wide mb-1">Current Step: {currentStepData.title}</h4>
                        <p className="text-blue-200 text-sm leading-relaxed mb-3">
                                {currentStepData.description}
                            </p>
                            {nextStepData && (
                          <div className="text-xs text-blue-300 flex items-center gap-1 font-medium">
                                    Next: {nextStepData.title} <ArrowRight size={12} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
                      <FileText className="text-slate-500 mb-4" />
                      <h4 className="font-bold text-slate-100">Submitted Documents</h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            {user.documents.map((doc, i) => (
                                <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-green-300" />
                                    {doc}
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm opacity-50 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-[1px]">
                        <span className="bg-slate-900 px-3 py-1 rounded-full shadow-sm text-xs font-bold text-slate-500 flex items-center gap-1">
                                <ShieldCheck size={12} /> Locked
                             </span>
                      </div>
                      <ShieldCheck className="text-slate-500 mb-4" />
                      <h4 className="font-bold text-slate-100">Deal Room Access</h4>
                      <p className="text-sm text-slate-400 mt-2">Available once {user.type === 'entrepreneur' ? 'packaging' : 'verification'} is complete.</p>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                <div className="bg-slate-900 text-white p-6 rounded-xl">
                    <h4 className="font-bold mb-4">Your Consultant</h4>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden">
                            <img src="https://picsum.photos/200/200?random=10" alt="Jared Pillay" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <div className="text-sm font-bold">Jared Pillay</div>
                            <div className="text-xs text-slate-400">Managing Director</div>
                        </div>
                    </div>
                    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-bold transition-colors">
                        Request Call Back
                    </button>
                </div>

                 <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm">
                  <h4 className="font-bold text-slate-100 mb-4 flex items-center gap-2">
                    <Clock size={16} className="text-slate-500" /> Recent Activity
                    </h4>
                    <ul className="space-y-4">
                    <li className="text-sm border-b border-slate-800 pb-3">
                      <div className="font-medium text-slate-200">Registration Complete</div>
                      <div className="text-xs text-slate-500">{new Date(user.registrationDate).toLocaleDateString()}</div>
                        </li>
                         <li className="text-sm">
                      <div className="font-medium text-slate-200">Documents Uploaded</div>
                      <div className="text-xs text-slate-500">{new Date(user.registrationDate).toLocaleDateString()}</div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

const UserIcon = ({className}: {className?: string}) => (
    <svg className={className} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

export default Dashboard;
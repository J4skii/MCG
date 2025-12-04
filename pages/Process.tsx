import React from 'react';
import ProcessMap from '../components/ProcessMap';
import { ArrowRight } from 'lucide-react';

interface ProcessProps {
    onNavigate: (page: string) => void;
}

const Process: React.FC<ProcessProps> = ({ onNavigate }) => {
  return (
    <div className="pt-8">
      <ProcessMap />
      
      <div className="bg-slate-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to start the journey?</h2>
            <p className="text-slate-400 mb-8 text-lg">
                Whether you are seeking funding or looking to deploy capital, our structured process ensures 
                quality, compliance, and speed.
            </p>
            <button 
                onClick={() => onNavigate('register')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all inline-flex items-center gap-2"
            >
                Get Started Now <ArrowRight size={20} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
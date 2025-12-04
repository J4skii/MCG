import React from 'react';
import { ProcessStep } from '../types';

interface StepCardProps {
  step: ProcessStep;
  isLast: boolean;
  type: 'entrepreneur' | 'funder';
}

const StepCard: React.FC<StepCardProps> = ({ step, isLast, type }) => {
  const accentColor = type === 'entrepreneur' ? 'bg-blue-600' : 'bg-yellow-600';
  const textColor = type === 'entrepreneur' ? 'text-blue-600' : 'text-yellow-600';
  
  return (
    <div className="relative flex-1 min-w-[200px]">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
      )}
      
      <div className="flex flex-col items-center text-center p-4">
        <div className={`w-16 h-16 rounded-2xl ${accentColor} text-white flex items-center justify-center shadow-lg mb-4 transform transition-transform hover:scale-110`}>
          <step.Icon size={28} />
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm w-full min-h-[140px] hover:shadow-md transition-shadow">
          <span className={`text-xs font-bold ${textColor} uppercase mb-1 block`}>Step {step.id}</span>
          <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
          <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
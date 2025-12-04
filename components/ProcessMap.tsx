import React from 'react';
import { ENTREPRENEUR_FLOW, FUNDER_FLOW } from '../data/processMap';
import StepCard from './StepCard';

const ProcessMap: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-3">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Process
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Structured pathways for both business owners seeking capital and funders seeking quality deals.
          </p>
        </div>

        {/* Entrepreneur Flow */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-600 w-1.5 h-8 rounded-full"></div>
            <h4 className="text-2xl font-bold text-slate-900">For Entrepreneurs</h4>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 overflow-x-auto pb-8 snap-x">
            {ENTREPRENEUR_FLOW.map((step, index) => (
              <StepCard 
                key={step.id} 
                step={step} 
                isLast={index === ENTREPRENEUR_FLOW.length - 1}
                type="entrepreneur"
              />
            ))}
          </div>
        </div>

        {/* Funder Flow */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-yellow-600 w-1.5 h-8 rounded-full"></div>
            <h4 className="text-2xl font-bold text-slate-900">For Funders & Capital Partners</h4>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 overflow-x-auto pb-8 snap-x">
            {FUNDER_FLOW.map((step, index) => (
              <StepCard 
                key={step.id} 
                step={step} 
                isLast={index === FUNDER_FLOW.length - 1}
                type="funder"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessMap;
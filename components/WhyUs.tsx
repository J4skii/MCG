import React from 'react';
import { WHY_US } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-700 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-200 font-semibold uppercase tracking-wide text-sm mb-3">Why Partner With MCG</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Your Empowered Partner for Funding & Deals
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US.map((item, index) => (
            <div key={index} className="bg-blue-700/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                 <item.Icon className="text-yellow-400" size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-lg font-medium text-blue-200 italic">
                "MCG combines empowerment, speed, and institutional credibility to deliver investor-ready solutions at scale"
            </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
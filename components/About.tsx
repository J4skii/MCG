import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative shadow-2xl">
               <img 
                 src="https://picsum.photos/800/600?grayscale" 
                 alt="Meeting room consulting" 
                 className="object-cover w-full h-full opacity-90"
               />
               <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
               <p className="text-3xl font-bold text-blue-600 mb-2">20+</p>
               <p className="text-gray-600 text-sm font-medium">Active mandates nationwide across Mining, Logistics, Agriculture & Services.</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-3">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Capital & Deal Solutions for a Transforming Economy
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are the funding and capital solutions arm of <strong>Praeto Group</strong>. 
              As a Black youth-led entity, we deliver innovative funding and deal structures that connect businesses 
              to banks, DFIs, Private Equity, and alternative investors.
            </p>

            <ul className="space-y-4">
              {[
                "Connects businesses to Banks, DFIs, PE, and alternative lenders.",
                "Focused on Funding, Advisory, Equity and Deal Placement.",
                "R300m+ packaged to date delivering measurable impact.",
                "Aligned with South Africa's transformation agenda."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
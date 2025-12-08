import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
     <section id="services" className="py-24 bg-slate-950 relative">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-0 w-full h-1/2 bg-slate-900/30 -skew-y-3 transform -z-10 origin-left"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-300 font-semibold uppercase tracking-wide text-sm mb-3">Our Approach</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-100">
            What Makes MCG Different
          </h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            We provide comprehensive solutions ranging from debt placement to strategic partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400/60 transition-all duration-300 ease-out group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <service.Icon className="text-blue-400 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
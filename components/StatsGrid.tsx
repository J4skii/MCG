import React from 'react';
import { STATS } from '../data/stats';
import { AnimatedCounter } from './Hero';

const StatsGrid: React.FC = () => {
  return (
    <div className="bg-slate-950 py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-baseline text-4xl font-bold text-white mb-2">
                {stat.prefix && <span className="text-slate-500 mr-1">{stat.prefix}</span>}
                <AnimatedCounter value={stat.value} />
                {stat.suffix && <span className="text-blue-400 ml-1">{stat.suffix}</span>}
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
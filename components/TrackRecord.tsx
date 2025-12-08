import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';
import { DEALS } from '../constants';
import { MapPin } from 'lucide-react';
import { AnimatedCounter } from './Hero';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 p-4 shadow-xl border border-slate-800 rounded-lg">
        <p className="font-bold text-slate-100">{label}</p>
        <p className="text-blue-300 font-semibold">
          Value: R{payload[0].value}mn
        </p>
        <p className="text-xs text-slate-400 mt-1">{payload[0].payload.category}</p>
        <p className="text-xs text-green-300 mt-1 font-medium bg-green-500/10 inline-block px-2 py-0.5 rounded">
          {payload[0].payload.status}
        </p>
      </div>
    );
  }
  return null;
};

const TrackRecord: React.FC = () => {
  return (
    <section id="track-record" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-blue-300 font-semibold uppercase tracking-wide text-sm mb-3">Track Record & Reach</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-100">
              Measurable Impact
            </h3>
            <p className="mt-4 text-slate-400 flex items-baseline gap-1">
              Total Packaged & Placed: <span className="font-bold text-slate-100 text-xl">R<AnimatedCounter value={300} />mn+</span> across multiple provinces.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm font-medium text-slate-300 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
             <MapPin size={18} className="text-blue-400" />
             <span>Active in Gauteng, KZN, Mpumalanga & more</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800">
            <h4 className="text-lg font-bold text-slate-100 mb-6">Select Active Mandates (Value in ZAR Millions)</h4>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={DEALS}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                    tickFormatter={(value) => `R${value}m`}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: '#1e293bcc' }} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={60}>
                    {DEALS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? '#CA8A04' : '#2563EB'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-xs text-slate-500 mt-4">* Sample of key ongoing and executed mandates</p>
          </div>

          {/* List Section */}
          <div className="space-y-6 flex flex-col justify-center">
            {DEALS.map((deal, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold uppercase text-blue-300 tracking-wider">{deal.category}</span>
                  <span className="text-xs font-semibold bg-green-500/10 text-green-300 px-2 py-1 rounded-full">{deal.status}</span>
                </div>
                <h5 className="font-bold text-slate-100 text-lg mb-1">{deal.name}</h5>
                <div className="text-2xl font-bold text-slate-200">R<AnimatedCounter value={deal.value} />mn</div>
              </div>
            ))}
             <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl text-white shadow-lg">
                <div className="text-sm opacity-90 mb-1">Portfolio Summary</div>
                <div className="text-3xl font-bold">R<AnimatedCounter value={700} />mn+</div>
                <div className="text-sm opacity-80 mt-1">Total mandates across industries</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
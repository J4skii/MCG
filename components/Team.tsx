import React from 'react';
import { TEAM } from '../constants';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-semibold uppercase tracking-wide text-sm mb-3">Leadership</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Trusted Leadership & Network
          </h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Black Youth-Led, Backed by an Empowered Ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="w-24 h-24 rounded-full bg-slate-700 mb-6 overflow-hidden mx-auto border-4 border-slate-600 group-hover:border-blue-500 transition-colors">
                 <img 
                  src={`https://picsum.photos/200/200?random=${index + 10}`} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                 />
              </div>
              <h4 className="text-xl font-bold text-white text-center mb-1">{member.name}</h4>
              <p className="text-blue-400 text-sm font-medium text-center mb-6">{member.role}</p>
              
              <ul className="space-y-3 mb-6">
                {member.description.map((desc, i) => (
                  <li key={i} className="text-slate-300 text-sm text-center leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-center">
                  <a href="#" className="text-slate-500 hover:text-white transition-colors">
                      <Linkedin size={20} />
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
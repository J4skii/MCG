import React, { useState } from 'react';
import { PARTNERS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-100">Our Capital Partners</h3>
          <p className="text-slate-400 mt-2">Placement of deals at leading institutions</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {PARTNERS.map((partner, index) => (
            <PartnerLink key={index} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnerLink: React.FC<{ partner: typeof PARTNERS[0] }> = ({ partner }) => {
  const [useClearbit, setUseClearbit] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    if (useClearbit) {
      setUseClearbit(false); // Try Google next
    } else {
      setImageError(true); // Both failed
    }
  };

  const logoUrl = useClearbit 
    ? `https://logo.clearbit.com/${partner.domain}?size=160`
    : `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${partner.website}&size=128`;

  return (
    <a 
      href={partner.website} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center transition-all duration-300 ${imageError ? '' : 'grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:scale-110'}`}
      title={partner.name}
    >
      {imageError ? (
        // Fallback to a styled link button instead of just text
        <div className="flex items-center gap-2 px-5 py-3 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-400 hover:text-blue-300 transition-colors shadow-sm group-hover:shadow-md">
          <span className="font-semibold text-slate-200 group-hover:text-blue-300 text-sm">{partner.name}</span>
          <ExternalLink size={14} className="text-slate-500 group-hover:text-blue-300" />
        </div>
      ) : (
        <img 
          src={logoUrl} 
          alt={`${partner.name} logo`}
          className="h-14 w-auto object-contain max-w-[160px] max-h-[60px]"
          onError={handleError}
        />
      )}
    </a>
  );
};

export default Partners;
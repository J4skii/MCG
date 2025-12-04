import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const ease = 1 - Math.pow(1 - percentage, 4);
            setCount(Math.floor(ease * value));

            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

interface HeroProps {
  onStartClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform origin-top-right -z-10 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:w-3/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Youth-Led, Empowerment-Driven
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">Capital</span> <br/>
            With <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">Opportunity</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            Midpoint Consulting Group connects businesses to banks, DFIs, and private equity. 
            We structure deals that are credible, compliant, and investor-ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onStartClick}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2"
            >
              Start Registration <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => {
                document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-white border border-gray-300 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              How It Works
            </button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
             <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>R300m+ Packaged</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>20+ Active Mandates</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
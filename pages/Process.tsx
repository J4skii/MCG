import React, { useEffect, useRef, useState } from 'react';
import ProcessMap from '../components/ProcessMap';
import { ArrowRight } from 'lucide-react';

interface ProcessProps {
    onNavigate: (page: string) => void;
}

type SectionKey = 'intro' | 'steps' | 'cta';

const Process: React.FC<ProcessProps> = ({ onNavigate }) => {
  const introRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [visibleSections, setVisibleSections] = useState<Record<SectionKey, boolean>>({
    intro: false,
    steps: false,
    cta: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionKey = (entry.target as HTMLElement).dataset.section as SectionKey | undefined;
          if (sectionKey) {
            setVisibleSections((prev) => (prev[sectionKey] ? prev : { ...prev, [sectionKey]: true }));
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    const refs = [introRef, stepsRef, ctaRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const sectionVisibilityClass = (key: SectionKey) =>
    `transition-all duration-700 ease-out ${visibleSections[key] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  return (
    <div className="relative overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -top-40 left-12 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-transparent blur-[160px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Intro Section */}
        <div
          ref={introRef}
          data-section="intro"
          className={`mb-16 max-w-3xl ${sectionVisibilityClass('intro')}`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300/90 backdrop-blur">
            Process Journey
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-zinc-50 sm:text-5xl">
            Our Process
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Structured pathways for both business owners seeking capital and funders seeking quality deals.
          </p>
        </div>

        {/* Process Map Section */}
        <div
          ref={stepsRef}
          data-section="steps"
          className={`relative ${sectionVisibilityClass('steps')}`}
        >
          <div className="absolute inset-0 -translate-y-6 rounded-3xl bg-gradient-to-br from-blue-500/10 via-zinc-900/40 to-zinc-950/60 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-black/80 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.18)] sm:p-10">
            <div className="absolute -top-10 left-10 hidden h-32 w-32 rounded-full bg-blue-500/15 blur-3xl sm:block" />
            <div className="absolute -bottom-16 right-10 hidden h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl sm:block" />
            <div className="relative z-10">
              <ProcessMap />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          data-section="cta"
          className={`mt-20 ${sectionVisibilityClass('cta')}`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-zinc-900/80 p-10 text-center shadow-[0_0_45px_rgba(59,130,246,0.25)] backdrop-blur-xl sm:p-12">
            <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
            <div className="absolute -top-20 left-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to start the journey?</h2>
              <p className="mt-4 text-lg text-zinc-300">
                Whether you are seeking funding or looking to deploy capital, our structured process ensures 
                quality, compliance, and speed.
              </p>
              <button
                onClick={() => onNavigate('register')}
                className="relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/80 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:transition before:duration-700 hover:before:translate-x-full"
              >
                Get Started Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
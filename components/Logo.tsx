import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Midpoint Consulting Group Logo"
    >
      {/* The 'M' with arrow accent */}
      <path 
        d="M10 55L35 15L50 40L75 5" 
        stroke="#2563EB" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M75 5L75 20M75 5L60 5" 
        stroke="#2563EB" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* The 'M' Legs to ground it */}
      <path d="M10 55V70" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
      <path d="M35 15V70" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" opacity="0.1" /> 
      <path d="M50 40V70" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" opacity="0.1" />
      <path d="M75 5V70" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" opacity="0.1" />

      {/* Letters C and G */}
      <text x="85" y="68" fontFamily="sans-serif" fontWeight="800" fontSize="55" fill="#0F172A">C</text>
      <text x="128" y="68" fontFamily="sans-serif" fontWeight="800" fontSize="55" fill="#0F172A">G</text>

      {/* Blue Underline */}
      <rect x="5" y="76" width="170" height="4" rx="2" fill="#2563EB" />
    </svg>
  );
};

export default Logo;
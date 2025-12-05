import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <img 
      src="https://www.bizforsale.co.za/finance/images/Finance_MCG.jpg" 
      alt="Midpoint Consulting Group" 
      className={`${className} object-contain cursor-pointer`}
      onClick={scrollToTop}
    />
  );
};

export default Logo;
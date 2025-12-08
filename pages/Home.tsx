import React from 'react';
import Hero from '../components/Hero';
import StatsGrid from '../components/StatsGrid';
import Services from '../components/Services';
import TrackRecord from '../components/TrackRecord';
import Partners from '../components/Partners';
import WhyUs from '../components/WhyUs';
import Team from '../components/Team';

interface HomeProps {
    onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero 
        onStartClick={() => onNavigate('register')} 
        onProcessClick={() => onNavigate('process')} 
      />
      <StatsGrid />
      <Services />
      <TrackRecord />
      <Team />
      <Partners />
      <WhyUs />
    </>
  );
};

export default Home;
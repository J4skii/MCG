import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow pt-20 bg-slate-950">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default MainLayout;
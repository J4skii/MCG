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
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default MainLayout;
import React, { useState } from 'react';
import { Menu, X, ArrowRight, LayoutDashboard } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: 'home' },
    { label: 'Process', path: 'process' },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => handleNav('home')}>
            <Logo className="h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.path)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.path
                    ? 'text-blue-400 font-semibold'
                    : 'text-slate-300 hover:text-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="h-6 w-[1px] bg-slate-700 mx-2"></div>

            <button
               onClick={() => handleNav('dashboard')}
               className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                 currentPage === 'dashboard' ? 'text-blue-400' : 'text-slate-300 hover:text-slate-100'
               }`}
            >
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => handleNav('register')}
              className="bg-blue-500/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Register <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-slate-100 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                  currentPage === item.path 
                  ? 'text-blue-400 bg-slate-800' 
                  : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('dashboard')}
              className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800"
            >
              Dashboard
            </button>
            <div className="pt-4 mt-2 border-t border-slate-800">
                <button
                onClick={() => handleNav('register')}
              className="block w-full text-center px-4 py-3 rounded-lg text-base font-bold text-white bg-blue-500 hover:bg-blue-600"
                >
                Start Registration
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
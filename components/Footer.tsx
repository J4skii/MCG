import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-3 mb-4">
                <Logo className="h-10 w-auto" />
                <span className="font-bold text-slate-900 text-xl border-l border-gray-200 pl-3">Midpoint Consulting Group</span>
             </div>
             <p className="text-gray-500 mb-6 max-w-sm leading-relaxed text-sm">
                Part of the Praeto Group Empowered Ecosystem. 
                We deliver credible, compliant, and scalable solutions across funding, advisory, and deal execution.
             </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600">About Us</button></li>
              <li><button onClick={() => onNavigate('process')} className="hover:text-blue-600">Our Process</button></li>
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600">Success Stories</button></li>
              <li><button onClick={() => onNavigate('register')} className="hover:text-blue-600 font-medium text-blue-600">Register</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 mt-0.5 shrink-0" />
                <span>Johannesburg & KZN,<br/>South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <a href="mailto:info@midpointgroup.co.za" className="hover:text-blue-600">info@midpointgroup.co.za</a>
              </li>
               <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+27 (0) 10 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Midpoint Consulting Group. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-gray-600">Privacy Policy</button>
            <button className="hover:text-gray-600">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline/20 pt-12 pb-6 mt-auto">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-space text-2xl font-bold text-primary-container uppercase tracking-tighter drop-shadow-neon mb-2">
            Techno<span className="text-white">Med</span>
          </h2>
          <p className="font-epilogue text-sm text-on-surface-variant max-w-xs">
            Decentralized network for underground music events and secure access distribution.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 font-space text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <Link to="/" className="hover:text-primary-container transition-colors">Radar</Link>
          <Link to="/about" className="hover:text-primary-container transition-colors">Manifesto</Link>
          <Link to="/cart" className="hover:text-primary-container transition-colors">Cart</Link>
        </div>

        {/* Social / Extra */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 border border-outline/30 flex items-center justify-center text-white hover:bg-primary-container hover:text-black hover:border-primary-container transition-all rounded-none">
            <span className="material-symbols-outlined text-[18px]">share</span>
          </a>
          <a href="#" className="w-10 h-10 border border-outline/30 flex items-center justify-center text-white hover:bg-primary-container hover:text-black hover:border-primary-container transition-all rounded-none">
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 md:px-12 mt-12 pt-6 border-t border-outline/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-epilogue text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} TechnoMed Systems. All rights reserved.
        </p>
        <p className="font-epilogue text-[10px] text-on-surface-variant/50 uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          System Status: Online
        </p>
      </div>
    </footer>
  );
};

export default Footer;

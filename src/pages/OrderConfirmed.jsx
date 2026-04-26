import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmed = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex items-center justify-center font-epilogue overflow-x-hidden relative">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none mix-blend-overlay opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant via-background to-black z-0"></div>
      
      <main className="relative z-10 w-full max-w-2xl px-4 md:px-0 py-24">
        {/* Transactional Confirmation Card */}
        <div className="bg-surface-container-low border border-outline/30 p-6 md:p-12 relative shadow-[0_0_40px_rgba(183,247,0,0.03)] rounded-none">
          {/* Top Deco Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-primary-container opacity-80 shadow-[0_0_10px_rgba(183,247,0,0.8)]"></div>
          
          {/* System Status Header */}
          <div className="flex items-center gap-4 mb-10 border-b border-surface-container-highest pb-4">
            <span className="text-outline font-space text-[10px] font-bold tracking-widest uppercase">SYS.OP.SUCCESS</span>
            <div className="h-px bg-surface-container-highest flex-grow"></div>
            <span className="text-surface-bright font-space text-[10px] font-bold uppercase tracking-widest">TIMESTAMP // 2024.10.28:2341Z</span>
          </div>
          
          {/* Main Confirmation Message */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6 relative">
              {/* Neon Bloom behind icon */}
              <div className="absolute inset-0 bg-primary-container blur-[30px] opacity-20 rounded-full"></div>
              <span className="material-symbols-outlined text-[80px] text-primary-container drop-shadow-neon relative z-10" style={{fontVariationSettings: "'FILL' 1"}}>
                check_circle
              </span>
            </div>
            <h1 className="font-space text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-2">ORDER CONFIRMED</h1>
            <p className="font-epilogue text-lg text-on-surface-variant">Your transaction was successful. Access credentials generated.</p>
          </div>
          
          {/* Order Details Block */}
          <div className="bg-surface border border-surface-container-highest p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 rounded-none">
            <div>
              <span className="block font-space text-[10px] font-bold text-outline uppercase mb-1 tracking-widest">REFERENCE ID</span>
              <span className="font-space text-2xl font-bold text-primary-container tracking-widest drop-shadow-neon">SYS-9834-XQ</span>
            </div>
            <div className="text-left md:text-right">
              <span className="block font-space text-[10px] font-bold text-outline uppercase mb-1 tracking-widest">TOTAL AMOUNT</span>
              <span className="font-space text-2xl font-bold text-white">€ 145.00</span>
            </div>
          </div>
          
          {/* Glassmorphic Ticket Download Section */}
          <div className="relative bg-surface/40 backdrop-blur-[20px] border border-outline/30 p-8 flex flex-col items-center justify-center text-center mb-10 rounded-none">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-outline/50"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-outline/50"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-outline/50"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-outline/50"></div>
            
            <div className="w-48 h-48 bg-white p-3 mb-6 shadow-xl relative">
              {/* Scanline effect over QR container to fit theme */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-30 z-10"></div>
              <img alt="QR Code" className="w-full h-full object-cover filter grayscale contrast-125" src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=SYS-9834-XQ" />
            </div>
            
            <h2 className="font-space text-2xl font-bold text-white uppercase tracking-tighter mb-1">UNDERGROUND SECTOR 4</h2>
            <p className="font-space text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-8">OCT 24 // 23:00 - 06:00 // WAREHOUSE 09</p>
            
            <button className="w-full md:w-auto px-8 py-4 border-2 border-secondary text-secondary font-space text-[10px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-black hover:drop-shadow-[0_0_20px_rgba(233,179,255,0.5)] flex items-center justify-center gap-3 transition-colors rounded-none">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>qr_code_scanner</span>
              DOWNLOAD ACCESS PASS
            </button>
          </div>
          
          {/* Primary Action */}
          <Link to="/" className="w-full px-8 py-5 bg-primary-container text-black font-space text-xs font-bold uppercase tracking-widest hover:bg-white hover:drop-shadow-[0_0_25px_rgba(183,247,0,0.6)] flex items-center justify-center gap-2 transition-all rounded-none">
            RETURN TO EVENTS SYSTEM
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmed;

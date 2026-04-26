import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EventDetails = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(2);
  const price = 35.00; // General Admission price

  const handleAddToCart = () => {
    const item = {
      id: 'acid-reign-01',
      title: 'Acid Reign',
      type: 'WAREHOUSE',
      date: 'OCT 28 / 23:00 - 07:00',
      price: price,
      qty: quantity,
      img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop',
      color: 'primary-container'
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if item exists to update qty, or just push
    const itemIndex = existingCart.findIndex(i => i.id === item.id);
    if (itemIndex > -1) {
      existingCart[itemIndex].qty += quantity;
    } else {
      existingCart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    navigate('/cart');
  };

  return (
    <div className="bg-background min-h-screen pb-24 md:pb-16">
      {/* Hero Section */}
      <section className="relative w-full h-[530px] md:h-[618px] overflow-hidden scanlines-overlay">
        <img
          alt="Event Background"
          className="absolute inset-0 w-full h-full object-cover object-center filter grayscale opacity-70 mix-blend-luminosity"
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="absolute inset-0 scanlines opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 max-w-7xl mx-auto md:left-1/2 md:-translate-x-1/2 flex flex-col items-start gap-4">
          <div className="bg-background/60 backdrop-blur-md border border-outline/20 px-4 py-2 inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-container shadow-[0_0_8px_#b7f700] animate-pulse"></span>
            <span className="font-space text-xs font-bold text-primary-container uppercase tracking-widest">Live Event</span>
          </div>
          <h1 className="font-space text-5xl md:text-7xl font-bold text-white leading-none mix-blend-screen drop-shadow-neon uppercase tracking-tighter">Acid Reign</h1>
          <div className="flex flex-wrap items-center gap-6 mt-2">
            <div className="flex items-center gap-2 text-on-surface-variant font-space text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-primary-container text-xl">calendar_today</span>
              OCT 28 . 23:00 - 07:00
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-space text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-primary-container text-xl">location_on</span>
              The Warehouse, Sector 4
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Details & Lineup */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-8">
          {/* Lineup Box */}
          <div className="bg-surface-container-low border border-outline/20 p-6 md:p-8 relative overflow-hidden group hover:border-primary-container/50 transition-colors duration-500 rounded-none">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-space font-bold text-8xl leading-none text-white pointer-events-none">01</div>
            <h2 className="font-space text-3xl font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-tighter">
              <span className="material-symbols-outlined text-primary-container">graphic_eq</span>
              TRANSMISSION_LINEUP
            </h2>
            <ul className="flex flex-col gap-0 border-t border-outline/10">
              <LineupItem name="Klangkuenstler" time="03:00 - 05:00" />
              <LineupItem name="VTSS" time="01:00 - 03:00" />
              <LineupItem name="Dax J" time="05:00 - 07:00" />
              <LineupItem name="Local Support" time="23:00 - 01:00" secondary />
            </ul>
          </div>

          {/* Info Box */}
          <div className="bg-surface-container-low border border-outline/20 p-6 md:p-8 relative rounded-none">
            <h3 className="font-space text-sm font-bold text-primary-container mb-4 tracking-widest uppercase">Protocol Overview</h3>
            <p className="font-epilogue text-lg text-on-surface-variant mb-4">
              A strictly curated auditory experience focusing on high-BPM industrial and hard techno. No photography allowed on the dancefloor. Dress code is strictly black, avant-garde, or fetish.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="border border-outline/20 px-4 py-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">no_photography</span>
                <span className="font-space text-[10px] font-bold uppercase tracking-widest">No Cameras</span>
              </div>
              <div className="border border-outline/20 px-4 py-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">checkroom</span>
                <span className="font-space text-[10px] font-bold uppercase tracking-widest">Cloakroom Avail</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Ticket Transaction */}
        <div className="md:col-span-5 lg:col-span-4 relative">
          <div className="sticky top-24 bg-surface-container-highest border border-outline/30 p-6 flex flex-col gap-6 shadow-2xl shadow-black rounded-none">
            <div className="flex items-center justify-between border-b border-outline/20 pb-4">
              <h3 className="font-space text-2xl font-bold text-white uppercase tracking-tighter">Secure Access</h3>
              <span className="material-symbols-outlined text-primary-container">qr_code_scanner</span>
            </div>
            
            {/* Tiers */}
            <div className="flex flex-col gap-3">
              {/* Sold Out Tier */}
              <label className="relative flex items-center justify-between p-4 border border-outline/10 bg-surface-container-lowest opacity-50 cursor-not-allowed">
                <div className="flex flex-col">
                  <span className="font-space text-xs font-bold uppercase tracking-widest text-white line-through">Early Bird</span>
                  <span className="font-epilogue text-sm text-on-surface-variant">Access before 00:00</span>
                </div>
                <span className="font-space text-xl font-bold text-white tracking-tighter">SOLD OUT</span>
              </label>
              
              {/* Selected Tier */}
              <label className="relative flex items-center justify-between p-4 border border-primary-container bg-primary-container/5 cursor-pointer neon-bloom transition-all">
                <input defaultChecked className="sr-only" name="ticket_tier" type="radio" />
                <div className="flex flex-col">
                  <span className="font-space text-xs font-bold uppercase tracking-widest text-primary-container">General Admission</span>
                  <span className="font-epilogue text-sm text-on-surface-variant">Standard entry</span>
                </div>
                <span className="font-space text-xl font-bold text-white tracking-tighter">€ 35.00</span>
              </label>
              
              {/* Available Tier */}
              <label className="relative flex items-center justify-between p-4 border border-outline/30 bg-surface-container-lowest cursor-pointer hover:border-primary-container/50 transition-colors">
                <input className="sr-only" name="ticket_tier" type="radio" />
                <div className="flex flex-col">
                  <span className="font-space text-xs font-bold uppercase tracking-widest text-white">VIP Backstage</span>
                  <span className="font-epilogue text-sm text-on-surface-variant">Fast track & backstage access</span>
                </div>
                <span className="font-space text-xl font-bold text-white tracking-tighter">€ 80.00</span>
              </label>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between mt-2">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-on-surface-variant">Units</span>
              <div className="flex border border-outline/30 bg-surface-container-lowest">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-primary-container hover:bg-white/5 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <div className="w-12 h-10 flex items-center justify-center border-l border-r border-outline/30 font-space text-lg font-bold text-white">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-primary-container hover:bg-white/5 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between border-t border-outline/20 pt-6 mt-2">
              <span className="font-space text-xs font-bold uppercase tracking-widest text-on-surface-variant">Total</span>
              <span className="font-space text-3xl font-bold text-white tracking-tighter">€ {(price * quantity).toFixed(2)}</span>
            </div>

            {/* CTA */}
            <button onClick={handleAddToCart} className="w-full h-14 bg-primary-container text-black font-space text-xl font-bold uppercase tracking-tighter hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 active:scale-[0.98] rounded-none">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>local_activity</span>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const LineupItem = ({ name, time, secondary }) => (
  <li className="py-4 border-b border-outline/10 flex justify-between items-center group/item hover:bg-white/5 transition-colors cursor-crosshair">
    <span className={`font-space ${secondary ? 'text-xl md:text-2xl text-white/70' : 'text-2xl md:text-3xl text-white'} font-bold group-hover/item:text-primary-container transition-colors uppercase tracking-tighter`}>{name}</span>
    <span className={`font-space text-xs font-bold uppercase tracking-widest ${secondary ? 'text-on-surface-variant/50' : 'text-on-surface-variant'}`}>{time}</span>
  </li>
);

export default EventDetails;

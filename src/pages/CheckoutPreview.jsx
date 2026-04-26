import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPreview = () => {
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    navigate('/order-confirmed');
  };

  return (
    <div className="bg-background text-on-background min-h-screen relative pb-20">
      {/* Main Layout Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24 min-h-screen flex flex-col justify-center">
        
        {/* Header / Back Action */}
        <header className="mb-8 flex items-center gap-4">
          <Link to="/cart" aria-label="Go back" className="flex items-center justify-center w-12 h-12 border border-outline/30 hover:border-primary-container hover:text-primary-container transition-colors rounded-none bg-surface-container-lowest text-white">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-space text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">Secure Checkout</h1>
        </header>

        {/* Split View Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Order Summary */}
          <section className="lg:col-span-5 bg-surface border border-outline/30 rounded-none relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            {/* Event Image Header */}
            <div className="relative h-64 w-full bg-surface-container-highest">
              <img alt="Event Background" className="w-full h-full object-cover grayscale opacity-60 mix-blend-screen" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2871&auto=format&fit=crop" />
              <div className="absolute inset-0 scanlines opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block border border-primary-container px-2 py-1 mb-3 bg-black/50 backdrop-blur-sm rounded-none">
                  <span className="font-space text-[10px] font-bold text-primary-container uppercase tracking-widest">Berlin Sector</span>
                </div>
                <h2 className="font-space text-4xl md:text-5xl font-bold text-white leading-tight uppercase tracking-tighter">SYNDICATE<br/>VOL. 04</h2>
              </div>
            </div>

            {/* Order Details */}
            <div className="p-8 border-t border-outline/30">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-outline">calendar_today</span>
                <span className="font-space text-xs font-bold text-on-surface-variant uppercase tracking-widest">Oct 28, 2024 • 23:00 - 08:00</span>
              </div>
              
              {/* Line Items */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-start pb-4 border-b border-surface-variant">
                  <div>
                    <h3 className="font-space text-xl font-bold text-white uppercase mb-1 tracking-tighter">Standard Access</h3>
                    <p className="font-epilogue text-sm text-on-surface-variant">Phase 3 Release</p>
                  </div>
                  <div className="text-right">
                    <span className="font-space text-xl font-bold text-white">€45.00</span>
                    <p className="font-epilogue text-sm text-on-surface-variant">Qty: 2</p>
                  </div>
                </div>
                <div className="flex justify-between items-start pb-4 border-b border-surface-variant">
                  <div>
                    <h3 className="font-space text-xl font-bold text-white uppercase mb-1 tracking-tighter">Service Fee</h3>
                    <p className="font-epilogue text-sm text-on-surface-variant">Network processing</p>
                  </div>
                  <div className="text-right">
                    <span className="font-space text-xl font-bold text-outline">€5.50</span>
                  </div>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-end pt-4">
                <div className="font-space text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total Due</div>
                <div className="font-space text-5xl font-bold text-primary-container drop-shadow-neon tracking-tighter">€95.50</div>
              </div>
            </div>
            
            {/* Decorative BPM Bar */}
            <div className="absolute top-0 right-0 p-4 flex gap-1 opacity-50">
              <div className="h-4 w-1.5 bg-primary-container"></div>
              <div className="h-6 w-1.5 bg-primary-container"></div>
              <div className="h-3 w-1.5 bg-primary-container"></div>
              <div className="h-8 w-1.5 bg-primary-container shadow-[0_0_8px_#b7f700]"></div>
              <div className="h-2 w-1.5 bg-primary-container"></div>
            </div>
          </section>

          {/* RIGHT COLUMN: Payment Details */}
          <section className="lg:col-span-7 bg-surface-container-low border border-outline/30 rounded-none p-6 md:p-10 flex flex-col justify-between">
            <form onSubmit={handleCheckout} className="space-y-10">
              
              {/* Delivery Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary-container">mail</span>
                  <h3 className="font-space text-2xl font-bold text-white uppercase tracking-tighter">Digital Delivery</h3>
                </div>
                <div className="relative group">
                  <label htmlFor="email" className="absolute -top-3 left-4 bg-surface-container-low px-2 font-space text-[10px] font-bold text-on-surface-variant uppercase tracking-widest z-10 transition-colors group-focus-within:text-primary-container">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="transmit@network.com" required className="w-full bg-surface border-2 border-outline/30 text-white p-4 pt-5 focus:outline-none focus:border-primary-container focus:ring-0 transition-all rounded-none font-epilogue text-lg placeholder:text-surface-variant caret-primary-container" />
                </div>
                <p className="mt-2 font-epilogue text-xs text-on-surface-variant">Tickets will be encrypted and transmitted to this address instantly.</p>
              </div>

              {/* Payment Method Toggle */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary-container">account_balance_wallet</span>
                  <h3 className="font-space text-2xl font-bold text-white uppercase tracking-tighter">Payment Protocol</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Card */}
                  <label className="relative cursor-pointer">
                    <input type="radio" name="payment_method" value="card" className="peer sr-only" defaultChecked />
                    <div className="border-2 border-outline/30 bg-surface p-4 text-center rounded-none peer-checked:border-primary-container peer-checked:bg-primary-container/5 peer-checked:text-primary-container text-white hover:bg-surface-bright transition-all">
                      <span className="material-symbols-outlined block mb-2 text-3xl">credit_card</span>
                      <span className="font-space text-xs font-bold uppercase tracking-widest">Fiat / Card</span>
                    </div>
                  </label>
                  {/* Crypto */}
                  <label className="relative cursor-pointer">
                    <input type="radio" name="payment_method" value="crypto" className="peer sr-only" />
                    <div className="border-2 border-outline/30 bg-surface p-4 text-center rounded-none peer-checked:border-primary-container peer-checked:bg-primary-container/5 peer-checked:text-primary-container text-white hover:bg-surface-bright transition-all">
                      <span className="material-symbols-outlined block mb-2 text-3xl">currency_bitcoin</span>
                      <span className="font-space text-xs font-bold uppercase tracking-widest">Crypto / Web3</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Card Details Form */}
              <div className="space-y-6 p-6 border border-outline/30 bg-surface">
                <div className="relative group">
                  <label htmlFor="card_number" className="absolute -top-3 left-4 bg-surface px-2 font-space text-[10px] font-bold text-on-surface-variant uppercase tracking-widest z-10 group-focus-within:text-primary-container">Card Number</label>
                  <input type="text" id="card_number" name="card_number" placeholder="0000 0000 0000 0000" className="w-full bg-surface-container-lowest border border-outline/30 text-white p-4 focus:outline-none focus:border-primary-container transition-all rounded-none font-space text-lg placeholder:text-surface-variant caret-primary-container tracking-widest" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative group">
                    <label htmlFor="expiry" className="absolute -top-3 left-4 bg-surface px-2 font-space text-[10px] font-bold text-on-surface-variant uppercase tracking-widest z-10 group-focus-within:text-primary-container">Expiry</label>
                    <input type="text" id="expiry" name="expiry" placeholder="MM/YY" className="w-full bg-surface-container-lowest border border-outline/30 text-white p-4 focus:outline-none focus:border-primary-container transition-all rounded-none font-space text-lg placeholder:text-surface-variant caret-primary-container tracking-widest" />
                  </div>
                  <div className="relative group">
                    <label htmlFor="cvc" className="absolute -top-3 left-4 bg-surface px-2 font-space text-[10px] font-bold text-on-surface-variant uppercase tracking-widest z-10 group-focus-within:text-primary-container">CVC</label>
                    <input type="text" id="cvc" name="cvc" placeholder="•••" className="w-full bg-surface-container-lowest border border-outline/30 text-white p-4 focus:outline-none focus:border-primary-container transition-all rounded-none font-space text-lg placeholder:text-surface-variant caret-primary-container tracking-widest" />
                  </div>
                </div>
              </div>

              {/* Submit Action */}
              <div className="pt-6 border-t border-outline/30">
                <button type="submit" className="w-full bg-primary-container text-black py-5 font-space text-2xl font-bold uppercase tracking-tighter hover:bg-white hover:shadow-[0_0_20px_#b7f700] transition-all active:scale-[0.98] rounded-none flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>lock</span>
                  Confirm Purchase
                </button>
                <div className="text-center mt-4 flex items-center justify-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span className="font-space text-[10px] font-bold uppercase tracking-widest">Encrypted 256-bit Connection</span>
                </div>
              </div>

            </form>
          </section>

        </div>
      </main>
    </div>
  );
};

export default CheckoutPreview;

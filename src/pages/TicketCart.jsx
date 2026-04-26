import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TicketCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    const updatedCart = cartItems.map(item => item.id === id ? { ...item, qty: newQty } : item);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const bookingFees = subtotal * 0.10; // 10% booking fee
  const facilityCharge = cartItems.length > 0 ? 5.00 : 0;
  const total = subtotal + bookingFees + facilityCharge;

  return (
    <div className="bg-background min-h-screen pb-32">
      <div className="pt-24 px-6 md:px-10 max-w-7xl mx-auto md:grid md:grid-cols-12 md:gap-6">
        
        {/* Cart Header */}
        <div className="col-span-12 mb-8 relative z-10">
          <h1 className="font-space text-5xl md:text-7xl font-bold text-white uppercase drop-shadow-neon tracking-tighter">
            Secure <br/><span className="text-primary-container">Access</span>
          </h1>
          <p className="font-epilogue text-lg text-on-surface-variant mt-2 border-b-2 border-surface-container-high pb-4 inline-block">
            {cartItems.length > 0 ? 'Review your selected frequencies.' : 'Your cart is empty.'}
          </p>
        </div>

        {/* Cart Items List */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 relative z-10">
          {cartItems.length === 0 ? (
            <div className="bg-surface-container-low border border-outline/20 p-10 text-center rounded-none">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">production_quantity_limits</span>
              <h2 className="font-space text-xl font-bold text-white uppercase mb-2">No transmissions active</h2>
              <Link to="/" className="text-primary-container hover:text-white font-space text-sm tracking-widest uppercase">
                Return to radar
              </Link>
            </div>
          ) : (
            cartItems.map(item => (
              <CartItem 
                key={item.id}
                item={item}
                onUpdateQty={updateQuantity}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        {/* Summary & Checkout Block */}
        <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 relative z-10">
          <div className="bg-surface border border-outline/30 p-6 sticky top-24 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-none">
            <h3 className="font-space text-xs font-bold text-white uppercase mb-6 tracking-widest border-b border-surface-container-high pb-4">Transaction Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center font-epilogue text-base text-white">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center font-epilogue text-base text-on-surface-variant">
                <span className="flex items-center gap-1">Booking Fees <span className="material-symbols-outlined text-[14px] cursor-help">info</span></span>
                <span>${bookingFees.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center font-epilogue text-base text-on-surface-variant">
                <span>Facility Charge</span>
                <span>${facilityCharge.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-outline/30 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="font-space text-xs font-bold text-white uppercase tracking-widest">Total Access</span>
                <span className="font-space text-5xl font-bold text-primary-container leading-none tracking-tighter hover:animate-pulse cursor-crosshair">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link to={cartItems.length > 0 ? "/checkout" : "#"} className={`w-full font-space text-xs font-bold uppercase tracking-widest py-5 px-6 flex justify-center items-center gap-3 transition-all active:scale-[0.98] rounded-none ${cartItems.length > 0 ? 'bg-primary-container text-black hover:bg-white hover:shadow-[0_0_20px_rgba(183,247,0,0.4)]' : 'bg-surface-variant text-on-surface-variant cursor-not-allowed'}`}>
              Proceed to Checkout
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            
            <p className="font-epilogue text-on-surface-variant text-center mt-4 text-[12px] uppercase tracking-wider">
              All sales are final. No refunds.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const CartItem = ({ item, onUpdateQty, onRemove }) => (
  <article className="bg-surface-container-low border border-outline/20 flex flex-col sm:flex-row overflow-hidden relative group hover:border-outline/50 transition-colors rounded-none">
    <div className="w-full sm:w-48 h-48 sm:h-auto relative bg-surface-container-highest">
      <img alt={item.title} className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" src={item.img} />
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent sm:hidden"></div>
      <div className="absolute inset-0 scanlines opacity-30"></div>
    </div>
    
    <div className="p-6 flex flex-col justify-between flex-1">
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className={`font-space text-[10px] font-bold text-${item.color} border border-${item.color}/30 px-2 py-1 mb-3 inline-block tracking-widest uppercase`}>{item.type}</span>
          <h2 className="font-space text-2xl font-bold text-white uppercase leading-tight mb-1 tracking-tighter">{item.title}</h2>
          <p className="font-space text-[10px] font-bold text-on-surface-variant flex items-center gap-2 uppercase tracking-widest">
            <span className="material-symbols-outlined text-[14px]">calendar_month</span> {item.date}
          </p>
        </div>
        <button onClick={() => onRemove(item.id)} className="text-on-surface-variant hover:text-error transition-colors p-2 -mr-2 -mt-2">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex justify-between items-end mt-6 border-t border-outline/20 pt-4">
        {/* Quantity */}
        <div className="flex items-center border border-outline/30 bg-surface-container-lowest">
          <button onClick={() => onUpdateQty(item.id, item.qty - 1)} className="w-10 h-10 flex items-center justify-center text-white hover:text-primary-container hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span className="w-10 h-10 flex items-center justify-center font-space text-lg font-bold text-white border-x border-outline/30">{item.qty}</span>
          <button onClick={() => onUpdateQty(item.id, item.qty + 1)} className="w-10 h-10 flex items-center justify-center text-white hover:text-primary-container hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        {/* Price */}
        <div className="text-right">
          {item.originalPrice && <div className="font-epilogue text-sm text-on-surface-variant line-through opacity-50">${item.originalPrice}</div>}
          <div className="font-space text-2xl font-bold text-primary-container tracking-tighter">${(item.price * item.qty).toFixed(2)}</div>
        </div>
      </div>
    </div>
  </article>
);

export default TicketCart;

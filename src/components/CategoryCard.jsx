import React from 'react';

const CategoryCard = ({ id, title, color, img, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`relative text-left aspect-square bg-surface-container-highest border overflow-hidden group transition-all rounded-none w-full ${active ? `border-${color} shadow-[0_0_15px_rgba(var(--tw-colors-${color}),0.5)]` : 'border-outline/20 hover:border-outline/50'}`}
  >
    <img alt={title} className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${active ? 'opacity-60 scale-105 grayscale-0' : 'opacity-30 group-hover:opacity-50 group-hover:scale-105 grayscale'}`} src={img} />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4">
      <span className={`font-space text-xs font-bold text-${color} mb-1 block`}>{id}</span>
      <h3 className="font-space text-2xl font-bold text-white uppercase tracking-tighter">{title}</h3>
    </div>
  </button>
);

export default CategoryCard;

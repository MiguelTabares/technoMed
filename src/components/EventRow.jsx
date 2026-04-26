import React from 'react';
import { Link } from 'react-router-dom';

const EventRow = ({ title, location, lineup, date, img, featured }) => (
  <div className="flex flex-col md:flex-row bg-surface-container-low border border-outline/20 hover:border-primary-container group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] rounded-none overflow-hidden">
    <div className="w-full md:w-48 h-48 relative border-b md:border-b-0 md:border-r border-outline/20">
      <img alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" src={img} />
      <div className="absolute inset-0 scanlines opacity-40"></div>
    </div>
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <Link to="/event-details">
            <h3 className="font-space text-2xl font-bold text-white uppercase tracking-tight leading-none group-hover:text-primary-container transition-colors">{title}</h3>
          </Link>
          <span className="border border-white px-2 py-1 font-space text-[10px] font-bold text-white uppercase tracking-widest">{location}</span>
        </div>
        <p className="font-epilogue text-sm text-on-surface-variant mb-4">{lineup}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mt-auto border-t border-white/5 pt-4">
        <div className="flex items-center text-primary-container/80 font-space text-[10px] font-bold tracking-widest uppercase">
          <span className="material-symbols-outlined mr-2 text-base">calendar_today</span>
          {date}
        </div>
        <Link to="/event-details" className={`font-space text-[10px] font-bold tracking-widest uppercase px-6 py-2 transition-all flex items-center ${featured ? 'bg-primary-container text-on-primary-container hover:bg-white' : 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-black'}`}>
          Acquire Access <span className="material-symbols-outlined ml-2 text-sm">local_activity</span>
        </Link>
      </div>
    </div>
  </div>
);

export default EventRow;

import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-background text-on-background min-h-screen pb-32">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden scanlines-overlay">
        <img
          alt="Medellin Techno Scene"
          className="absolute inset-0 w-full h-full object-cover object-center filter grayscale opacity-50 mix-blend-luminosity"
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 scanlines opacity-30"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 max-w-7xl mx-auto md:left-1/2 md:-translate-x-1/2 flex flex-col items-center text-center gap-4">
          <div className="bg-background/60 backdrop-blur-md border border-outline/20 px-4 py-2 inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-container shadow-[0_0_8px_#b7f700] animate-pulse"></span>
            <span className="font-space text-xs font-bold text-primary-container uppercase tracking-widest">SYSTEM_INFO</span>
          </div>
          <h1 className="font-space text-5xl md:text-7xl font-bold text-white leading-none mix-blend-screen drop-shadow-neon uppercase tracking-tighter">About Techno_Med</h1>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 mt-12 flex flex-col gap-8">
        
        {/* Core Concept Box */}
        <div className="bg-surface-container-low border border-outline/20 p-8 md:p-12 relative overflow-hidden group hover:border-primary-container/50 transition-colors duration-500 rounded-none">
          <div className="absolute top-0 right-0 p-4 opacity-5 font-space font-bold text-8xl leading-none text-white pointer-events-none">X1</div>
          
          <h2 className="font-space text-3xl font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-tighter">
            <span className="material-symbols-outlined text-primary-container">hub</span>
            El Nexo Central
          </h2>
          
          <div className="space-y-6 font-epilogue text-lg text-on-surface-variant leading-relaxed relative z-10">
            <p>
              <strong className="text-primary-container font-space uppercase tracking-widest text-sm mr-2">ORIGEN //</strong>
              TechnoMed nace como respuesta a la creciente y vibrante escena de la música electrónica underground en Medellín. La ciudad respira techno, pero la información estaba fragmentada.
            </p>
            <p>
              <strong className="text-white font-space uppercase tracking-widest text-sm mr-2">MISIÓN //</strong>
              Hemos creado una plataforma centralizada que actúa como el núcleo principal para descubrir, rastrear y asegurar acceso a todos los eventos de la cultura techno en el valle de Aburrá.
            </p>
          </div>
        </div>

        {/* Features / Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest border border-outline/30 p-8 relative rounded-none hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4 block" style={{fontVariationSettings: "'FILL' 0"}}>radar</span>
            <h3 className="font-space text-xl font-bold text-white mb-2 uppercase tracking-tight">Radar de Eventos</h3>
            <p className="font-epilogue text-sm text-on-surface-variant">Desde raves industriales en bodegas ocultas hasta festivales masivos. Si el BPM es alto, está en nuestro radar.</p>
          </div>
          
          <div className="bg-surface-container-lowest border border-outline/30 p-8 relative rounded-none hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4 block" style={{fontVariationSettings: "'FILL' 0"}}>lock</span>
            <h3 className="font-space text-xl font-bold text-white mb-2 uppercase tracking-tight">Acceso Seguro</h3>
            <p className="font-epilogue text-sm text-on-surface-variant">Protocolos de encriptación para garantizar que tu ticket digital sea intransferible, seguro y siempre disponible en la red.</p>
          </div>
        </div>

        {/* Closing Box */}
        <div className="border border-secondary p-8 md:p-10 relative flex flex-col items-center text-center mt-8">
          <div className="absolute inset-0 bg-secondary/5"></div>
          <h3 className="font-space text-2xl font-bold text-white uppercase tracking-tighter mb-4 relative z-10">Únete a la Resistencia</h3>
          <p className="font-epilogue text-base text-on-surface-variant mb-8 relative z-10 max-w-xl mx-auto">
            Sé parte de la comunidad electrónica más grande de Colombia. Accede a tickets de preventa, line-ups secretos y coordenadas exclusivas.
          </p>
          <Link to="/register" className="relative z-10 bg-secondary text-black font-space text-sm font-bold uppercase tracking-widest py-4 px-8 hover:bg-white hover:shadow-[0_0_20px_rgba(233,179,255,0.4)] transition-all active:scale-[0.98] rounded-none">
            Inicializar Registro
          </Link>
        </div>

      </section>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../backend/auth';

const eventsData = [
  {
    id: 1,
    title: "Klockworks Showcase",
    location: "Bodega 01 - Medellín",
    lineup: "Ben Klock, DVS1, Stef Mendesidis (Live)",
    date: "OCT 28 // 23:00 - 10:00",
    img: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=2940&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 2,
    title: "EXHALE Warehouse",
    location: "Pabellón Amarillo",
    lineup: "Amelie Lens, Farrago, Kobosil",
    date: "NOV 11 // 22:00 - 08:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: true,
    genre: "Hardcore"
  },
  {
    id: 3,
    title: "Acid Reign Vol. 3",
    location: "Club Subterráneo 1984",
    lineup: "Charlotte de Witte, Alignment",
    date: "NOV 18 // 23:30 - 06:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: false,
    genre: "Acid"
  },
  {
    id: 4,
    title: "Afterlife Medellín",
    location: "Estadio Cincuentenario",
    lineup: "Tale Of Us, Anyma, MRAK, Kevin de Vries",
    date: "FEB 02 // 18:00 - 04:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    genre: "Melodic"
  },
  {
    id: 5,
    title: "Vault Sessions X",
    location: "Antigua Estación del Ferrocarril",
    lineup: "SNTS, I Hate Models, Paula Temple",
    date: "DIC 05 // 22:00 - 09:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2871&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 6,
    title: "Klangkuenstler All Night Long",
    location: "Terraza Centro",
    lineup: "Klangkuenstler",
    date: "DIC 15 // 23:00 - 07:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop",
    featured: false,
    genre: "Hardcore"
  },
  {
    id: 7,
    title: "Awakenings Connect",
    location: "Plaza Mayor",
    lineup: "Adam Beyer, Joris Voorn, Pan-Pot",
    date: "ENE 14 // 16:00 - 03:00",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2942&auto=format&fit=crop",
    featured: true,
    genre: "Melodic"
  },
  {
    id: 8,
    title: "Boiler Room Medellín",
    location: "Secret Location",
    lineup: "Deraout, Merino, Verraco, Julianna",
    date: "FEB 20 // 21:00 - 05:00",
    img: "https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?q=80&w=2874&auto=format&fit=crop",
    featured: false,
    genre: "Acid"
  },
  {
    id: 9,
    title: "Neopop Satellite",
    location: "Teatro al Aire Libre",
    lineup: "Richie Hawtin, Paco Osuna",
    date: "MAR 10 // 20:00 - 04:00",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 10,
    title: "Verknipt Colombia",
    location: "Coliseo Ivan de Bedout",
    lineup: "Sara Landry, Nico Moreno, OGUZ",
    date: "MAR 25 // 21:00 - 06:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    featured: true,
    genre: "Hardcore"
  },
  {
    id: 11,
    title: "Anjunadeep Open Air",
    location: "Jardín Botánico",
    lineup: "Ben Böhmer, Eli & Fur, Yotto",
    date: "ABR 05 // 14:00 - 23:00",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2871&auto=format&fit=crop",
    featured: false,
    genre: "Melodic"
  },
  {
    id: 12,
    title: "Possession Medellín",
    location: "Edificio Fabricato (Sótano)",
    lineup: "Shlømo, Parfait, Héctor Oaks",
    date: "ABR 18 // 23:59 - 08:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2831&auto=format&fit=crop",
    featured: false,
    genre: "Industrial"
  },
  {
    id: 13,
    title: "999999999 Live",
    location: "MUTE",
    lineup: "999999999 (Live), Charlie Sparks",
    date: "MAY 01 // 23:00 - 06:00",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2942&auto=format&fit=crop",
    featured: true,
    genre: "Acid"
  },
  {
    id: 14,
    title: "Teletech Showcase",
    location: "Bodega de los Espejos",
    lineup: "Azyr, BLK., Kettama",
    date: "MAY 15 // 22:00 - 08:00",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2874&auto=format&fit=crop",
    featured: false,
    genre: "Hardcore"
  }
];

const Home = () => {
  const [activeGenre, setActiveGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const myLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error disconnecting:", error);
    }
  };

  const handleGenreClick = (genre) => {
    // Si haces clic en el mismo género, se quita el filtro (se muestran todos)
    setActiveGenre(prev => prev === genre ? null : genre);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = eventsData.filter(event => {
    // 1. Filtrar por género
    const matchGenre = activeGenre ? event.genre === activeGenre : true;
    
    // 2. Filtrar por búsqueda de texto (evento, djs, venue)
    const textLower = searchQuery.toLowerCase();
    const matchSearch = 
      event.title.toLowerCase().includes(textLower) ||
      event.lineup.toLowerCase().includes(textLower) ||
      event.location.toLowerCase().includes(textLower);

    return matchGenre && matchSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[530px] flex items-center justify-center border-b border-outline/20 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyCDBl-fR2X3l67sqms7bzcjj-lrNNsXpfkJedow4tUXdMuNMj7VKWH6MNSeXAFL6O28fnGyS49kHifMpWZGn2gOH7GCdjaMEqARGk-Hr_bYWiYbyL1CpJ4ymovw6CydNRgTtC8rJjhijxpgZO17V8FVR30yhoEkfsAdQZxxHh6sDUyj-Iy8NBj1SYy0PISN-0IItG2cALqlCUcokzfdjbgDKAHrZrGeqS8CBBhJ5ddam1kaG5YLdJq8H7iJIyJEOZTzObMnTzSzU"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 scanlines opacity-30"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">
          <h1 className="font-space text-5xl md:text-7xl font-bold text-primary-container mb-6 uppercase tracking-tighter drop-shadow-neon">
            Initiate Sequence
          </h1>
          
          <div className="w-full max-w-2xl mt-8 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-primary-container/60">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="w-full bg-surface-container-low/80 backdrop-blur-md border-b-2 border-primary-container py-5 pl-12 pr-4 text-white font-space text-sm tracking-widest uppercase focus:outline-none focus:bg-surface-container-high focus:shadow-[0_0_20px_rgba(183,247,0,0.2)] transition-all rounded-none placeholder:text-on-surface-variant"
              placeholder="SEARCH EVENTS, DJS, VENUES..."
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="absolute inset-y-0 right-0 px-6 bg-primary-container text-on-primary-container font-space font-bold text-xs uppercase hover:bg-white transition-colors rounded-none">
              Execute
            </button>
          </div>
          
          <button onClick={myLogout} className="mt-8 flex items-center gap-2 text-on-surface-variant hover:text-error transition-colors font-space text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">power_settings_new</span>
            Terminate Connection // Logout
          </button>
        </div>
      </section>

      <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto w-full space-y-16">
        {/* Categories Grid */}
        <section>
          <div className="flex items-center justify-between border-b border-outline/20 pb-4 mb-8">
            <h2 className="font-space text-3xl font-bold text-white uppercase tracking-tight">Genres //</h2>
            {activeGenre && (
              <button onClick={() => setActiveGenre(null)} className="font-space text-xs font-bold text-error hover:text-white uppercase tracking-widest flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-[14px]">close</span>
                Clear Filter
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard id="01" title="Industrial" color="primary-container" img="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop" active={activeGenre === "Industrial"} onClick={() => handleGenreClick("Industrial")} />
            <CategoryCard id="02" title="Acid" color="secondary" img="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop" active={activeGenre === "Acid"} onClick={() => handleGenreClick("Acid")} />
            <CategoryCard id="03" title="Melodic" color="primary-container" img="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop" active={activeGenre === "Melodic"} onClick={() => handleGenreClick("Melodic")} />
            <CategoryCard id="04" title="Hardcore" color="secondary" img="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop" active={activeGenre === "Hardcore"} onClick={() => handleGenreClick("Hardcore")} />
          </div>
        </section>

        {/* Transmissions List */}
        <section>
          <div className="flex items-center justify-between border-b border-outline/20 pb-4 mb-8">
            <h2 className="font-space text-3xl font-bold text-white uppercase tracking-tight">Active Transmissions //</h2>
            <div className="font-space text-xs font-bold text-on-surface-variant tracking-widest uppercase">
              {filteredEvents.length} Events Found
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <EventRow key={event.id} {...event} />
              ))
            ) : (
              <div className="text-center py-20 bg-surface-container-low border border-outline/20 rounded-none">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">search_off</span>
                <h3 className="font-space text-xl font-bold text-white uppercase mb-2 tracking-tight">No Events Found</h3>
                <p className="font-epilogue text-sm text-on-surface-variant">Intenta ajustar tu búsqueda o limpiar los filtros.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

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

const EventRow = ({ title, location, lineup, date, img, featured }) => (
  <div className="flex flex-col md:flex-row bg-surface-container-low border border-outline/20 hover:border-primary-container group transition-colors rounded-none overflow-hidden">
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

export default Home;

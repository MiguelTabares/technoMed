import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../backend/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../backend/database.js';
import CategoryCard from '../components/CategoryCard';
import EventRow from '../components/EventRow';

const Home = () => {
  const [activeGenre, setActiveGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [eventsData, setEventsData] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, 'events');
        const eventSnapshot = await getDocs(eventsCollection);
        const eventsList = eventSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEventsData(eventsList);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

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
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
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

  const itemsPerPage = 7;
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

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
              className="w-full hover:bg-surface-container-high/90 hover:shadow-[0_0_15px_rgba(183,247,0,0.2)] bg-surface-container-low/80 backdrop-blur-md border-b-2 border-primary-container py-5 pl-12 pr-4 text-white font-space text-sm tracking-widest uppercase focus:outline-none focus:bg-surface-container-high focus:shadow-[0_0_20px_rgba(183,247,0,0.2)] transition-all rounded-none placeholder:text-on-surface-variant"
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
            {loadingEvents ? (
              <div className="text-center py-20 bg-surface-container-low border border-outline/20 rounded-none animate-pulse">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-4 animate-[spin_2s_linear_infinite]">sync</span>
                <h3 className="font-space text-xl font-bold text-primary-container uppercase mb-2 tracking-widest">Downloading Data...</h3>
                <p className="font-epilogue text-sm text-on-surface-variant">Syncing with mainframe.</p>
              </div>
            ) : visibleEvents.length > 0 ? (
              <>
                {visibleEvents.map(event => (
                  <EventRow key={event.id} {...event} />
                ))}
                
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 pt-8">
                    <button 
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(prev => prev - 1)}
                      className="w-10 h-10 flex items-center justify-center border border-outline/30 text-white disabled:opacity-30 hover:bg-white/5 transition-colors rounded-none"
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 flex items-center justify-center font-space font-bold text-sm transition-colors rounded-none ${currentPage === page ? 'border-2 border-primary-container bg-primary-container text-black' : 'border border-outline/30 text-white hover:bg-white/5'}`}
                      >
                        {page}
                      </button>
                    ))}

                    <button 
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage(prev => prev + 1)}
                      className="w-10 h-10 flex items-center justify-center border border-outline/30 text-white disabled:opacity-30 hover:bg-white/5 transition-colors rounded-none"
                    >
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                )}
              </>
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

export default Home;

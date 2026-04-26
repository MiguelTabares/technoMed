import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 md:p-6 bg-background/90 backdrop-blur-md border-b border-outline/20 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <h1 className="text-xl font-bold font-space tracking-widest uppercase text-white hover:text-primary-container hover:drop-shadow-neon transition-all duration-300">
            Techno_Med
          </h1>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link 
            to="/" 
            className="text-on-surface-variant hover:text-primary-container font-medium transition-colors duration-200 uppercase text-xs tracking-widest font-space"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-on-surface-variant hover:text-primary-container font-medium transition-colors duration-200 uppercase text-xs tracking-widest font-space"
          >
            About
          </Link>
        </div>
      </div>
      
      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center gap-6">
        <Link 
          to="/cart"
          className="flex items-center justify-center text-on-surface-variant hover:text-primary-container transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </Link>
        <div className="flex gap-4">
        <Link 
          to="/login"
          className="px-4 py-2 text-xs font-bold font-space tracking-widest text-on-surface-variant hover:text-white uppercase transition-all"
        >
          AUTH
        </Link>
        <Link 
          to="/register"
          className="px-6 py-2 text-xs font-bold font-space tracking-widest text-on-primary-container bg-primary-container hover:bg-lime-400 rounded-none shadow-[0_0_15px_rgba(183,247,0,0.3)] uppercase transition-all active:scale-95"
        >
          REGISTRY
        </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle & Cart */}
      <div className="flex md:hidden items-center gap-4">
        <Link to="/cart" className="text-on-surface-variant hover:text-primary-container" onClick={() => setIsMobileMenuOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </Link>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container-highest border-b border-outline/20 p-6 flex flex-col gap-6 md:hidden">
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-white font-space font-bold uppercase tracking-widest text-lg">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className="text-white font-space font-bold uppercase tracking-widest text-lg">About</Link>
          <div className="h-[1px] bg-outline/20 w-full"></div>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/login" className="text-on-surface-variant font-space font-bold uppercase tracking-widest text-lg">AUTH</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/register" className="text-primary-container font-space font-bold uppercase tracking-widest text-lg">REGISTRY</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

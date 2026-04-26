import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-background/90 backdrop-blur-md border-b border-outline/20 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl font-bold font-space tracking-widest uppercase text-white">
            Techno_Med
          </h1>
        </Link>
        <div className="flex gap-6">
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
      <div className="flex items-center gap-6">
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
          Auth_Seq
        </Link>
        <Link 
          to="/register"
          className="px-6 py-2 text-xs font-bold font-space tracking-widest text-on-primary-container bg-primary-container hover:bg-lime-400 rounded-none shadow-[0_0_15px_rgba(183,247,0,0.3)] uppercase transition-all active:scale-95"
        >
          Reg_Seq
        </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

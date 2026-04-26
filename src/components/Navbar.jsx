import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-background/90 backdrop-blur-md border-b border-outline/20 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-container">biotech</span>
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
    </nav>
  )
}

export default Navbar

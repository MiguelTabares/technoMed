import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          TechnoMed
        </h1>
        <div className="flex gap-6">
          <Link 
            to="/" 
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-all">
          Log in
        </button>
        <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-95">
          Sign up
        </button>
      </div>
    </nav>
  )
}

export default Navbar

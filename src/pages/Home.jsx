const Home = () => {
  return (
    <div className="p-8">
      <header className="max-w-4xl">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
          Bienvenido a <span className="text-blue-600">TechnoMed</span>
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">
          La plataforma definitiva para la gestión médica avanzada. Innovación y cuidado, todo en un solo lugar.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95">
            Empezar ahora
          </button>
          <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95">
            Saber más
          </button>
        </div>
      </header>
    </div>
  )
}

export default Home

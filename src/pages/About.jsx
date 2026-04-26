const About = () => {
  return (
    <div className="p-8">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Sobre Nosotros</h2>
        <p className="text-lg text-slate-600 mb-4">
          TechnoMed nació con la visión de digitalizar y optimizar cada proceso en el sector salud.
        </p>
        <p className="text-lg text-slate-600 mb-6">
          Utilizamos las últimas tecnologías en inteligencia artificial y gestión de datos para asegurar que el personal médico pueda enfocarse en lo que más importa: sus pacientes.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
          <p className="text-blue-800 font-medium italic">
            "Nuestra misión es salvar vidas a través de la tecnología."
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

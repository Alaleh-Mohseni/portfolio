import portfolioData from '../../portfolio-data'

function Skills({ lang = 'en' }) {
  const skillsData = portfolioData[lang].skills

  return (
    <section className="w-full min-h-screen flex items-center justify-center skills">
      <div className="w-full mx-auto flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2>{skillsData.title}</h2>
          <p className="text-lg">{skillsData.subtitle}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-y-10 gap-x-8 mt-15 w-full">
          {skillsData.items.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                />
              </div>
              <span className="text-lg font-base text-white text-center tracking-wide">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

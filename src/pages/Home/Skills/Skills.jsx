import { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext'
import portfolioData from '../../../constants/portfolio-data'
import './Skills.css'

function Skills() {
  const { language } = useContext(LanguageContext)
  const skillsData = portfolioData[language].skills

  return (
    <section
      className="w-full flex items-center justify-center skills"
      id="skills"
    >
      <div className="w-full mx-auto flex flex-col items-center gap-12">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2>{skillsData.title}</h2>
          <p className="text-lg">{skillsData.subtitle}</p>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 gap-y-10 gap-x-8 mt-15 w-full">
          {skillsData.items.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-base font-normal text-white text-center tracking-wide skill-name">
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

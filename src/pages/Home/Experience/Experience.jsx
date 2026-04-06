import { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext'
import portfolioData from '../../../constants/portfolio-data'
import Link from '../../../components/Link/Link'
import './Experience.css'

function Experience() {
  const { language } = useContext(LanguageContext)
  const data = portfolioData[language]?.experience

  return (
    <section className="experience relative" id="experience">
      <div className="decorate"></div>

      <div className="w-full mx-auto">
        {/* Section Title */}
        <h2 className="text-center mb-16">{data.title}</h2>

        {/* Experience Cards */}
        <div className="flex flex-col items-center gap-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[70%] rounded-2xl border-2 p-6 md:p-12 flex flex-col gap-5 md:gap-8
              bg-[var(--surface)] border-[var(--card-border-color)]
              shadow-[var(--card-box-shadow)]
              transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-box-shadow)]"
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 md:gap-6">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
                  />
                )}

                <div className="flex-1">
                  <Link
                    href={item.companyLink}
                    variant="accent"
                    className="text-sm md:text-base"
                  >
                    {item.company}
                  </Link>

                  <h4 className="text-base md:text-xl font-bold">
                    {item.position}
                  </h4>

                  <span className="text-[12px] md:text-[14px] font-normal text-[var(--muted-foreground)] opacity-70">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="flex flex-col gap-4">
                  {item.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)] mt-2.5 flex-shrink-0"></span>
                      <p className="leading-relaxed flex-1 text-sm md:text-base">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

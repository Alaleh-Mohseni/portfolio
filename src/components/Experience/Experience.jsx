import './Experience.css'

function Experience({ lang, portfolioData }) {
  const data = portfolioData[lang]?.experience

  return (
    <section className="experience relative">
      <div className="decorate"></div>
      <div className="w-full mx-auto">
        {/* Section Title */}
        <h2 className="text-center mb-16">{data.title}</h2>

        {/* Experience Cards */}
        <div className="flex flex-col items-center gap-8">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="experience-card rounded-2xl p-12 flex flex-col gap-8 transition-all duration-300 border-2 w-full md:w-[70%]"
            >
              {/* Company Header */}
              <div className="flex items-start gap-4 md:items-center">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-16 h-16 object-contain flex-shrink-0"
                  />
                )}
                <div className="flex-1">
                  <a
                    href={item.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-1 hover:underline transition-all inline-block"
                  >
                    <h5 className="text-[var(--accent)]">{item.company}</h5>
                  </a>
                  <h4 className="mb-2">{item.position}</h4>
                  <span className="text-[14px] font-normal text-[var(--muted-foreground)] opacity-70">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Achievements List */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="flex flex-col gap-4">
                  {item.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></span>
                      <p className="leading-relaxed flex-1">{achievement}</p>
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

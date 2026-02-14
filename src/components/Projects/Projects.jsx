import { useState } from 'react'
import './Projects.css'

function Projects({ lang, portfolioData }) {
  const data = portfolioData[lang].projects
  const [activeCategory, setActiveCategory] = useState('All Projects')

  const filteredProjects =
    activeCategory === 'All Projects' || activeCategory === 'همه پروژه‌ها'
      ? data.items
      : data.items.filter((project) => project.category === 'Dashboard')

  return (
    <section className="projects">
      <div className="mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-start">
          <h2 className="mb-4">{data.title}</h2>
          <p className="text-lg">{data.subtitle}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-16">
          {data.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-button ${
                activeCategory === category ? 'active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3 className="mb-2">{project.title}</h3>
                <p className="mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import {
  BsArrowUpRightCircle,
  BsArrowUpLeftCircle,
  BsArrowUpRightCircleFill,
  BsArrowUpLeftCircleFill,
} from 'react-icons/bs'
import Link from '../../../components/Link/Link'
import './Projects.css'

function Projects({ lang, portfolioData }) {
  const data = portfolioData[lang].projects
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [previewImage, setPreviewImage] = useState(null)

  const filteredProjects =
    activeCategory === 'All Projects' || activeCategory === 'همه پروژه‌ها'
      ? data.items
      : data.items.filter((project) => project.category === 'Dashboard')

  return (
    <section className="projects" id="projects">
      <div className="mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 gap-4">
          <h2>{data.title}</h2>
          <p className="text-lg">{data.subtitle}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-16">
          {data.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-button ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Project Image */}
              <div
                className="project-image-wrapper"
                onClick={() => setPreviewImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-overlay">
                  <span className="preview-hint">
                    {lang === 'fa' ? 'مشاهده تصویر' : 'Click to preview'}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <div className="flex items-center justify-between mb-1">
                  <h4>{project.title}</h4>
                  {project.link && project.link !== '#' && (
                    <Link
                      href={project.link}
                      variant="none"
                      onClick={(e) => e.stopPropagation()}
                      className="text-primary hover:opacity-70 transition-opacity group"
                    >
                      {lang === 'fa' ? (
                        <>
                          <BsArrowUpLeftCircle className="text-xl group-hover:hidden" />
                          <BsArrowUpLeftCircleFill className="text-xl hidden group-hover:block text-[var(--accent)]" />
                        </>
                      ) : (
                        <>
                          <BsArrowUpRightCircle className="text-xl group-hover:hidden" />
                          <BsArrowUpRightCircleFill className="text-xl hidden group-hover:block text-[var(--accent)]" />
                        </>
                      )}
                    </Link>
                  )}
                </div>
                <p className="text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
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

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="preview-modal" onClick={() => setPreviewImage(null)}>
          <button
            className="close-button"
            onClick={() => setPreviewImage(null)}
          >
            <GrClose />
          </button>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <img src={previewImage} alt="Preview" className="preview-image" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects

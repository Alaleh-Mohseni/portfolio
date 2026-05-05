import { useState, useContext } from 'react'
import { GrClose } from 'react-icons/gr'
import {
  BsArrowUpRightCircle,
  BsArrowUpLeftCircle,
  BsArrowUpRightCircleFill,
  BsArrowUpLeftCircleFill,
} from 'react-icons/bs'
import { LanguageContext } from '../../contexts/LanguageContext'
import portfolioData from '../../data/portfolio-data'
import Link from '../Link/Link'
import './Projects.css'

function Projects() {
  const { language } = useContext(LanguageContext)
  const data = portfolioData[language].projects
  const [activeCategory, setActiveCategory] = useState('all')
  const [previewImage, setPreviewImage] = useState(null)

  const filteredProjects =
    activeCategory === 'all'
      ? data.items
      : data.items.filter((project) =>
          project.category.includes(activeCategory)
        )

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
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`h-10 min-w-[120px] md:min-w-[120px] px-5 md:px-5 text-sm md:text-sm font-medium rounded-[10px] bg-transparent cursor-pointer transition-all duration-[250ms] ease-in-out
  ${
    activeCategory === category.key
      ? 'bg-[image:var(--accent-gradient)] text-white border-transparent'
      : 'text-[var(--foreground)] shadow-[var(--btn-shadow)] hover:shadow-[0_0_15px_rgba(110,78,242,0.35)]'
  }
  max-md:min-w-auto max-md:px-3.5 max-md:text-[13px] max-md:h-9`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 flex flex-col gap-4 rounded-2xl bg-[var(--background)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] max-md:p-3.5 max-md:gap-3.5"
            >
              {/* Project Image */}
              <div
                className="group w-full h-[200px] overflow-hidden cursor-pointer relative rounded-xl shadow-[var(--img-box-shadow)] max-md:h-[220px]"
                onClick={() => setPreviewImage(project.image)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-[350ms] ease-in-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-[rgba(110,78,242,0.15)] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-[13px] font-medium bg-[rgba(0,0,0,0.45)] px-3.5 py-1.5 rounded-[20px] backdrop-blur-[4px]">
                    {language === 'fa' ? 'مشاهده تصویر' : 'Click to preview'}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4>{project.title}</h4>
                  {project.link && project.link !== '#' && (
                    <Link
                      href={project.link}
                      variant="none"
                      onClick={(e) => e.stopPropagation()}
                      className="text-primary hover:opacity-70 transition-opacity group"
                    >
                      {language === 'fa' ? (
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
                    <span
                      key={index}
                      className="flex justify-center items-center px-2.5 py-[3px] rounded text-[11px] font-medium bg-[var(--tag-bg)] text-[var(--accent)] border-[var(--tag-border)]"
                    >
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
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-[9999] p-10 animate-fadeIn cursor-pointer backdrop-blur-[4px] max-md:p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            className={`fixed top-5 ${language === 'fa' ? 'left-5 max-md:left-3' : 'right-5 max-md:right-3'} w-9 h-9 bg-[rgba(255,255,255,0.15)] backdrop-blur-[6px] border border-[rgba(255,255,255,0.2)] rounded-full text-white text-base cursor-pointer transition-all duration-[250ms] ease-in-out flex items-center justify-center z-[10000] hover:rotate-90 hover:bg-[rgba(255,255,255,0.25)] max-md:top-3`}
            onClick={() => setPreviewImage(null)}
          >
            <GrClose />
          </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh] animate-zoomIn max-md:max-w-[95vw] max-md:max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-full max-w-[90vw] max-h-[90vh] object-contain rounded-[1px] shadow-[0_24px_64px_rgba(0,0,0,0.6)] max-md:max-w-[95vw] max-md:max-h-[95vh]"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects

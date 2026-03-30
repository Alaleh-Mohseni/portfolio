import { resumeData } from '../../constants/resume-data'
import ResumeDetails from './ResumeDetails/ResumeDetails'
import './Resume.css'

function Resume() {
  const {
    profile,
    skills,
    experience,
    projects,
    education,
    languages,
    activities,
  } = resumeData.en

  return (
    <div className="content main">
      <div className="card">
        <div className="flex flex-col gap-5 resume">
          {profile && (
            <div className="w-full p-6">
              <div className="flex flex-col justify-center items-center gap-2 profile">
                <div className="flex justify-center items-center gap-2">
                  <h1 className="text-2xl">{profile.name}</h1>|
                  <h4 className="capitalize font-medium text-base">
                    {profile.job_title}
                  </h4>
                </div>
                <div className="flex justify-center items-center gap-2">
                  {profile.mobile && (
                    <a
                      className="text-[var(--muted-foreground)]"
                      href={`tel:${profile.mobile}`}
                    >
                      {profile.mobile}
                    </a>
                  )}
                  {profile.mobile && profile.province && '|'}
                  {profile.province && (
                    <p className="capitalize">{profile.province}</p>
                  )}
                </div>
                <div className="flex justify-center items-center gap-2">
                  {profile.social_links.map((item) => (
                    <>
                      <a
                        className="text-blue-500 hover:opacity-70 transition-opacity"
                        href={
                          item.name === 'Gmail'
                            ? `mailto:${item.url}`
                            : item.url
                        }
                        target={item.name !== 'Gmail' && '_blank'}
                        rel={item.name !== 'Gmail' && 'noopener noreferrer'}
                      >
                        {item.name === 'Gmail'
                          ? item.url
                          : item.url
                              .replace('https://', '')
                              .replace('http://', '')}
                      </a>
                      {item.name != 'Gmail' && <span>|</span>}
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="py-0 px-12 mb-12 detail-content">
            <div className="flex flex-col gap-3 resume">
              <div className="flex flex-col gap-2 section">
                <h2>About</h2>
                <p>{profile.about}</p>
              </div>

              <div className="flex flex-col gap-2 section">
                <h2>Skills</h2>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <h3>Technical Skills:</h3>
                    <p className="capitalize">{skills.technical.join(', ')}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <h3>Familiar With:</h3>
                    <p>{skills.familiar.join(', ')}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 section">
                <h2>Experience</h2>
                {experience.items.map((exp, index) => (
                  <div key={index}>
                    <ResumeDetails
                      title={exp.position}
                      link={exp.company_link}
                      name={exp.company_name}
                      time={exp.period}
                      des={exp.about_company}
                      details={exp.achievements}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 section">
                <h2>Projects</h2>
                {projects.items.map((project, index) => (
                  <div key={index}>
                    <ResumeDetails
                      title={project.title}
                      link={project.link}
                      tec={project.technologies}
                      des={project.description}
                      details={project.topics}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 section">
                <h2>Education</h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <h3>
                      {education.degree} of {education.study_field}
                    </h3>
                    |{' '}
                    <p>
                      {education.university} of {education.city}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 section">
                <h2>Languages</h2>
                <div className="flex flex-col gap-1">
                  {languages?.length > 0 && (
                    <p>{languages.map((lang) => lang).join(', ')}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 section">
                <h2>Extra-Curricular Activities</h2>
                <ResumeDetails
                  title={activities.role}
                  link={activities.company_link}
                  name={activities.company}
                  des={activities.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

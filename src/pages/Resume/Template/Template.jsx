import { resumeData } from '../../../constants/resume-data'
import './Template.css'

function Template() {
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
    <div className="flex flex-col gap-5 resume">
      {profile && (
        <div className="w-full p-6">
          <div className="flex flex-col justify-center items-center gap-2 profile">
            <div className="flex justify-center items-center gap-2">
              <h1 className="text-2xl">{profile.name}</h1>|
              <p className="capitalize font-medium">{profile.job_title}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              {profile.mobile && (
                <a href={`tel:${profile.mobile}`}>{profile.mobile}</a>
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
                    href={
                      item.name === 'Gmail' ? `mailto:${item.url}` : item.url
                    }
                    target={item.name !== 'Gmail' && '_blank'}
                    rel={item.name !== 'Gmail' && 'noopener noreferrer'}
                  >
                    {item.name === 'Gmail'
                      ? item.url
                      : item.url.replace('https://', '').replace('http://', '')}
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
          {profile.about && (
            <div className="flex flex-col gap-2 section">
              <h2>About</h2>
              <p>{profile.about}</p>
            </div>
          )}

          {skills && (
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
          )}

          <div className="flex flex-col gap-2 section">
            <h2>Experience</h2>
            {experience.items.map((exp, index) => (
              <div key={exp._id || index}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <h3 className="capitalize">{exp.position}</h3>
                    {exp.company_name && (
                      <>
                        |{' '}
                        {exp.company_link ? (
                          <a
                            className="capitalize"
                            href={exp.company_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {exp.company_name}
                          </a>
                        ) : (
                          <span className="capitalize">{exp.company_name}</span>
                        )}
                      </>
                    )}
                  </div>
                  <p>{exp.period}</p>
                </div>
                <p>{exp.about_company}</p>
                {exp.achievements && (
                  <ul>
                    {exp.achievements.map((item) => (
                      <li className="text-[var(--muted-foreground)]">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 section">
            <h2>Projects</h2>
            {projects.items.map((project, index) => (
              <div key={index}>
                <div className="flex items-center gap-1">
                  <h3 className="capitalize">{project.title}</h3>
                  {project.technologies?.length > 0 && (
                    <>
                      |
                      <p className="capitalize">
                        {project.technologies.join(', ')}
                      </p>
                    </>
                  )}
                  {project.link && (
                    <>
                      |
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </>
                  )}
                </div>
                <p>{project.description}</p>
                {project.topics && (
                  <ul>
                    {project.topics.map((item) => (
                      <li className="text-[var(--muted-foreground)]">{item}</li>
                    ))}
                  </ul>
                )}
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

          {languages && (
            <div className="flex flex-col gap-2 section">
              <h2>Languages</h2>
              <div className="flex flex-col gap-1">
                {languages?.length > 0 && (
                  <p>{languages.map((lang) => lang).join(', ')}</p>
                )}
              </div>
            </div>
          )}

          {/* {activities && (
            <div className="flex flex-col gap-2 section">
              <h2>Extra-Curricular Activities</h2>
              <p>{activities.description}</p>
            </div>
          )} */}

          {activities && (
            <div className="flex flex-col gap-2 section">
              <h2>Extra-Curricular Activities</h2>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  {activities.role && (
                    <h3 className="capitalize">{activities.role}</h3>
                  )}
                  {activities.company && activities.role && <span>|</span>}
                  {activities.company_link && activities.company ? (
                    <a
                      className="capitalize"
                      href={activities.company_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {activities.company}
                    </a>
                  ) : (
                    activities.company && (
                      <p className="capitalize">{activities.company}</p>
                    )
                  )}
                </div>
                <p>{activities.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Template

import { resumeData } from '../../../constants/resume-data'
import styles from './TemplateThree.module.css'
import './Template.css'

function TemplateThree() {
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
    <div className="flex flex-col resume">
      {profile && (
        <div className={styles.header}>
          <div className="flex flex-col justify-center items-center overview">
            <div className="flex justify-center items-center">
              <h1 className={styles.name}>{profile.name}</h1>|
              <p className={styles.job_title}>{profile.job_title}</p>
            </div>
            <div className="flex justify-center items-center">
              {profile.mobile && (
                <a href={`tel:${profile.mobile}`}>{profile.mobile}</a>
              )}
              {profile.mobile && profile.province && '|'}
              {profile.province && (
                <p className={styles.text}>{profile.province}</p>
              )}
            </div>
            <div className="flex justify-center items-center">
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

      <div className={styles.content}>
        <div className="flex flex-col resume">
          {profile.about && (
            <div className="flex flex-col section">
              <h2>About</h2>
              <p>{profile.about}</p>
            </div>
          )}

          {skills && (
            <div className="flex flex-col section">
              <h2>Skills</h2>
              <div className="flex flex-col skill">
                <div className="flex items-center">
                  <h3>Technical Skills:</h3>
                  <p className={styles.text}>{skills.technical.join(', ')}</p>
                </div>
                <div className="flex items-center">
                  <h3>Familiar With:</h3>
                  <p>{skills.familiar.join(', ')}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col section">
            <h2>Experience</h2>
            {experience.items.map((exp, index) => (
              <div key={exp._id || index}>
                <div className="flex justify-between items-center work-experience">
                  <div className="flex items-center">
                    <h3 className={styles.text}>{exp.position}</h3>
                    {exp.company_name && (
                      <>
                        |{' '}
                        {exp.company_link ? (
                          <a
                            className={styles.text}
                            href={exp.company_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {exp.company_name}
                          </a>
                        ) : (
                          <span className={styles.text}>
                            {exp.company_name}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <p>{exp.period}</p>
                </div>
                <p>{exp.about_company}</p>
                {exp.achievements && (
                  <ul className={styles.list}>
                    {exp.achievements.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col section">
            <h2>Projects</h2>
            {projects.items.map((project, index) => (
              <div key={index}>
                <div className="flex items-center project">
                  <h3 className={styles.text}>{project.title}</h3>
                  {project.technologies?.length > 0 && (
                    <>
                      |
                      <p className={styles.text}>
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
                  <ul className={styles.list}>
                    {project.topics.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col section">
            <h2>Education</h2>
            <div className="flex justify-between items-center education">
              <div className="flex items-center">
                <h3 className={styles.text}>
                  {education.degree} of {education.study_field}
                </h3>
                |{' '}
                <p className={styles.text}>
                  {education.university} of {education.city}
                </p>
              </div>
            </div>
          </div>

          {languages && (
            <div className="flex flex-col section">
              <h2>Languages</h2>
              <div className="flex flex-col languages">
                {languages?.length > 0 && (
                  <p>{languages.map((lang) => lang).join(', ')}</p>
                )}
              </div>
            </div>
          )}

          {activities && (
            <div className="flex flex-col section">
              <h2>Extra-Curricular Activities</h2>
              <p>{activities.description}</p>
            </div>
          )}

          {activities && (
            <div className="flex flex-col section">
              <h2>Extra-Curricular Activities</h2>
              <div className="flex flex-col activities">
                <div className="flex items-center">
                  {activities.role && (
                    <h3 className={styles.text}>{activities.role}</h3>
                  )}
                  {activities.company && activities.role && <span>|</span>}
                  {activities.company_link && activities.company ? (
                    <a
                      className={styles.text}
                      href={activities.company_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {activities.company}
                    </a>
                  ) : (
                    activities.company && (
                      <p className={styles.text}>{activities.company}</p>
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

export default TemplateThree

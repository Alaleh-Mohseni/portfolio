import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'
import { resumeData } from '../../constants/resume-data'
import ResumeDetails from './ResumeDetails/ResumeDetails'
import BackToHomeButton from './BackToHomeButton/BackToHomeButton'
import DownloadResumeButton from './DownloadResumeButton/DownloadResumeButton'
import './Resume.css'

function Resume() {
  const { language } = useContext(LanguageContext)
  const {
    profile,
    skills,
    experience,
    projects,
    education,
    languages,
    activities,
  } = resumeData[language]

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen relative">
      <BackToHomeButton />
      <DownloadResumeButton />
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
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2 section">
                  <h2>{language === 'en' ? 'About' : 'درباره من'}</h2>
                  <p>{profile.about}</p>
                </div>

                <div className="flex flex-col gap-2 section">
                  <h2>{language === 'en' ? 'Skills' : 'مهارت‌ها'}</h2>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <h3>
                        {language === 'en'
                          ? 'Technical Skills'
                          : 'مهارت‌های فنی'}
                        :
                      </h3>
                      <p className="capitalize">
                        {skills.technical.join(', ')}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <h3>
                        {language === 'en' ? 'Familiar With' : 'آشنا به'}:
                      </h3>
                      <p>{skills.familiar.join(', ')}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 section">
                  <h2>{language === 'en' ? 'Experience' : 'سوابق شغلی'}</h2>
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
                  <h2>{language === 'en' ? 'Projects' : 'پروژه‌ها'}</h2>
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
                  <h2>{language === 'en' ? 'Education' : 'سوابق تحصیلی'}</h2>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <h3>
                        {education.degree} {language === 'en' && 'of'}{' '}
                        {education.study_field}
                      </h3>
                      |{' '}
                      <p>
                        {education.university} {language === 'en' && 'of'}{' '}
                        {education.city}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 section">
                  <h2>{language === 'en' ? 'Languages' : 'زبان‌ها'}</h2>
                  <div className="flex flex-col gap-1">
                    {languages?.length > 0 && (
                      <p>{languages.map((lang) => lang).join(', ')}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 section">
                  <h2>
                    {language === 'en'
                      ? 'Extra-Curricular Activities'
                      : 'فعالیت‌های داوطلبانه'}
                  </h2>
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
    </div>
  )
}

export default Resume

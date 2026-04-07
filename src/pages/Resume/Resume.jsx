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

      <div className="max-w-[968px] w-[calc(100%-3rem)] mx-auto mt-[var(--header-height)] content">
        <div className="w-full lg:shadow-[0_0_8px_rgba(13,12,12,0.15)] bg-[var(--header-bg)] card">
          <div className="flex flex-col gap-5 resume">
            {profile && (
              <div className="w-full p-6">
                <div className="flex flex-col items-center justify-center gap-2 profile">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl">{profile.name}</h1>|
                    <h4 className="text-base font-medium capitalize">
                      {profile.job_title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
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

                  <div className="flex items-center gap-2">
                    {profile.social_links.map((item, i) => (
                      <span key={i} className="flex items-center gap-2">
                        <a
                          className="text-blue-500 transition-opacity hover:opacity-70"
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

                        {item.name !== 'Gmail' && <span>|</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="px-12 mb-12 detail-content">
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
                    <ResumeDetails
                      key={index}
                      title={exp.position}
                      link={exp.company_link}
                      name={exp.company_name}
                      time={exp.period}
                      des={exp.about_company}
                      details={exp.achievements}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-2 section">
                  <h2>{language === 'en' ? 'Projects' : 'پروژه‌ها'}</h2>

                  {projects.items.map((project, index) => (
                    <ResumeDetails
                      key={index}
                      title={project.title}
                      link={project.link}
                      tec={project.technologies}
                      des={project.description}
                      details={project.topics}
                    />
                  ))}
                </div>

                <div className="flex flex-col gap-2 section">
                  <h2>{language === 'en' ? 'Education' : 'سوابق تحصیلی'}</h2>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <h3>
                        {education.degree} {language === 'en' && 'of'}{' '}
                        {education.study_field}
                      </h3>
                      |
                      <p>
                        {education.university} {language === 'en' && 'of'}{' '}
                        {education.city}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 section">
                  <h2>{language === 'en' ? 'Languages' : 'زبان‌ها'}</h2>

                  {languages?.length > 0 && <p>{languages.join(', ')}</p>}
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

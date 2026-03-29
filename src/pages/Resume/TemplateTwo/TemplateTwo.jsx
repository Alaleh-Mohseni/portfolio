import portfolioData from '../../../constants/portfolio-data'
import styles from './TemplateTwo.module.css'

function TemplateTwo() {
  const data = portfolioData[lang].skills

  return (
    <div className={styles.resume}>
      <div className={styles.sidebar_left}>
        <div className={styles.sidebar_content}>
          {overview && (
            <div className={styles.header}>
              {userData.profile_picture?.url && (
                <div className={styles.photo_container}>
                  <img src={userData.profile_picture.url} alt="Profile" />
                </div>
              )}
              <h1>
                {overview.first_name} {overview.last_name}
              </h1>
              {overview.job_title && (
                <p className={styles.text} style={{ color: sidebarTextColor }}>
                  {overview.job_title}
                </p>
              )}
              <p className={styles.text} style={{ color: sidebarTextColor }}>
                {overview.city && overview.city}
                {overview.city && overview.province && ' | '}
                {overview.province && overview.province}
              </p>
            </div>
          )}

          {overview &&
            (overview.mobile ||
              overview.display_email ||
              overview.linkedin) && (
              <div className={styles.section}>
                <h2>Contact</h2>
                <div className={styles.list}>
                  {overview.mobile && (
                    <div>
                      <p>Mobile:</p>
                      <a href={`tel:${overview.mobile}`}>{overview.mobile}</a>
                    </div>
                  )}
                  {overview.display_email && (
                    <div>
                      <p>Email:</p>
                      <a href={`mailto:${overview.display_email}`}>
                        {overview.display_email}
                      </a>
                    </div>
                  )}
                  {overview.linkedin && (
                    <div>
                      <p>LinkedIn:</p>
                      <a
                        href={overview.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

          {overview?.about && (
            <div className={styles.section}>
              <h2>About</h2>
              <p>{overview.about}</p>
            </div>
          )}

          {skills?.skills?.length > 0 && (
            <div className={styles.section}>
              <h2>Skills</h2>
              <div className={`${styles.list} ${styles.shortList}`}>
                {skills.skills.map((skill, index) => (
                  <p className={styles.text} key={index}>
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          )}

          {skills?.languages?.length > 0 && (
            <div className={styles.section}>
              <h2>Languages</h2>
              <div className={`${styles.list} ${styles.shortList}`}>
                {skills.languages.map((language, index) => (
                  <p className={styles.text} key={index}>
                    language
                  </p>
                ))}
              </div>
            </div>
          )}

          {(overview?.github || overview?.social_link) && (
            <div className={styles.section}>
              <h2>Social Media</h2>
              <div className={styles.list}>
                {overview.github && (
                  <div>
                    <p>GitHub:</p>
                    <a
                      href={overview.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </div>
                )}
                {overview.social_link && (
                  <div>
                    <p>Other:</p>
                    <a
                      href={overview.social_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('Link')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.sidebar_right}>
        {/* <Flex vertical gap={24} className={styles.sidebar_content}>
          {work_experience?.length > 0 && (
            <Flex vertical gap={10} className={styles.section}>
              <h2 style={{ color: selectedTheme.primary }}>
                {t('Experience')}
              </h2>
              {work_experience.map((exp, index) => (
                <Flex
                  vertical
                  gap={6}
                  key={exp._id || index}
                  className={styles.list}
                >
                  <Flex vertical gap={4}>
                    <h3 className={styles.text}>{exp.job_title}</h3>
                    <p>
                      {exp.start && formatDate(exp.start)}
                      {exp.end && !exp.currently_working
                        ? ` - ${formatDate(exp.end)}`
                        : exp.currently_working
                          ? ` - ${t('Present')}`
                          : ''}
                      {exp.company_name && (
                        <span className={styles.text}>
                          {' | '}
                          {exp.company_link ? (
                            <a
                              href={exp.company_link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {exp.company_name}
                            </a>
                          ) : (
                            exp.company_name
                          )}
                        </span>
                      )}
                    </p>
                  </Flex>
                  {exp.description && (
                    <p className={styles.list}>{exp.description}</p>
                  )}
                </Flex>
              ))}
            </Flex>
          )}

          {projects?.length > 0 && (
            <Flex vertical gap={10} className={styles.section}>
              <h2 style={{ color: selectedTheme.primary }}>{t('Projects')}</h2>
              {projects.map((project, index) => (
                <Flex
                  vertical
                  gap={6}
                  key={project._id || index}
                  className={styles.list}
                >
                  <Flex vertical gap={4}>
                    <h3 className={styles.text}>{project.title}</h3>
                    <p className={styles.text}>
                      {project.skills?.length > 0 &&
                        `${project.skills.join(', ')}`}
                      {project.link && (
                        <>
                          {project.skills?.length > 0 ? ' | ' : ''}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t('Link')}
                          </a>
                        </>
                      )}
                    </p>
                  </Flex>
                  {project.description && (
                    <p className={styles.list}>{project.description}</p>
                  )}
                </Flex>
              ))}
            </Flex>
          )}

          {educations?.length > 0 && (
            <Flex vertical gap={10} className={styles.section}>
              <h2 style={{ color: selectedTheme.primary }}>{t('Education')}</h2>
              {educations
                .slice()
                .sort((a, b) => {
                  const orderA = educationLevelOrder[a.degree] || 999
                  const orderB = educationLevelOrder[b.degree] || 999
                  return orderA - orderB
                })
                .map((edu, index) => (
                  <div key={edu._id || index}>
                    <Flex vertical gap={4}>
                      <h3 className={styles.text}>
                        {translateDegree(edu.degree)} - {edu.study_field}
                      </h3>
                      <p>
                        {edu.start && formatDate(edu.start)}
                        {edu.end && !edu.currently_studying
                          ? ` - ${formatDate(edu.end)}`
                          : edu.currently_studying
                            ? ` - ${t('Present')}`
                            : ''}{' '}
                        | <span className={styles.text}>{edu.university}</span>
                      </p>
                    </Flex>
                  </div>
                ))}
            </Flex>
          )}

          {course_experience?.length > 0 && (
            <Flex vertical gap={10} className={styles.section}>
              <h2 style={{ color: selectedTheme.primary }}>
                {t('Certification & Courses')}
              </h2>
              {course_experience.map((course, index) => (
                <Flex key={course._id || index} vertical gap={4}>
                  <h3 className={styles.text}>{course.course_name}</h3>
                  <p>
                    {formatDate(course?.date)} -{' '}
                    {translateCourseDuration(course.course_duration, language)}{' '}
                    | <span className={styles.text}>{course.institute}</span>
                    {course.link && (
                      <>
                        {' | '}
                        <a
                          className={styles.text}
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t('Link')}
                        </a>
                      </>
                    )}
                  </p>
                </Flex>
              ))}
            </Flex>
          )}

          {activities?.length > 0 && (
            <Flex vertical gap={10} className={styles.section}>
              <h2 style={{ color: selectedTheme.primary }}>
                {t('Extra-Curricular Activities')}
              </h2>
              {activities.map((activity, index) => (
                <Flex
                  vertical
                  gap={6}
                  key={activity._id || index}
                  className={styles.list}
                >
                  {activity.role && (
                    <h3 className={styles.text}>{activity.role}</h3>
                  )}
                  <Flex gap={4}>
                    {activity.start && <p>{formatDate(activity.start)}</p>}
                    {activity.end && !activity.currently_working
                      ? ` - ${formatDate(activity.end)}`
                      : activity.currently_working
                        ? ` - ${t('Present')}`
                        : ''}
                    {activity.company_link && activity.company ? (
                      <>
                        <span className={styles.line}>|</span>
                        <a
                          className={styles.text}
                          href={activity.company_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {activity.company}
                        </a>
                      </>
                    ) : (
                      activity.company && (
                        <p className={styles.text}>| {activity.company}</p>
                      )
                    )}
                  </Flex>
                  {activity.description && <p>{activity.description}</p>}
                </Flex>
              ))}
            </Flex>
          )}
        </Flex> */}
      </div>
    </div>
  )
}

export default TemplateTwo

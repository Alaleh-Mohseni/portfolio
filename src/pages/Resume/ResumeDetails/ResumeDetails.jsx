import { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext'

function ResumeDetails({ title, link, name, time, des, details, tec }) {
  const { language } = useContext(LanguageContext)

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <h3 className="capitalize">{title}</h3>
          {tec?.length > 0 && (
            <>
              |<p className="capitalize text-sm">{tec.join(', ')}</p>
            </>
          )}

          {link && !name && (
            <>
              |
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:opacity-70 transition-opacity"
              >
                {language === 'en' ? 'Link' : 'لینک'}
              </a>
            </>
          )}

          {name && (
            <>
              |{' '}
              {link ? (
                <a
                  className="text-blue-500 hover:opacity-70 transition-opacity capitalize"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              ) : (
                <span className="capitalize">{name}</span>
              )}
            </>
          )}
        </div>
        {time && <p className="text-sm">{time}</p>}
      </div>
      <p className="py-0.5">{des}</p>
      {details && (
        <ul
          className={`list-disc ${language === 'en' ? 'pl-5' : 'ps-5'} space-y-1`}
        >
          {details.map((item) => (
            <li className="text-sm font-light list-disc py-1">{item}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ResumeDetails

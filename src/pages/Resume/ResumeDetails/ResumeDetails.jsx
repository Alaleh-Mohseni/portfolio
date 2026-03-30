function ResumeDetails({ title, link, name, time, des, details, tec }) {
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
                Link
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
      <p>{des}</p>
      {details && (
        <ul>
          {details.map((item) => (
            <li className="text-sm font-light list-disc">{item}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ResumeDetails

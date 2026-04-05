import { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext'
import { BsDownload } from 'react-icons/bs'

function DownloadResumeButton() {
  const { language } = useContext(LanguageContext)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div
      className={`absolute top-1 ${language === 'en' ? 'right-5' : 'left-5'}`}
    >
      <button
        onClick={handlePrint}
        className="gap-2 px-6 py-4 rounded-2xl cv-button flex items-center"
      >
        <BsDownload className="text-lg" />
        {language === 'en' ? 'Download CV' : 'دانلود رزومه'}
      </button>
    </div>
  )
}

export default DownloadResumeButton

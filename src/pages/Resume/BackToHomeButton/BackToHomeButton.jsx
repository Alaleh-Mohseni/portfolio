import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

function BackToHomeButton() {
  const navigate = useNavigate()
  const { language } = useContext(LanguageContext)

  return (
    <div
      className={`absolute top-1 ${language === 'en' ? 'left-5' : 'right-5'} back-button`}
    >
      <button
        className="flex items-center gap-2 justify-center"
        onClick={() => navigate('/')}
      >
        {language === 'en' ? <BsArrowLeft /> : <BsArrowRight />}
        {language === 'en' ? 'Back' : 'بازگشت'}
      </button>
    </div>
  )
}

export default BackToHomeButton

import { useContext } from 'react'
import { LanguageContext } from '../../../contexts/LanguageContext'
import portfolioData from '../../../constants/portfolio-data'
import SocialLinks from '../../../components/SocialLinks/SocialLinks'

function Footer() {
  const { language } = useContext(LanguageContext)
  const t = portfolioData[language].hero

  return (
    <footer className="footer flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 p-6 md:p-8">
      <p className="text-[var(--muted-foreground)]">
        Copyright ©2026 Alaleh Mohseni
      </p>

      <SocialLinks socialLinks={t.socialLinks} size="small" />
    </footer>
  )
}

export default Footer

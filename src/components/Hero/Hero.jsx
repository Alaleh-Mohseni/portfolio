import { useContext } from 'react'
import { BsDownload } from 'react-icons/bs'
import { LanguageContext } from '../../contexts/LanguageContext'
import portfolioData from '../../data/portfolio-data'
import Flower from '../../assets/decorate.png'
import SocialLinks from '../SocialLinks/SocialLinks'
import Link from '../Link/Link'
import './Hero.css'

function Hero() {
  const { language } = useContext(LanguageContext)
  const t = portfolioData[language].hero

  return (
    <section
      id="hero"
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-[120px] md:px-[60px] gap-8 lg:gap-12 relative"
    >
      <div className="hero-dark"></div>
      {/* Left Part: Content */}
      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <h4>{t.greeting}</h4>
          <h1>{t.title}</h1>
          <p className="max-w-[600px] leading-relaxed">{t.description}</p>
        </div>

        {/* CV Button */}
        <div className="flex flex-wrap items-center gap-6">
          <a href={t.cvLink} className="gap-2 px-6 py-4 rounded-2xl cv-button">
            <BsDownload className="text-lg" />
            {t.cvButton}
          </a>
        </div>

        {/* Currently At */}
        <div className="flex items-center gap-2">
          <img
            src={t.currentWork.companyLogo}
            alt="Company Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-base font-medium text-[var(--foreground)] opacity-80">
            {t.currentWork.label}
          </span>
          <Link href={t.currentWork.companyLink} variant="underline">
            {t.currentWork.company}
          </Link>
        </div>

        {/* Social Links */}
        <SocialLinks socialLinks={t.socialLinks} size="medium" />
      </div>

      {/* Right Part: Image */}
      <div className="flex items-center justify-center w-full px-0 lg:w-1/2 md:px-[56px] relative">
        {/* purple flower */}
        <div
          className={`absolute md:-bottom-12 w-[199px] h-[190px] md:w-[439px] md:h-[418px] z-0 ${language === 'fa' ? 'right-0' : 'left-0'}`}
        >
          <img
            src={Flower}
            alt="Decoration"
            className="w-full h-full object-contain animate-flower"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-1 bg-[var(--accent)] opacity-10 blur-3xl rounded-full"></div>
          <img
            src={t.photo}
            alt="Alaleh Mohseni"
            className="w-[180px] h-[180px] bg-[#1f1f24] md:w-[320px] md:h-[320px] object-cover rounded-full border-4 border-[var(--accent)] shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

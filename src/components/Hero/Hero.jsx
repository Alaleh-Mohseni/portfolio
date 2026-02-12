import { BsGithub, BsTelegram, BsEnvelope, BsDownload } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import Flower from '../../assets/decorate.png'
import ProfilePhoto from '../../assets/profile-photo.png'

import './Hero.css'

const iconMap = {
  github: <BsGithub />,
  linkedin: <FaLinkedinIn />,
  telegram: <BsTelegram />,
  gmail: <BsEnvelope />,
}

function Hero({ lang, portfolioData }) {
  const t = portfolioData[lang].hero

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 py-[120px] md:px-[60px] gap-8 md:gap-0 relative">
      <div className="hero-dark"></div>
      {/* Left Part: Content */}
      <div className="flex flex-col gap-8 w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <h4>{t.greeting}</h4>
          <h1>{t.title}</h1>
          <p className="max-w-[600px] leading-relaxed">{t.description}</p>
        </div>

        {/* CV Button */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={t.cvLink}
            download
            className="gap-2 px-6 py-4 rounded-2xl cv-button"
          >
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
          <a
            href={t.currentWork.companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-[var(--accent)] hover:underline transition-all"
          >
            {t.currentWork.company}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {t.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[28px] text-[#8F8F92] hover:text-[var(--accent)] transition-colors"
              aria-label={link.name}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>

      {/* Right Part: Image */}
      <div className="flex items-center justify-center w-full px-0 md:w-1/2 md:px-[56px] relative">
        {/* purple flower */}
        <div
          className={`absolute md:-bottom-12 w-[199px] h-[190px] md:w-[439px] md:h-[418px] z-0 ${lang === 'fa' ? 'right-0' : 'left-0'}`}
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
            src={ProfilePhoto}
            alt="Alaleh Mohseni"
            className="w-[180px] h-[180px] md:w-[320px] md:h-[320px] object-cover rounded-full border-4 border-[var(--accent)] shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

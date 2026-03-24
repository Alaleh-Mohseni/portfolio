import { BsGithub, BsTelegram, BsEnvelope } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from '../Link/Link'
import './SocialLinks.css'

const iconMap = {
  github: <BsGithub />,
  linkedin: <FaLinkedinIn />,
  telegram: <BsTelegram />,
  gmail: <BsEnvelope />,
}

function SocialLinks({ socialLinks, size = 'medium' }) {
  const sizeClasses = {
    small: 'w-10 h-10 text-lg',
    medium: 'w-12 h-12 text-xl',
    large: 'w-14 h-14 text-2xl',
  }

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          variant="none"
          className={`social-link-item group relative ${sizeClasses[size]} flex items-center justify-center rounded-2xl bg-[var(--surface)] border-2 border-transparent hover:border-[var(--accent)] hover:scale-110 overflow-hidden`}
          aria-label={link.name}
        >
          {/* Background Gradient on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6e4ef2]/0 to-[#8c71ff]/0 group-hover:from-[#6e4ef2]/10 group-hover:to-[#8c71ff]/10 transition-all duration-300"></div>

          <span className="text-[#8F8F92] group-hover:text-[var(--accent)] transition-colors duration-300 relative z-10">
            {iconMap[link.icon]}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default SocialLinks

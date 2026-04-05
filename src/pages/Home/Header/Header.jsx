import { useState, useEffect, useContext } from 'react'
import { BsGlobe, BsSun, BsMoon } from 'react-icons/bs'
import useThrottle from '../../../hooks/useThrottle'
import { ThemeContext } from '../../../contexts/ThemeContext'
import { LanguageContext } from '../../../contexts/LanguageContext'
import './Header.css'

const navLinks = [
  { id: 'hero', en: 'About me', fa: 'درباره من' },
  { id: 'skills', en: 'Skills', fa: 'مهارت‌ها' },
  { id: 'experience', en: 'Experience', fa: 'تجربیات' },
  { id: 'projects', en: 'Projects', fa: 'پروژه‌ها' },
]

function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext)
  const { theme, setTheme } = useContext(ThemeContext)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleScroll = useThrottle(() => {
    const currentScrollY = window.scrollY

    setIsScrolled(currentScrollY > 20)

    // Show/hide controls on mobile based on scroll direction
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsHeaderVisible(true)
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsHeaderVisible(false)
    }

    setLastScrollY(currentScrollY)

    // Active section detection
    const sections = navLinks.map((link) => document.getElementById(link.id))
    const scrollPosition = currentScrollY + 150

    sections.forEach((section) => {
      if (!section) return
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id)
      }
    })
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <header
      className={`header flex flex-col md:flex-row items-center justify-between px-6 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-lg header--scrolled' : 'py-5'
      } ${!isHeaderVisible ? 'header--hidden' : ''}`}
    >
      <nav className="w-full md:w-auto">
        <ul className="flex items-center gap-6 md:gap-8 list-none m-0 p-0 justify-between md:justify-start">
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer text-sm md:text-base transition-all duration-300 relative ${
                activeSection === item.id
                  ? 'active opacity-100'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              {language === 'en' ? item.en : item.fa}
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__controls flex justify-center gap-2">
        <button
          onClick={toggleLanguage}
          className="header-button flex justify-center gap-2"
          aria-label="Toggle language"
        >
          <BsGlobe className="text-xl" />
          <span className="text-base font-medium uppercase language">
            {language}
          </span>
        </button>

        <button
          onClick={toggleTheme}
          className="header-button flex items-center gap-2"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <BsSun className="text-xl" />
          ) : (
            <BsMoon className="text-xl" />
          )}
        </button>
      </div>
    </header>
  )
}

export default Header

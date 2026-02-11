import { useState } from 'react'
import { BsGlobe, BsSun, BsMoon } from 'react-icons/bs'
import './Header.css'

const translations = {
  en: {
    navItems: ['About me', 'Skills', 'Experience', 'Projects'],
  },
  fa: {
    navItems: ['درباره من', 'مهارت‌ها', 'تجربیات', 'پروژه‌ها'],
  },
}

function Header() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState('en')

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fa' : 'en'
    setLanguage(newLang)

    // Toggle RTL/LTR
    if (newLang === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'fa')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }

  const currentTranslations = translations[language]

  return (
    <header className="header flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 p-4 md:p-6">
      {/* Navigation Menu */}
      <nav className="w-full md:w-auto">
        <ul className="flex items-center gap-8 list-none m-0 p-0 max-md:w-full max-md:gap-0 max-md:justify-between">
          {currentTranslations.navItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer transition-opacity hover:opacity-100 text-base md:text-lg ${
                index === 0 ? 'active' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4 max-md:w-full max-md:justify-center">
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="header-button flex items-center gap-2"
        >
          <BsGlobe className="text-xl" />
          <span className="text-base font-medium">
            {language === 'en' ? 'En' : 'فا'}
          </span>
        </button>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="header-button">
          {isDark ? (
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

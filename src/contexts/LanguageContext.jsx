import { createContext, useState, useEffect } from 'react'
import storage from '../services/localStorageService'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return storage.get('language', 'en')
  })

  useEffect(() => {
    document.documentElement.setAttribute(
      'dir',
      language === 'fa' ? 'rtl' : 'ltr'
    )

    document.documentElement.setAttribute('lang', language)

    document.title =
      language === 'fa'
        ? 'آلاله محسنی - توسعه‌دهنده فرانت‌اند'
        : 'Alaleh Mohseni - Frontend Developer'

    storage.set('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fa' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero lang={language} />
        <Skills lang={language} />
      </main>
    </>
  )
}

export default App

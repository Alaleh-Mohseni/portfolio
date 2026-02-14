import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import portfolioData from './portfolio-data'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero lang={language} portfolioData={portfolioData} />
        <Skills lang={language} portfolioData={portfolioData} />
        <Experience lang={language} portfolioData={portfolioData} />
        <Projects lang={language} portfolioData={portfolioData} />
      </main>
    </>
  )
}

export default App

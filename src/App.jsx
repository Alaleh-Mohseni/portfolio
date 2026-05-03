import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import portfolioData from './portfolio-data'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen shadow-2xl">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero lang={language} portfolioData={portfolioData} />
        <Skills lang={language} portfolioData={portfolioData} />
        <Experience lang={language} portfolioData={portfolioData} />
        <Projects lang={language} portfolioData={portfolioData} />
      </main>
      <Footer lang={language} portfolioData={portfolioData} />
    </div>
  )
}

export default App

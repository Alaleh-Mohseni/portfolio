import { useState } from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'
import portfolioData from '../../constants/portfolio-data'

function Home() {
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

export default Home

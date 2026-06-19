import { Analytics } from '@vercel/analytics/react'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen shadow-2xl">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App

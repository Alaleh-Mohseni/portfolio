import Header from './Header/Header'
import Hero from './Hero/Hero'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'

function Home() {
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
    </div>
  )
}

export default Home

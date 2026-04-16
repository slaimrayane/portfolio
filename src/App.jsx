import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { CertificationsSection, EducationSection, ExperienceSection } from './components/TimelineSection'
import { portfolioData, techFilters } from './data/portfolioData'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-[#f6f1ea] text-slate-900 transition-colors dark:bg-ink-950 dark:text-slate-100">
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(208,135,87,0.28),_transparent_58%)] dark:bg-[radial-gradient(circle_at_top,_rgba(159,90,52,0.30),_transparent_58%)]"
          aria-hidden="true"
        />
        <div className="border-b border-brand-300/40 bg-brand-100/90 px-4 py-2 text-center text-sm font-semibold text-brand-400 dark:bg-brand-400/20 dark:text-brand-100">
          {portfolioData.personalInfo.objective}
        </div>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero personalInfo={portfolioData.personalInfo} socialLinks={portfolioData.socialLinks} />
          <About bio={portfolioData.personalInfo.bio} location={portfolioData.personalInfo.location} />
          <Skills skills={portfolioData.skills} />
          <Projects projects={portfolioData.projects} filters={techFilters} />
          <ExperienceSection experience={portfolioData.experience} />
          <EducationSection education={portfolioData.education} />
          <CertificationsSection certifications={portfolioData.certifications} />
          <Contact email={portfolioData.personalInfo.email} objective={portfolioData.personalInfo.objective} />
        </main>
        <footer className="border-t border-amber-200/80 px-6 py-6 text-center text-sm text-slate-500 dark:border-slate-700/60 dark:text-slate-400">
          © {new Date().getFullYear()} Slaim Rayane. Portfolio développé avec React et Tailwind CSS.
        </footer>
      </div>
    </div>
  )
}

export default App

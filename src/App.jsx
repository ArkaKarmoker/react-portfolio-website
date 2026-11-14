import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'certifications',
  'contact',
]

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme ? savedTheme === 'dark' : true
    } catch {
      return true
    }
  })

  const [activeSection, setActiveSection] = useState('home')

  // Sync dark mode class on <html> and persist preference
  useEffect(() => {
    const rootEl = document.documentElement
    if (darkMode) {
      rootEl.classList.add('dark')
    } else {
      rootEl.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [darkMode])

  // Dynamic Navbar active section detection while scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScrollSpy, { passive: true })
    handleScrollSpy()
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300">
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App

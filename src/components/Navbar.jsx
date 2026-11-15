import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Sun,
  Moon,
  Terminal,
  ExternalLink,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const PdfIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4" />
    <path d="M5 18h1.5a1.5 1.5 0 0 0 0-3H5v6" />
    <path d="M17 18h2" />
    <path d="M20 15h-3v6" />
    <path d="M11 15v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
  </svg>
)

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const Navbar = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg shadow-slate-900/5 dark:shadow-black/30 border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white/75 dark:bg-slate-950/75 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4"
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <a
          href="/"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group focus:outline-none shrink-0"
        >
          <span className="w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="text-base font-bold tracking-tight whitespace-nowrap text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative inline-flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-emerald-500 rounded-full" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right Controls: Theme Toggle, Resume CTA, Mobile Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <a
            href={personalInfo.resumeLocalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
          >
            <PdfIcon className="w-4 h-4" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:text-emerald-500 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Collapsible Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-5 shadow-xl">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <a
              href={personalInfo.resumeLocalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              <PdfIcon className="w-[18px] h-[18px]" />
              View Resume
            </a>
            <a
              href={personalInfo.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200"
            >
              <span>Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="h-0.5 w-full bg-transparent overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  )
}

export default Navbar

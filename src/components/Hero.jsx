import React from 'react'
import {
  Download,
  ArrowRight,
  MapPin,
  Code2,
  GraduationCap,
  Mail,
  CheckCircle2,
} from 'lucide-react'
import { personalInfo, heroStats, allTechnicalBadges } from '../data/portfolioData'

const coreStackPills = [
  'Python',
  'Django',
  'Django REST Framework',
  'React & Next.js',
  'PostgreSQL & Redis',
  'RAG & LLM Pipelines',
  'Docker',
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/15 dark:bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content & CTA Buttons */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25">
                <span className="pulsing-dot" />
                <span>Available for work</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Greeting & Name */}
            <p className="text-sm sm:text-base font-mono font-medium text-emerald-600 dark:text-emerald-400 mb-2">
              Hi there, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              {personalInfo.name}{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>

            {/* Professional Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent mb-5">
              {personalInfo.title}
            </h2>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
              {personalInfo.tagline}
            </p>

            {/* Core Stack Highlights Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {coreStackPills.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {tech}
                </span>
              ))}

              <a
                href="#skills-arsenal"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 shadow-sm transition-all hover:scale-105 group"
                title="Explore all 40+ skills in technical arsenal"
              >
                <span>+{allTechnicalBadges.length - coreStackPills.length} more</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Required Primary Buttons: Download CV & View Projects */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href={personalInfo.resumeLocalUrl}
                download="Arka_Karmoker_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/35 transition-all hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Social Connect Row */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-0.5"
              >
                <img
                  src="/images/socials/github.svg"
                  alt="GitHub"
                  className="w-5 h-5 dark:invert"
                />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-0.5"
              >
                <img
                  src="/images/socials/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 text-slate-700 dark:text-slate-300 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 text-emerald-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture with Modern Developer Frame */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Decorative Gradient Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 opacity-30 dark:opacity-40 blur-xl group-hover:opacity-60 transition duration-500" />

              {/* Main Profile Card Frame */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-3 border-2 border-emerald-500/40 dark:border-emerald-500/50 shadow-2xl">
                {/* Browser / Terminal Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 mb-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span>arka@portfolio:~</span>
                  <Code2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>

                {/* Profile Image Container */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/4.3] bg-slate-200 dark:bg-slate-800">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - Profile Picture`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Bottom Badge inside Card */}
                <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                      B.Sc. in CSE @ North South University
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    2021–2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {heroStats.map((stat) => (
            <div
              key={stat.id}
              className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 border-2 border-emerald-500/60 dark:border-emerald-500/60 shadow-md shadow-emerald-500/10 hover:border-emerald-400 dark:hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {stat.label}
              </div>
              {stat.detail && (
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {stat.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

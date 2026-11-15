import React from 'react'
import { Terminal, Mail, MapPin } from 'lucide-react'
import { personalInfo, socialProfiles } from '../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-200/80 dark:border-slate-800/80">
          {/* Brand & Bio Column */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 group mb-4"
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-sm">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
            </a>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm mb-4">
              {personalInfo.shortIntro}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-900 dark:text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Certifications', href: '#certifications' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-900 dark:text-white mb-4">
              Social Media &amp; Profiles
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                >
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className={`w-4 h-4 shrink-0 ${
                      profile.invertInDark ? 'dark:invert' : ''
                    }`}
                  />
                  <span>{profile.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {currentYear} <strong>{personalInfo.name}</strong>. All rights
            reserved.
          </p>
          <p>
            Developed by{' '}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              {personalInfo.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

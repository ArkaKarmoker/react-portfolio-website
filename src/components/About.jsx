import React from 'react'
import {
  User,
  GraduationCap,
  Target,
  MapPin,
  Mail,
  Phone,
  Globe,
  Calendar,
  Briefcase,
  CheckCircle,
} from 'lucide-react'
import { personalInfo, educationData } from '../data/portfolioData'

const About = () => {
  const profileDetails = [
    { label: 'Full Name', value: personalInfo.name, icon: User },
    { label: 'Role', value: personalInfo.title, icon: Briefcase },
    { label: 'Location', value: personalInfo.location, icon: MapPin },
    { label: 'Email', value: personalInfo.email, icon: Mail, href: `mailto:${personalInfo.email}` },
    { label: 'Phone / WhatsApp', value: personalInfo.phone, icon: Phone, href: personalInfo.whatsappUrl },
    {
      label: 'Languages',
      value: personalInfo.verbalLanguages.join(', '),
      icon: Globe,
    },
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-24 bg-slate-50/80 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Engineering Scalable Web &amp; AI Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Get to know my background, academic journey in Computer Science &amp;
            Engineering, career goals, and personal profile information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Bio Description and Profile Information */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </span>
                Who I Am
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalInfo.aboutDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Profile Information Grid */}
            <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
                Profile Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profileDetails.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 break-all transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold text-slate-900 dark:text-white break-words">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Educational Background Timeline and Career Goals */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Educational Background Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </span>
                Educational Background
              </h3>

              <div className="relative pl-6 border-l-2 border-emerald-500/30 dark:border-emerald-500/40 space-y-8">
                {educationData.map((edu) => (
                  <div key={edu.id} className="relative group">
                    {/* Timeline Node Dot */}
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-900" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {edu.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>

                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-rose-500" />
                      {edu.location}
                    </p>

                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="space-y-2 mt-2">
                        {edu.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Goals Card */}
            <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 dark:from-emerald-500/10 dark:via-slate-900 dark:to-cyan-500/10 border border-emerald-500/25 dark:border-emerald-500/30 shadow-sm flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                  <Target className="w-4 h-4" />
                </span>
                Career Goals
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {personalInfo.careerGoals}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import {
  Cpu,
  Code2,
  Database,
  BrainCircuit,
  Wrench,
  Trophy,
  ExternalLink,
  Layers,
  GitBranch,
  FolderGit2,
} from 'lucide-react'
import { techIconMap } from '../data/techIcons'
import {
  skillCategories,
  allTechnicalBadges,
  softSkills,
  leetcodeStats,
} from '../data/portfolioData'

const categoryThemeMap = {
  backend: {
    icon: Code2,
    cardBorder: 'border-emerald-500/25 hover:border-emerald-500/60',
    iconBadge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    percentText: 'text-emerald-600 dark:text-emerald-400',
    barGradient: 'from-emerald-500 to-teal-400',
  },
  frontend: {
    icon: Layers,
    cardBorder: 'border-cyan-500/25 hover:border-cyan-500/60',
    iconBadge: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
    percentText: 'text-cyan-700 dark:text-cyan-400',
    barGradient: 'from-cyan-500 to-blue-500',
  },
  database: {
    icon: Database,
    cardBorder: 'border-amber-500/25 hover:border-amber-500/60',
    iconBadge: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    percentText: 'text-amber-700 dark:text-amber-400',
    barGradient: 'from-amber-500 to-orange-400',
  },
  ai: {
    icon: BrainCircuit,
    cardBorder: 'border-violet-500/25 hover:border-violet-500/60',
    iconBadge: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
    percentText: 'text-violet-600 dark:text-violet-400',
    barGradient: 'from-violet-500 to-purple-400',
  },
}

const badgeCategories = [
  'All',
  'Languages & Backend',
  'Frontend',
  'Database',
  'AI & ML',
  'Tools',
]

const Skills = () => {
  const [selectedBadgeCategory, setSelectedBadgeCategory] = useState('All')

  const visibleBadges =
    selectedBadgeCategory === 'All'
      ? allTechnicalBadges
      : allTechnicalBadges.filter(
          (badge) => badge.category === selectedBadgeCategory
        )

  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Tech Stack &amp; Engineering Proficiency
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my programming languages, frameworks,
            databases, AI/RAG pipelines, and problem-solving track record.
          </p>
        </div>

        {/* 1. Skill Cards with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category) => {
            const theme = categoryThemeMap[category.id] || categoryThemeMap.backend
            const IconComponent = theme.icon || Wrench
            return (
              <div
                key={category.id}
                className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border ${theme.cardBorder} shadow-sm transition-all`}
              >
                <div className="flex items-start gap-3.5 mb-6">
                  <div className={`p-3 rounded-xl border ${theme.iconBadge} shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm font-medium mb-1.5">
                        <span className="text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className={`font-mono text-xs font-semibold ${theme.percentText}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${theme.barGradient} transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* 2. Interactive Technology Badges Showcase */}
        <div
          id="skills-arsenal"
          className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-emerald-500" />
                Complete Technology &amp; Tooling Arsenal
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Filter badges by domain to explore all languages, frameworks,
                and developer tools.
              </p>
            </div>

            {/* Domain Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {badgeCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedBadgeCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedBadgeCategory === cat
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {visibleBadges.map((badge) => (
              <span
                key={badge.name}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
              >
                <Icon
                  icon={techIconMap[badge.icon] || badge.icon}
                  aria-label={badge.name}
                  className={`${
                    badge.icon === 'tech:drf' ? 'w-6 h-4' : 'w-4 h-4'
                  } shrink-0`}
                />
                <span>{badge.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3. Problem Solving (LeetCode) & Soft Skills Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* LeetCode & Competitive Problem Solving Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Algorithmic Problem Solving (LeetCode)
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Solved {leetcodeStats.displayTotal} challenges focusing on
                    Data Structures &amp; Algorithms
                  </p>
                </div>
              </div>

              <a
                href={leetcodeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
              >
                <span>LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {leetcodeStats.breakdown.map((item) => (
                <div
                  key={item.difficulty}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: item.color }}
                    >
                      {item.difficulty}
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-900 dark:text-white">
                      {item.solved} Solved
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-start">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Professional &amp; Soft Skills
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
              Core interpersonal strengths that complement my engineering
              delivery:
            </p>

            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Open Source & Data Science Card */}
        <div className="mt-6 lg:mt-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                <GitBranch className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Open Source &amp; Data Science
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Continuous technical learning, public codebases, and machine learning research
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={leetcodeStats.githubReposUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
              >
                <span>GitHub Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={leetcodeStats.kaggleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 hover:bg-sky-500/20 transition-all"
              >
                <span>Kaggle Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  45+ Public Repositories
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Maintained{' '}
                  <a
                    href={leetcodeStats.githubReposUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 font-semibold underline hover:text-emerald-500"
                  >
                    45+ GitHub repositories
                  </a>{' '}
                  demonstrating continuous learning and project development across web engineering and AI.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  Kaggle Dataset &amp; Notebooks
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Published 1 dataset and 3 notebooks on{' '}
                  <a
                    href={leetcodeStats.kaggleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 font-semibold underline hover:text-sky-500"
                  >
                    Kaggle
                  </a>{' '}
                  covering exploratory data analysis, feature engineering, and model evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

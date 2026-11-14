import React, { useState } from 'react'
import { FolderGit2, Filter, ExternalLink, RotateCcw } from 'lucide-react'
import {
  projectsData,
  projectFilterCategories,
  personalInfo,
} from '../data/portfolioData'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState('All')

  // Filter projects array by selected technology
  const filteredProjects =
    selectedTech === 'All'
      ? projectsData
      : projectsData.filter((project) =>
          project.technologies.some(
            (tech) => tech.toLowerCase() === selectedTech.toLowerCase()
          )
        )

  return (
    <section
      id="projects"
      className="py-20 md:py-24 bg-slate-50/80 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Production Applications &amp; Systems
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Explore my full-stack web platforms, RAG-powered medical AI
            assistants, and high-concurrency REST APIs. Filter by technology
            below.
          </p>
        </div>

        {/* Technology Filter Bar */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          role="group"
          aria-label="Filter projects by technology"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-emerald-500" />
            Filter:
          </span>
          {projectFilterCategories.map((category) => {
            const isSelected = selectedTech === category
            const count =
              category === 'All'
                ? projectsData.length
                : projectsData.filter((p) =>
                    p.technologies.some(
                      (t) => t.toLowerCase() === category.toLowerCase()
                    )
                  ).length

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedTech(category)}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold ${
                    isSelected
                      ? 'bg-emerald-950/75 text-white ring-1 ring-white/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Projects Grid Rendered via .map() */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              No projects found matching <strong>{selectedTech}</strong>.
            </p>
            <button
              type="button"
              onClick={() => setSelectedTech('All')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Filter
            </button>
          </div>
        )}

        {/* More Repositories CTA */}
        <div className="mt-12 text-center">
          <a
            href={`${personalInfo.socials.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-2xs"
          >
            <span>Explore All 45+ Repositories on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

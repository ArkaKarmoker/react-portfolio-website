import React from 'react'
import { ExternalLink, Code2, CheckCircle2 } from 'lucide-react'

const ProjectCard = ({ project }) => {
  return (
    <article
      className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col overflow-hidden"
      data-testid="project-card"
    >
      {/* Project Screenshot / Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200/70 dark:border-slate-800">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Project Context Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900/85 text-emerald-400 backdrop-blur-md border border-emerald-500/30">
          {project.badge}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title & Subtitle */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Engineering Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {project.highlights.map((point, index) => (
              <li
                key={index}
                className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies Used */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons: Live Demo & GitHub */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white border border-slate-800 dark:border-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Code2 className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

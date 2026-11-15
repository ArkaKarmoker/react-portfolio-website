import React, { useState, useEffect } from 'react'
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { certificationsData } from '../data/portfolioData'

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const openLightbox = (index) => {
    setActiveIndex(index)
  }

  const closeLightbox = () => {
    setActiveIndex(null)
  }

  const showNext = (e) => {
    if (e) e.stopPropagation()
    setActiveIndex((prev) => (prev + 1) % certificationsData.length)
  }

  const showPrev = (e) => {
    if (e) e.stopPropagation()
    setActiveIndex(
      (prev) =>
        (prev - 1 + certificationsData.length) % certificationsData.length
    )
  }

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'ArrowLeft') showPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex])

  return (
    <section id="certifications" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>04 // CERTIFICATIONS &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Verified Professional Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Industry-recognized certifications in AI Engineering, Data
            Engineering, Machine Learning, Software Engineering, Python, and
            GitHub Foundations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificationsData.map((cert, index) => (
            <article
              key={cert.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Certificate Image Preview (Full Edge-to-Edge Uncropped Display) */}
              <div
                onClick={() => openLightbox(index)}
                className="relative w-full cursor-pointer overflow-hidden"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-auto block"
                />

                {/* Category Badge on Top-Right of Image */}
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900/85 text-emerald-400 backdrop-blur-md border border-emerald-500/30 z-10 pointer-events-none">
                  {cert.category}
                </span>

                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/35 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-medium shadow-lg">
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                    Preview Certificate
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                  {cert.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-5">
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-emerald-500" />
                    {cert.issuer}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    {cert.date}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    aria-label={`Zoom ${cert.title}`}
                    className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-500 transition-colors cursor-pointer"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Certificate Lightbox Modal */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview Modal"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close preview"
            className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-800/80 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous / Next Controls */}
          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous certificate"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next certificate"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Certificate Image & Caption */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={certificationsData[activeIndex].image}
              alt={certificationsData[activeIndex].title}
              className="max-h-[72vh] w-auto object-contain rounded-xl shadow-2xl border border-slate-700"
            />
            <div className="mt-4 text-center">
              <h4 className="text-lg font-bold text-white">
                {certificationsData[activeIndex].title}
              </h4>
              <p className="text-xs text-slate-300">
                {certificationsData[activeIndex].issuer} •{' '}
                {certificationsData[activeIndex].date}
              </p>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto max-w-full py-1">
              {certificationsData.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === activeIndex
                      ? 'border-emerald-500 scale-105 opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img
                    src={thumb.image}
                    alt={thumb.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certifications

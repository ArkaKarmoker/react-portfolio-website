import React, { useState, useEffect } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Briefcase,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const getDhakaTime = () => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dhaka',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(new Date())
  } catch {
    return ''
  }
}

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [submittedData, setSubmittedData] = useState(null)
  const [dhakaTime, setDhakaTime] = useState(getDhakaTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDhakaTime(getDhakaTime())
    }, 30000)
    return () => clearInterval(intervalId)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmittedData({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
      })
      setFormData(initialFormState)
      setErrors({})
    } else {
      setSubmittedData(null)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-24 bg-slate-50/80 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Let&apos;s Build Something Impactful Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            I am currently open to full-time Software Engineering roles and
            freelance web or AI development projects. Send me a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Contact Cards & Availability */}
          <div className="lg:col-span-5">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Reach out directly via email, phone, or WhatsApp for engineering
                opportunities and collaborations.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                      Email Address
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                      Phone &amp; WhatsApp
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalInfo.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                        Timezone
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {personalInfo.timezone}
                      </div>
                    </div>
                    {dhakaTime && (
                      <span
                        title="Current local time in Dhaka"
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                      >
                        {dhakaTime}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive React Contact Form */}
          <div className="lg:col-span-7">
            <div className="h-full p-6 sm:p-8 lg:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send Me a Message
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out all required fields below and I will get back to you as
                soon as possible.
              </p>

              {/* Success Message Alert */}
              {submittedData && (
                <div
                  role="alert"
                  data-testid="contact-success-message"
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold">
                      Thank you, {submittedData.name}! Your message has been
                      sent successfully.
                    </p>
                    <p className="text-xs mt-1 text-emerald-700 dark:text-emerald-300">
                      We received your inquiry regarding &ldquo;
                      {submittedData.subject}&rdquo; and will respond to{' '}
                      <span className="font-mono">{submittedData.email}</span>{' '}
                      shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      aria-invalid={Boolean(errors.name)}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border transition-colors focus:outline-none ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border transition-colors focus:outline-none ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineering Opportunity / Project Collaboration"
                    aria-invalid={Boolean(errors.subject)}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border transition-colors focus:outline-none ${
                      errors.subject
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or role requirements..."
                    aria-invalid={Boolean(errors.message)}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border transition-colors focus:outline-none resize-y ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-200 dark:border-slate-700 focus:border-emerald-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Full-Width Work Availability Card */}
        <div className="mt-8 lg:mt-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Work Availability
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="pulsing-dot" />
                    Available now
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {personalInfo.workPreference}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Flexible across timezones for full-time engineering teams,
                  full-stack product builds, and applied AI collaborations.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {personalInfo.workModes.map((mode) => (
                <div
                  key={mode}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70 text-sm font-semibold text-slate-800 dark:text-slate-100"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                  <span>{mode}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

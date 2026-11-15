import React from 'react'
import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import App from '../App'
import { projectsData, certificationsData } from '../data/portfolioData'

describe('Personal Portfolio Website - Requirements & Integration Suite', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('1. Navbar: renders brand name, required navigation links, and mobile menu toggle', async () => {
    const user = userEvent.setup()
    render(<App />)

    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(within(nav).getByText('Arka Karmoker')).toBeInTheDocument()

    // Check required links: Home, About, Skills, Projects, Contact
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '#home'
    )
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#about'
    )
    expect(within(nav).getByRole('link', { name: 'Skills' })).toHaveAttribute(
      'href',
      '#skills'
    )
    expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects'
    )
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact'
    )

    // Test mobile menu toggle
    const mobileToggleBtn = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    })
    expect(mobileToggleBtn).toHaveAttribute('aria-expanded', 'false')
    await user.click(mobileToggleBtn)
    expect(mobileToggleBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('2. Hero Section: displays name, title, intro, profile picture, Download CV and View Projects buttons', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /Arka Karmoker/i, level: 1 })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Software Engineer & Backend Developer/i,
        level: 2,
      })
    ).toBeInTheDocument()

    const profileImg = screen.getByAltText(/Arka Karmoker - Profile Picture/i)
    expect(profileImg).toBeInTheDocument()
    expect(profileImg).toHaveAttribute('src', '/images/profile_pic.jpg')

    const downloadCvBtn = screen.getByRole('link', { name: /Download CV/i })
    expect(downloadCvBtn).toBeInTheDocument()

    const viewProjectsBtn = screen.getByRole('link', { name: /View Projects/i })
    expect(viewProjectsBtn).toHaveAttribute('href', '#projects')
  })

  it('3. About Me Section: displays bio, North South University education, career goals, and profile info', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /Who I Am/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Career Goals/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Educational Background/i })
    ).toBeInTheDocument()
    expect(
      screen.getAllByText(/North South University/i).length
    ).toBeGreaterThan(0)
    expect(
      screen.getByText(/B\.Sc\. in Computer Science & Engineering \(CSE\)/i)
    ).toBeInTheDocument()
    expect(
      screen.getAllByText(/arkakarmoker1234@gmail\.com/i).length
    ).toBeGreaterThan(0)
  })

  it('4. Skills Section: displays progress bars, cards, and interactive skill badges', async () => {
    const user = userEvent.setup()
    render(<App />)

    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars.length).toBeGreaterThanOrEqual(15)

    // Verify required example skills and resume skills are present
    expect(screen.getAllByText('Python').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Django').length).toBeGreaterThan(0)
    expect(screen.getAllByText('React.js').length).toBeGreaterThan(0)
    expect(screen.getAllByText('JavaScript').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Tailwind CSS').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Git & GitHub').length).toBeGreaterThan(0)

    // Filter badges by Tools
    const toolsBtn = screen.getByRole('button', { name: 'Tools' })
    await user.click(toolsBtn)
    expect(screen.getByText('Postman')).toBeInTheDocument()
    expect(screen.getAllByText('Docker').length).toBeGreaterThan(0)
  })

  it('5. Projects Section: renders at least 4 projects via .map() and supports technology filtering', async () => {
    const user = userEvent.setup()
    render(<App />)

    const projectCards = screen.getAllByTestId('project-card')
    expect(projectCards.length).toBeGreaterThanOrEqual(4)
    expect(projectCards.length).toBe(projectsData.length)

    // Verify each card has image, title, Live Demo link, and GitHub link
    projectCards.forEach((card, idx) => {
      const expectedProject = projectsData[idx]
      expect(
        within(card).getByRole('heading', { name: expectedProject.title })
      ).toBeInTheDocument()
      expect(
        within(card).getByRole('link', { name: /Live Demo/i })
      ).toHaveAttribute('href', expectedProject.liveUrl)
      expect(
        within(card).getByRole('link', { name: /GitHub/i })
      ).toHaveAttribute('href', expectedProject.githubUrl)
    })

    // Filter projects by "React"
    const filterGroup = screen.getByRole('group', {
      name: /filter projects by technology/i,
    })
    const reactFilterBtn = within(filterGroup).getByRole('button', {
      name: /React/i,
    })
    await user.click(reactFilterBtn)

    const filteredCards = screen.getAllByTestId('project-card')
    expect(filteredCards.length).toBe(1)
    expect(
      within(filteredCards[0]).getByRole('heading', { name: 'MedRev' })
    ).toBeInTheDocument()

    // Filter projects by "Bootstrap"
    const bootstrapFilterBtn = within(filterGroup).getByRole('button', {
      name: /Bootstrap/i,
    })
    await user.click(bootstrapFilterBtn)
    expect(screen.getAllByTestId('project-card').length).toBe(2)

    // Reset filter back to "All"
    const allFilterBtn = within(filterGroup).getByRole('button', {
      name: /^All/i,
    })
    await user.click(allFilterBtn)
    expect(screen.getAllByTestId('project-card').length).toBe(
      projectsData.length
    )
  })

  it('6. Certifications Section: renders all 6 certifications and opens Lightbox preview', async () => {
    const user = userEvent.setup()
    render(<App />)

    certificationsData.forEach((cert) => {
      expect(
        screen.getByRole('heading', { name: cert.title })
      ).toBeInTheDocument()
    })

    const zoomBtn = screen.getByRole('button', {
      name: /Zoom AI Engineer for Developers Associate/i,
    })
    await user.click(zoomBtn)

    const dialog = screen.getByRole('dialog', {
      name: /Certificate Preview Modal/i,
    })
    expect(dialog).toBeInTheDocument()

    const closeBtn = within(dialog).getByRole('button', {
      name: /Close preview/i,
    })
    await user.click(closeBtn)
    expect(
      screen.queryByRole('dialog', { name: /Certificate Preview Modal/i })
    ).not.toBeInTheDocument()
  })

  it('7. Contact Section: validates required fields, shows errors, and displays success message on valid submission', async () => {
    const user = userEvent.setup()
    render(<App />)

    const submitBtn = screen.getByRole('button', { name: /Send Message/i })

    // 1. Submit empty form -> should show validation errors for all 4 fields
    await user.click(submitBtn)
    expect(screen.getByText('Name is required.')).toBeInTheDocument()
    expect(screen.getByText('Email is required.')).toBeInTheDocument()
    expect(screen.getByText('Subject is required.')).toBeInTheDocument()
    expect(screen.getByText('Message is required.')).toBeInTheDocument()

    // 2. Fill all fields with valid data and submit
    await user.type(screen.getByLabelText(/Your Name/i), 'Recruiter Jane')
    await user.type(
      screen.getByLabelText(/Email Address/i),
      'jane@techcorp.com'
    )
    await user.type(
      screen.getByLabelText(/Subject/i),
      'Backend Engineer Interview'
    )
    await user.type(
      screen.getByLabelText(/Message/i),
      'We would love to invite you for a Software Engineer interview.'
    )

    await user.click(submitBtn)

    const successAlert = screen.getByTestId('contact-success-message')
    expect(successAlert).toBeInTheDocument()
    expect(successAlert).toHaveTextContent(
      /Thank you, Recruiter Jane! Your message has been sent successfully\./i
    )

    // Inputs should be cleared after successful submission
    expect(screen.getByLabelText(/Your Name/i)).toHaveValue('')
    expect(screen.getByLabelText(/Email Address/i)).toHaveValue('')
    expect(screen.getByLabelText(/Subject/i)).toHaveValue('')
    expect(screen.getByLabelText(/Message/i)).toHaveValue('')
  })

  it('8. Additional Features & Footer: toggles Dark/Light mode, scrolls to top, and renders footer links', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Default is dark mode
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    const themeBtn = screen.getByRole('button', {
      name: /Switch to light mode/i,
    })
    await user.click(themeBtn)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')

    // Scroll to top button
    const scrollTopBtn = screen.getByRole('button', { name: /Scroll to top/i })
    fireEvent.click(scrollTopBtn)
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    })

    // Footer social links & copyright
    expect(screen.getByText(/All rights reserved\./i)).toBeInTheDocument()
  })
})

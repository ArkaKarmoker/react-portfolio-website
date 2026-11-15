# 🚀 Arka Karmoker — Software Engineer Portfolio

![React](https://img.shields.io/badge/React-v19-087EA4?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-v6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)  
![Vitest](https://img.shields.io/badge/Vitest-8_Passed-4BB543?style=for-the-badge&logo=vitest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-v16-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-Clean-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

A modern, responsive developer portfolio built with **React 19**, **Vite 6**, and **Tailwind CSS v4**—designed to showcase full-stack web applications, AI/RAG architectures, technical proficiencies, and verified engineering credentials.

---

## ✨ Features

- **Interactive Developer Hero**: Terminal-inspired profile showcase with live availability status, core tech stack highlights, instant resume download, and key engineering milestones.
- **About & Academic Timeline**: Comprehensive developer biography, structured profile overview, academic timeline, and long-term engineering career objectives.
- **Technical Skills & Tooling**: Domain-categorized proficiency meters, an interactive filterable catalog of 40+ developer tools, algorithmic problem-solving analytics (LeetCode), and open-source contributions.
- **Dynamic Project Showcase**: Filterable portfolio of full-stack, AI/RAG, and backend systems featuring multi-category technology tags, live deployment links, and source code repositories.
- **Certifications & Lightbox Viewer**: Verified industry credentials with interactive full-screen Lightbox inspection, zoom controls, keyboard navigation, and direct verification links.
- **Validated Contact Workflow**: Controlled contact form with real-time field validation, email format verification, instant error feedback, and submission confirmation.
- **Adaptive Theme & Navigation**: Persistent Dark/Light theme engine synced via `localStorage`, scroll-spy active section tracking, reading progress bar, and responsive mobile navigation.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 19 (`react`, `react-dom`) | Declarative component UI architecture |
| **Build Tool** | Vite 6 (`@vitejs/plugin-react`) | Lightning-fast HMR and optimized production bundling |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Modern utility-first responsive styling with CSS variables |
| **Icons** | Lucide React, Iconify & LobeHub SVG (`lucide-react`, `@iconify/react`, `@lobehub/icons-static-svg`) | Pixel-perfect UI icons and official technology vector logos |
| **Testing** | Vitest 3 + React Testing Library 16 + JSDOM | Fast unit and integration test execution |
| **Code Quality** | ESLint 9 (`react-hooks`, `react-refresh`) | Automated linting and code consistency |
| **Deployment** | Vercel (`vercel.json`) | Single-Page Application (SPA) cloud hosting & rewrites |

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/ArkaKarmoker/react-portfolio-website.git
```

### 2. Navigate to Project Directory

```bash
cd react-portfolio-website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Run Automated Tests

```bash
npm test
```

### 6. Run Code Linter

```bash
npm run lint
```

### 7. Build for Production

```bash
npm run build
```

Production output will be generated inside the `dist/` directory.

### 8. Preview Production Build

```bash
npm run preview
```

---

## 🧪 Automated Testing Suite

The project includes **8 automated integration test suites** in `src/test/App.test.jsx` executed via **Vitest** and **React Testing Library**:

```text
 ✓ src/test/App.test.jsx (8 tests)
   ✓ 1. Navbar: renders brand name, required navigation links, and mobile menu toggle
   ✓ 2. Hero Section: displays name, title, intro, profile picture, Download CV and View Projects buttons
   ✓ 3. About Me Section: displays bio, North South University education, career goals, and profile info
   ✓ 4. Skills Section: displays progress bars, cards, and interactive skill badges
   ✓ 5. Projects Section: renders at least 4 projects via .map() and supports technology filtering
   ✓ 6. Certifications Section: renders all 6 certifications and opens Lightbox preview
   ✓ 7. Contact Section: validates required fields, shows errors, and displays success message on valid submission
   ✓ 8. Additional Features & Footer: toggles Dark/Light mode, scrolls to top, and renders footer links
```

---

## 📸 Application Preview

![Arka Karmoker Portfolio Application Preview](screenshots/application_preview.jpeg)

---

Developed by [Arka Karmoker](https://github.com/ArkaKarmoker)  
Project Repository: [https://github.com/ArkaKarmoker/react-portfolio-website](https://github.com/ArkaKarmoker/react-portfolio-website)

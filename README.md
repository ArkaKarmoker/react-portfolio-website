# 🚀 Arka Karmoker — Software Engineer & Backend Developer Portfolio

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vitest](https://img.shields.io/badge/Vitest-8_Passed-4BB543?style=for-the-badge&logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-Clean-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

A modern, responsive personal portfolio built with **React 19**, **Vite 6**, and **Tailwind CSS v4** showcasing full-stack web platforms, AI/RAG systems, 40+ technology badges, verified certifications, and algorithmic problem-solving achievements.

---

## ✨ Features

- **Developer Hero:** Terminal-styled profile frame, pulsing status badge, CV download, and 4 metric cards (`100+`, `45+`, `10+`, `6`).
- **About & Education:** Bio narrative, profile grid, North South University B.Sc. in CSE (`Graduated`), HSC/SSC (`Dhaka Board`), and Career Goals.
- **Skills & Tech Arsenal:** 22 progress bars across 4 domains, 40+ interactive vector badges with domain filters, LeetCode breakdown (`100+` solved), and open-source contributions.
- **Featured Projects:** 6 production applications (`BinaryFusion`, `FoodFinder`, `MedRec`, `MedRev`, `Ecommerce API`, `djCommerce`) with 10-category live filtering, demo links, and GitHub repos.
- **Verified Certifications:** 6 credentials from DataCamp, Kaggle, and HackerRank with direct verification links and full-screen Lightbox modal preview.
- **Interactive Contact:** Controlled React form with client-side validation, error handling, success confirmation, and direct contact details.
- **Theme & UX:** Persistent Dark/Light mode toggle (`localStorage`), scroll-spy active navbar indicator, and custom branded terminal favicon (`>_`).

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 19 (`react`, `react-dom`) | Declarative component UI architecture |
| **Build Tool** | Vite 6 | Lightning-fast HMR and optimized production bundling |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Modern utility-first responsive styling with CSS variables |
| **Icons** | Lucide React & Iconify (`@iconify/react`) | Pixel-perfect UI icons and official technology vector logos |
| **Testing** | Vitest 3 + React Testing Library | Fast unit and integration test execution |
| **Code Quality** | ESLint 9 + React Hooks Plugin | Automated linting and code consistency |
| **Deployment** | Netlify / Vercel | Single-Page Application (SPA) cloud hosting |

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

# UnitedInTalk – Marketing Site (WIP)

This repository contains the development code for the upcoming **UnitedInTalk marketing page**, which will replace `explore.unitedintalk.com`. The project aims to deliver a clean, responsive, and modular landing site aligned with the company’s mission.

## 🧩 Project Overview

- **Framework:** React + Vite + TypeScript
- **Styling:** TailwindCSS
- **UI Library:** [shadcn/ui](https://ui.shadcn.dev/)
- **Icons:** Lucide
- **Status:** In Progress (as of June 21, 2025)
- **Design Reference:** Based on collaborative Figma/Canva mockups

## ✅ Sections Implemented

- **Sticky Navbar:** With logo and internal navigation links
- **Hero Section:** Tagline, call-to-action, and phone mockup (placeholder image)
- **How It Works:** Step-by-step breakdown with icons and copy
- **Testimonials:** Static user quotes
- **CTA Section:** Final push to sign up

## 🗂️ Directory Structure

```
src/
├── assets/                # Logos, mockups (temporary placeholders)
├── components/            # Reusable sections
│   ├── HeroSection.tsx
│   ├── HowItWorks.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   └── Navbar.tsx (merged into Hero)
├── App.tsx                # Main layout
└── main.tsx               # Vite entry
```

## 🔧 Getting Started

To run the project locally:

```bash
git clone https://github.com/your-org/unitedintalk-marketing.git
cd unitedintalk-marketing
npm install
npm run dev
```

## 🔍 ESLint & TypeScript Setup

The repo uses Vite's recommended ESLint settings for React + TypeScript. For stricter production rules, you may expand the ESLint config:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

Optional plugins:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## 📌 Notes

- **Logo and visual assets** will be swapped once final branding files are approved.
- **Phone UI mockup** is a temporary placeholder — to be replaced with actual product visuals.
- **Blog infrastructure** and **contact form logic** still under planning/discussion.

---

## Maintainer

**Rudgino Chounoune**  
Frontend Intern – UnitedInTalk  
📧 rudginochounoune@gmail.com  
🗓️ Updated: June 21, 2025

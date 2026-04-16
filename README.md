# Portfolio - Slaim Rayane

Portfolio professionnel en francais construit avec React, Vite, Tailwind CSS v4 et Framer Motion.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Installation

```bash
npm install
```

## Lancer en developpement

```bash
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Structure du projet

```text
portfolio/
├─ public/
│  └─ assets/
│     ├─ profile.jpg
│     └─ cv-alternance.pdf
├─ src/
│  ├─ components/
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Projects.jsx
│  │  ├─ SectionTitle.jsx
│  │  ├─ Skills.jsx
│  │  ├─ ThemeToggle.jsx
│  │  └─ TimelineSection.jsx
│  ├─ data/
│  │  └─ portfolioData.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

## Personnalisation rapide

- Donnees personnelles et contenu: `src/data/portfolioData.js`
- Palette et styles globaux: `src/index.css`
- Composition des sections: `src/App.jsx`


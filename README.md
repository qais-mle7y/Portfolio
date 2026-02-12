# Qais Alsaleh — Developer Portfolio

Personal portfolio website showcasing projects, skills, and experience as a full-stack developer.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/qais-mle7y/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens on [http://localhost:5173](http://localhost:5173) by default.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/              # Images, CV, and static files
├── components/
│   ├── about/           # Skills component
│   ├── contact/         # Contact form
│   ├── home/            # Hero, Stats, TechStack
│   ├── layout/          # Navbar, Footer, MobileNav
│   └── portfolio/       # ProjectCard
├── pages/               # Route-level page components
├── types/               # TypeScript declaration files
├── App.tsx              # Root component with routing
├── main.tsx             # Entry point
└── index.css            # Tailwind directives and base styles
```

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React

## Deployment

The production build outputs to `dist/`. Deploy to any static hosting provider (Vercel, Netlify, GitHub Pages, Azure Static Web Apps, etc.).

## License

MIT

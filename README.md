<<<<<<< HEAD
# Personal Portfolio — React + Tailwind + Framer Motion

A premium, dark-themed software engineer portfolio. Single-page, fully responsive, built with functional components and hooks.

## Stack
- React 18 (Vite)
- Tailwind CSS (custom design tokens in `tailwind.config.js`)
- Framer Motion (scroll reveals, hover micro-interactions, the typed-terminal hero line)
- React Icons

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  data/
    portfolioData.js   ← ALL editable content lives here (name, bio, projects, skills, etc.)
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Languages.jsx
    Technologies.jsx
    Projects.jsx
    Timeline.jsx
    Certifications.jsx
    Achievements.jsx
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx ← shared section header
  App.jsx
  index.css           ← design tokens, glass/gradient utility classes
```

## Customizing

1. **Your info** — edit `src/data/portfolioData.js`. Every section reads from this file: name, title, bio, stats, skills, languages, technologies, projects, timeline, certifications, achievements, and contact details.
2. **Your CV** — drop a PDF into `public/` named to match `profile.cvUrl` in the data file (currently `/Adam_Hassan_CV.pdf`).
3. **Your photo** — the hero currently shows initials in a glass card (`profile.avatar`). To use a real photo, replace the initials block in `src/components/Hero.jsx` with an `<img>` tag.
4. **Colors / fonts** — defined as design tokens in `tailwind.config.js` (colors, gradients) and loaded via Google Fonts in `index.html` (Space Grotesk for display, Inter for body, JetBrains Mono for code accents).
5. **Contact form** — `src/components/Contact.jsx` currently simulates a submission. Wire `handleSubmit` to your form backend (e.g. Formspree, EmailJS, or your own API route).

## Design notes

- Dark base `#0B0F19` with glassmorphism cards (`backdrop-filter: blur`) and an indigo → cyan gradient as the primary accent.
- The "engineer" identity is carried through typography and copy: a typed CLI line in the hero, monospace section eyebrows styled like file paths/code comments (`// 02.skills`), and tech tags styled like code badges.
- Every section animates in on scroll via Framer Motion's `whileInView`, kept subtle and consistent rather than scattered.
- Respects keyboard focus (`:focus-visible` outline) and is fully responsive down to small mobile widths.
=======
# portfolio
personal information
>>>>>>> 57ea541d560b6481219fd8291d1e812b642d7ec1

# Shriram Phatale — Developer Portfolio Website

A minimal, dark, structured, and editorial developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. Inspired by high-end design engineering references (shadcncraft, dark technical aesthetics, CAD drafting grids).

## 🚀 Key Features

- **Top Video Banner**: Full-width top banner with smooth autoplay, looping, `object-fit: cover`, adjustable `object-position`, and a fallback high-tech neural particle canvas.
- **Compact Profile Header**: Circular avatar with clean border, Name (**Shriram Phatale**), Role (**Full-Stack Developer**), live IST clock, and pulsing availability badge.
- **Editorial Line System**: Vertical framing border lines (`border-x border-[#242426]`), full-bleed horizontal dividers, and diagonal drafting hatch stripes (`bg-diagonal-hatch`).
- **Interactive Command Palette (`Ctrl + K` / `⌘K`)**: Fast keyboard-driven search to jump between sections, copy email, open GitHub, or inspect projects.
- **Expandable Experience Timeline**: Timeline layout matching the reference screenshot with company icons, remote status dots, role tags, expandable bullet points, and technology pills.
- **AskDoc.ai Showcase + Live RAG Simulator**: Interactive on-page RAG query runner with vector chunk retrieval, cosine similarity scores, and grounded citation synthesis.
- **Grouped Technologies**: Clean pill labels organized into Frontend, Backend, Databases & Infrastructure, and AI & LLM Applications.
- **Centralized Configuration**: All personal info, projects, experience, skills, and banner settings are centralized in `src/config/portfolio.ts`.

---

## 🛠️ Project Structure

```
portfolio-Argon/
├── public/
│   ├── images/
│   │   └── avatar.png            # Profile avatar image
│   └── videos/
│       └── portfolio-banner.mp4   # Place your MP4 video here
├── src/
│   ├── config/
│   │   └── portfolio.ts          # Centralized data & configuration
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky header with monogram & Ctrl+K
│   │   ├── VideoBanner.tsx        # Top video banner + canvas fallback
│   │   ├── ProfileHeader.tsx      # Avatar, name, role, location, status
│   │   ├── SectionHeading.tsx     # Editorial section title (01 — About, etc.)
│   │   ├── GridDivider.tsx        # Horizontal divider + diagonal hatch
│   │   ├── AboutSection.tsx       # Bio & core engineering pillars
│   │   ├── ExperienceSection.tsx  # Experience section wrapper
│   │   ├── ExperienceItem.tsx     # Expandable experience accordion
│   │   ├── ProjectsSection.tsx    # Projects section wrapper
│   │   ├── ProjectItem.tsx        # Project card with highlights & links
│   │   ├── AskDocLiveDemo.tsx     # Interactive RAG & vector simulator
│   │   ├── SkillsSection.tsx      # Grouped technologies with category filters
│   │   ├── ContactSection.tsx     # Copy-email button, GitHub, LinkedIn
│   │   ├── Footer.tsx             # Copyright, year 2026, back to top
│   │   ├── CommandPalette.tsx     # Ctrl+K modal dialog
│   │   └── icons.tsx              # Clean SVG icons
│   ├── App.tsx                    # Main continuous layout assembly
│   ├── index.css                  # Design tokens, hatch pattern, scrollbar
│   └── main.tsx                   # React root entry point
├── package.json
└── vite.config.ts
```

---

## ⚙️ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## ✏️ How to Customize

All content is managed in a single file: **[`src/config/portfolio.ts`](src/config/portfolio.ts)**:

1. **Adding your video**:
   - Place your video file at `public/videos/portfolio-banner.mp4`.
   - Adjust `videoBanner.objectPosition` or `heightDesktop` in `src/config/portfolio.ts`.
2. **Replacing your profile picture**:
   - Place your photo at `public/images/avatar.png` (or update `personal.avatarUrl`).
3. **Updating experience & projects**:
   - Edit the `experience` and `projects` arrays in `src/config/portfolio.ts`.

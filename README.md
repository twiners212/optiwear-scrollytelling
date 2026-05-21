# OPTIWEAR — Precision Eyewear

<div align="center">
  <img src="./public/assets/images/heritage/hero_manifesto.png" alt="Optiwear Hero" width="100%" />
  <p><em>A visually immersive scrollytelling experience</em></p>
</div>

A premium eyewear brand experience built with **Next.js 14**, **Tailwind CSS**, **GSAP**, and **Lenis** smooth scrolling.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## Features

- **Scrollytelling Hero** — Canvas-based frame-sequence animation synchronized with scroll position via GSAP ScrollTrigger.
- **Heritage Page** — Editorial layout with scroll-reveal animations (fade-in-up, clip-path image reveal) for brand storytelling.
- **Shop Page** — Product grid with sidebar filters, cart drawer, and mock checkout modal.
- **Lenis Smooth Scrolling** — Silky smooth scrolling experience across all pages.
- **Responsive Design** — Optimized for mobile, tablet, and desktop viewports.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animation | GSAP 3 + ScrollTrigger |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| UI Components | shadcn/ui (Base Nova) |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Landing page (scrollytelling)
│   ├── heritage/           # Heritage experience page
│   ├── shop/               # Shop page + product detail
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── heritage/           # Heritage page components
│   ├── shop/               # Shop-related components
│   ├── ui/                 # shadcn/ui primitives
│   ├── Navigation.tsx      # Global navigation bar
│   ├── Footer.tsx          # Global footer
│   └── ScrollytellingSection.tsx
├── context/                # React Context (Cart state)
└── lib/                    # Utilities & mock data
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with scrollytelling frame animation |
| `/heritage` | Brand heritage storytelling with editorial layout |
| `/shop` | Product grid with filters and cart |
| `/shop/[id]` | Individual product detail page |

## License

Distributed under the MIT License. See `LICENSE` for more information.

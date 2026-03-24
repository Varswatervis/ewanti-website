# Ewanti Drinkwater — Educational Psychology Website

## Project Overview

A professional website for Ewanti Drinkwater, Registered Educational Psychologist.
Built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Sanity CMS v3**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (CSS-first config in `globals.css`) |
| CMS | Sanity v3 (embedded Studio at `/studio`) |
| Fonts | Cormorant Garamond (headings) + Lato (body) via `next/font/google` |
| Contact form | Formspree (replace `YOUR_FORM_ID` in `ContactForm.tsx`) |
| Deployment | Vercel |

---

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF6F0` | Background |
| `blush` | `#E8B4B8` | Primary accent, buttons |
| `blush-dark` | `#C4878B` | Hover states, text accents |
| `sage` | `#8FAF8C` | Secondary accent (therapy) |
| `sage-dark` | `#6B8F68` | Hover states |
| `teal` | `#7BA7A7` | Tertiary accent (educational services) |
| `teal-dark` | `#5C8A8A` | Hover states |
| `charcoal` | `#3D3D3D` | Primary text |
| `charcoal-light` | `#5E5E5E` | Secondary text |

---

## Project Structure

```
ewanti-site/
├── public/images/          # Site images (logo, assessments, therapy, study-skills)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout — Navbar + Footer wrapping all pages
│   │   ├── globals.css     # Tailwind v4 theme + global styles
│   │   ├── page.tsx        # Home / landing page
│   │   ├── about/          # Who I Am
│   │   ├── services/
│   │   │   ├── page.tsx              # Services overview
│   │   │   ├── assessments/          # Assessments sub-page
│   │   │   ├── therapy/              # Therapy sub-page
│   │   │   └── educational-services/ # Educational Services sub-page
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog listing (fetches from Sanity)
│   │   │   └── [slug]/page.tsx       # Individual post (dynamic)
│   │   ├── resources/      # Resources (placeholder)
│   │   ├── workshops/      # Workshops (placeholder)
│   │   ├── contact/        # Contact page + Formspree form
│   │   └── studio/         # Embedded Sanity Studio (login required)
│   ├── components/
│   │   ├── Navbar.tsx      # Responsive navbar with Services dropdown
│   │   ├── Footer.tsx      # Footer with nav + registrations
│   │   ├── BlogCard.tsx    # Blog post card component
│   │   └── ContactForm.tsx # Formspree contact form (client component)
│   ├── lib/
│   │   └── sanity.ts       # Sanity client + GROQ queries + Post type
│   └── sanity/
│       └── schemaTypes/
│           ├── post.ts     # Blog post schema
│           ├── author.ts   # Author schema
│           └── index.ts    # Schema barrel export
├── sanity.config.ts        # Sanity Studio configuration
├── next.config.ts          # Next.js config (CDN image domains)
├── vercel.json             # Vercel deployment config
├── .env.local              # Local env vars (not committed)
└── .env.example            # Env var template
```

---

## Getting Started (Development)

```bash
cd ewanti-site
npm install
npm run dev
# → http://localhost:3000
```

---

## Setting Up Sanity CMS

1. Go to [sanity.io](https://www.sanity.io) and create a **free account**
2. Create a new project (name: "Ewanti Site", dataset: "production")
3. Copy your **Project ID** from the project dashboard
4. Open `.env.local` and replace:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` → your Project ID
   - `NEXT_PUBLIC_SANITY_DATASET` → `production`
5. Restart the dev server
6. Visit `http://localhost:3000/studio` — log in with your Sanity account
7. Create blog posts using the "Blog Post" document type
8. Posts appear live on `/blog` immediately after publishing

---

## Setting Up the Contact Form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form, set the destination email to Ewanti's address
3. Copy the form ID (looks like `xabcdefg`)
4. Open `src/components/ContactForm.tsx`
5. Replace `YOUR_FORM_ID` in the fetch URL with your actual form ID

---

## Deploying to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Set the following environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN` (create a token at sanity.io/manage with Read permissions)
4. Deploy — Vercel builds automatically on every push to `main`

---

## Sanity Studio (Blog Management)

- **URL (production):** `https://yourdomain.com/studio`
- **URL (local):** `http://localhost:3000/studio`
- Log in with your Sanity account
- Create a new **Blog Post** document, fill in title, slug, excerpt, body, and publish
- The post immediately appears on the live `/blog` page (revalidates every 60 seconds)

---

## Placeholder Items to Complete

- [ ] Replace `YOUR_FORM_ID` in `ContactForm.tsx` with the actual Formspree form ID
- [ ] Add real contact email to `Contact/page.tsx`
- [ ] Add Sanity project ID to `.env.local` (and Vercel settings)
- [ ] Add Ewanti's real location/phone details to the Contact page if desired
- [ ] Fill out Resources page with actual resources when ready
- [ ] Fill out Workshops page when workshops are scheduled

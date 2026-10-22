# Nisha Kumari — Developer Portfolio

Personal portfolio for Nisha Kumari, junior software developer (B.Tech IT, Chandigarh University, 2026).
Built with React 19, TypeScript and Vite, with plain CSS and no UI library.

Live: https://portfolio-nishawork.vercel.app/

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build at http://localhost:4173
npm run lint
```

## Updating content

All text lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): profile links, skills, projects, services and
"why work with me" points. To add a project, add an object to the `projects` array:

- `repo` — only a real GitHub URL; omit it and set `note` if the code is not public.
- `demo` — only a working deployment; the "Live Demo" button and "Live" tag appear only when this is set.
- `visual` — one of the preview illustrations in `src/components/ProjectVisual.tsx`.

The resume is served from `public/Nisha_Kumari_Resume.pdf`. Replace that file to update it.

## Contact form

The form validates input, then by default opens the visitor's email app with the message pre-filled, addressed to
the email in `portfolio.ts`. Nothing pretends to be sent.

To deliver messages straight to your inbox instead:

1. Create a free form at https://formspree.io and copy its endpoint (`https://formspree.io/f/xxxxxxx`).
2. Set `VITE_CONTACT_FORM_ENDPOINT` to that URL, in `.env.local` for local development (see `.env.example`) and in
   Vercel under **Project → Settings → Environment Variables**.
3. Redeploy. The button changes to "Send Message" and shows real success or error states.

## Deploy to Vercel

The project uses Vercel's Vite preset with no extra configuration.

- **If this folder is linked to the existing `Portfolio` repo:** commit and push to the branch Vercel deploys from,
  and Vercel rebuilds automatically.
- **Dashboard:** import the GitHub repo at https://vercel.com/new. Framework: Vite. Build command: `npm run build`.
  Output directory: `dist`.
- **CLI:** `npm i -g vercel`, then `vercel` for a preview and `vercel --prod` for production.

## Structure

```
src/
  data/portfolio.ts      content (edit this)
  components/            Navbar, Hero, About, Skills, Projects, Services, WhyMe, Contact, Footer
  hooks/useReveal.ts     scroll-in animation (respects reduced-motion)
  index.css              design tokens and base styles
  App.css                section and component styles
public/                  resume PDF, favicon, social-share image
```

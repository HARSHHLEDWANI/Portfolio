# Harsh Ledwani — Portfolio (Next.js + Tailwind)

This is a starter portfolio scaffold generated with Next.js and Tailwind CSS.

Features:
- Hero, About, Skills, Projects, Testimonials, Contact
- Sticky, accessible navigation with smooth scroll and active link highlighting
- Subtle animations and scroll reveal effects (Framer Motion + IntersectionObserver)
- Dark/Light mode, responsive layouts, and accessibility-first focus styles
- Placeholder images and copy ready to be replaced with your real content

Local development:
1. cd next-portfolio
2. npm install
3. npm run dev

Deploy: recommended to Vercel or Netlify for static optimization.

Replace placeholder images and copy with your real content. Provide social links and preferred email/contact info if you'd like them included in the header/footer. A public resume PDF is available at `/resume` by default — replace `public/resume.pdf` with your final resume.

How to edit skills & projects

- Edit `data/skills.js` to add or reorganize skills. `components/Skills.jsx` reads this file and renders icons automatically.
- Edit `data/projects.js` to add or update project cards (title, desc, tech, live, repo, image). `components/Projects.jsx` will display them.

Also tell me if you'd like TypeScript or additional pages (blog, resume PDF improvements, case studies) and I will add them.

## Deploying to Vercel

Recommended: connect this GitHub repository to Vercel (https://vercel.com/new) — Vercel will automatically build and deploy from `main`.

Manual deploy (CLI):

1. Install the Vercel CLI: `npm i -g vercel`
2. Log in: `vercel login`
3. From the project root: `vercel` (for preview) or `vercel --prod` (production)

Notes:
- I added `vercel.json` and `.vercelignore` to the repo to provide a stable build config and ignore large files.
- If you'd like, I can run `vercel --prod` for you now — I'll need your permission and either to authenticate interactively or provide a Vercel token (set as `VERCEL_TOKEN` environment variable locally or in CI).
- Alternatively, connect the GitHub repo to Vercel and it will auto-deploy on every push to `main`.    

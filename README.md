# Sandesh Vengala GD&P Portfolio

Premium React + Tailwind portfolio with dark mode, smooth scrolling, animations, project filters, case studies, and a responsive mobile menu.

## Run Locally

1. Install dependencies:
   npm install
2. Start dev server:
   npm run dev
3. Build production bundle:
   npm run build

## Contact Form Setup (Real Submission)

1. Copy .env.example to .env
2. Set `VITE_CONTACT_ENDPOINT` to your private backend endpoint or Supabase Edge Function URL.
3. Restart the dev server after editing .env.

## Supabase Edge Function Example

If you want the contact form to stay private, create a Supabase Edge Function such as `contact-form` and point `VITE_CONTACT_ENDPOINT` to it.

Example endpoint:

```text
https://vkapuxjiyybdppaiamnu.supabase.co/functions/v1/contact-form
```

The function should accept JSON with `name`, `email`, `message`, and `source`, then save the submission to a database table or forward it to email.

## Private Inbox

The site also includes a hidden inbox route at `/admin-inbox` for reviewing submissions.

Set `VITE_ADMIN_ACCESS_KEY` in `.env` and open the route directly. The page is not linked in the navigation, so it will not be visible to regular visitors.

If you want the inbox to load records directly from Supabase, the `contacts` table must allow reads for the credentials used by the page. For stronger privacy, point the inbox at a private backend endpoint instead of exposing read access from the browser.

## Replace Assets With Your Real Work

Drop your files into:
- public/assets/images/hero-showcase.jpg (or update path in code)
- public/assets/images/about-portrait.jpg (or update path in code)
- public/assets/mockups/*.png in src/data/projects.js image field
- public/assets/resume.pdf for resume download links

To switch to JPG/PNG/WebP assets, update the image paths in src/data/projects.js, src/pages/Home.jsx, src/pages/About.jsx, and src/components/ScrollMediaSection.jsx.

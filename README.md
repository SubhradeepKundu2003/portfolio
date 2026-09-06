# Subhradeep Kundu — Portfolio

A personal portfolio website built with plain HTML, CSS, and JavaScript — showcasing experience, skills, and
projects, with a downloadable resume.

## Live Site

Once deployed via GitHub Pages: `https://subhradeepkundu2003.github.io/Portpholio/`

## Structure

```
index.html          Main page markup
css/style.css        Styling, theming (light/dark), layout
js/script.js         Theme toggle, mobile nav, typewriter effect, scroll animations
assets/              Static assets (resume PDF, etc.)
.github/workflows/   GitHub Pages deploy workflow
```

## Local Development

Just open `index.html` in a browser, or serve it locally:

```bash
npx serve .
```

## Deployment

Pushing to `main` automatically deploys to GitHub Pages via the workflow in
`.github/workflows/deploy.yml`. Enable Pages in the repo settings with source set to
**GitHub Actions**.

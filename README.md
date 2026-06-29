# Mohammad Karimi Portfolio

A polished static portfolio site inspired by modern developer portfolios: dark interface, expressive hero section, project cards, experience notes, and a contact section.

## How To Preview

Open `index.html` in your browser.

After making edits, save the file and refresh the browser page.

## Where To Edit

- `index.html` controls your name, intro, about section, experience, featured project, email, and contact copy.
- `script.js` controls the project cards in the projects grid.
- `styles.css` controls the visual design.
- `assets/` contains the current SVG preview images.

This portfolio does not host runnable project apps directly. Each project should live in its own GitHub repository, and the portfolio should link to that repository and its downloadable ZIP.

## Add Or Change Projects

Open `script.js` and edit the `projects` array. Each project looks like this:

```js
{
  title: "StudyFlow Planner",
  type: "web app concept",
  description: "Short description of what the project does.",
  tech: "HTML - CSS - JavaScript",
  demo: "#",
  source: "#",
}
```

Replace `#` with real links when you have them.

## Suggested Next Steps

1. Keep each project in its own GitHub repository.
2. Put the project source code inside that separate repository.
3. Update the `repo` and `download` links in `script.js`.
4. Replace placeholder project ideas with real projects as you build them.
5. Replace the SVG preview images with screenshots.
6. Deploy the portfolio with GitHub Pages, Netlify, or Vercel.

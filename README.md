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
- `projects/studyflow/` contains the first project source files. Move/copy this folder into its own GitHub repository when you are ready to publish it.

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

1. Create a GitHub repo called `studyflow-planner`.
2. Upload the files from `projects/studyflow/` to that repo.
3. Replace the remaining placeholder project ideas with real projects as you build them.
4. Replace the SVG preview images with screenshots.
5. Deploy the portfolio with GitHub Pages, Netlify, or Vercel.

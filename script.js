const projects = [
  {
    title: "StudyFlow Planner",
    type: "portfolio project",
    description:
      "A downloadable student dashboard for planning study tasks, tracking completion, and organizing subjects.",
    spotlight:
      "A student-focused planning dashboard with task creation, subject filters, completion tracking, progress stats, and local browser storage. Built as a standalone repo so anyone can download it and run it instantly.",
    tech: "HTML - CSS - JavaScript",
    repo: "https://github.com/MoeyKarimi/studyflow-planner",
    download: "https://github.com/MoeyKarimi/studyflow-planner/archive/refs/heads/main.zip",
    status: "Ready for GitHub",
    preview: "assets/project-dashboard.svg",
  },
  {
    title: "InvoiceMate",
    type: "portfolio project",
    description:
      "A browser-based invoice generator for client details, editable line items, automatic totals, and print-ready summaries.",
    spotlight:
      "A practical invoice builder with editable business/client details, line items, tax calculation, total due summary, and a print-ready invoice preview. Built as a standalone downloadable browser app.",
    tech: "JavaScript - Forms - Local Data",
    repo: "https://github.com/MoeyKarimi/InvoiceMate",
    download: "https://github.com/MoeyKarimi/InvoiceMate/archive/refs/heads/main.zip",
    status: "Ready for GitHub",
    preview: "assets/project-dashboard.svg",
  },
  {
    title: "WeatherScope",
    type: "portfolio project",
    description:
      "A professional weather dashboard for searching cities, viewing live conditions, and comparing short-term forecasts.",
    spotlight:
      "A responsive weather dashboard that uses public Open-Meteo APIs to search cities, display live conditions, and present hourly and five-day forecasts with dynamic weather-themed backgrounds.",
    tech: "JavaScript - API - Responsive UI",
    repo: "https://github.com/MoeyKarimi/WeatherScope",
    download: "https://github.com/MoeyKarimi/WeatherScope/archive/refs/heads/main.zip",
    status: "Ready for GitHub",
    preview: "assets/project-dashboard.svg",
  },
  {
    title: "Habit Grid",
    type: "interface experiment",
    description:
      "A visual habit tracker concept built around streaks, weekly summaries, and small interaction details.",
    spotlight:
      "A visual habit tracker concept focused on streaks, grid-based progress, tiny interactions, and clear weekly feedback.",
    tech: "HTML - CSS - Microinteractions",
    repo: "https://github.com/MoeyKarimi/habit-grid",
    download: "https://github.com/MoeyKarimi/habit-grid/archive/refs/heads/main.zip",
    status: "Planned",
    preview: "assets/project-dashboard.svg",
  },
  {
    title: "Command Notes",
    type: "developer tool",
    description:
      "A notes app concept for storing useful commands, snippets, and setup steps while learning new tools.",
    spotlight:
      "A searchable developer notes tool for saving commands, code snippets, setup steps, and small lessons while building projects.",
    tech: "JavaScript - Search - Storage",
    repo: "https://github.com/MoeyKarimi/command-notes",
    download: "https://github.com/MoeyKarimi/command-notes/archive/refs/heads/main.zip",
    status: "Planned",
    preview: "assets/project-dashboard.svg",
  },
  {
    title: "Portfolio Lab",
    type: "personal site",
    description:
      "This portfolio system: a flexible place to document projects, track progress, and present finished work.",
    spotlight:
      "A personal portfolio system for presenting software projects, linking to standalone repositories, and documenting growth over time.",
    tech: "HTML - CSS - JavaScript",
    repo: "https://github.com/MoeyKarimi/portfolio",
    download: "https://github.com/MoeyKarimi/portfolio/archive/refs/heads/main.zip",
    status: "In progress",
    preview: "assets/project-dashboard.svg",
  },
];

const projectGrid = document.querySelector("#project-grid");
const spotlightStage = document.querySelector("#spotlight-stage");
const spotlightDots = document.querySelector("#spotlight-dots");
const previousSpotlight = document.querySelector(".spotlight-arrow-left");
const nextSpotlight = document.querySelector(".spotlight-arrow-right");
const experienceTabs = document.querySelectorAll("[data-experience]");
const experiencePanels = document.querySelectorAll("[data-experience-panel]");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
let activeSpotlight = 0;

function renderSpotlight() {
  const project = projects[activeSpotlight];

  spotlightStage.innerHTML = `
    <article class="spotlight-card">
      <img src="${project.preview}" alt="${project.title} project preview" />
      <div class="spotlight-overlay"></div>
      <div class="spotlight-content">
        <p class="eyebrow">${project.type}</p>
        <h3>${project.title}</h3>
        <p>${project.spotlight}</p>
        <p class="tech">${project.tech}</p>
        <div class="spotlight-actions">
          <a href="${project.repo}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="${project.download}" target="_blank" rel="noreferrer">Download repo</a>
        </div>
      </div>
    </article>
  `;

  spotlightDots.innerHTML = projects
    .map(
      (_, index) => `
        <button
          class="${index === activeSpotlight ? "is-active" : ""}"
          type="button"
          aria-label="Show project ${index + 1}"
          data-index="${index}"
        ></button>
      `
    )
    .join("");
}

function showSpotlight(index) {
  activeSpotlight = (index + projects.length) % projects.length;
  renderSpotlight();
}

projectGrid.innerHTML = projects
  .map(
    (project) => `
      <article class="project-card">
        <div class="project-meta">
          <p class="time">${project.type}</p>
          <span class="project-icon" aria-hidden="true"></span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="tech">${project.tech}</p>
        <div class="links">
          <span>${project.status}</span>
          <a href="${project.repo}" target="_blank" rel="noreferrer" aria-label="Open ${project.title} repository">GitHub</a>
          <a href="${project.download}" target="_blank" rel="noreferrer" aria-label="Download ${project.title} repository">Download</a>
        </div>
      </article>
    `
  )
  .join("");

previousSpotlight.addEventListener("click", () => showSpotlight(activeSpotlight - 1));
nextSpotlight.addEventListener("click", () => showSpotlight(activeSpotlight + 1));

spotlightDots.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  showSpotlight(Number(button.dataset.index));
});

experienceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedExperience = tab.dataset.experience;

    experienceTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    experiencePanels.forEach((panel) => {
      const isSelected = panel.dataset.experiencePanel === selectedExperience;
      panel.classList.toggle("is-active", isSelected);
      panel.hidden = !isSelected;
    });
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    siteNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".fade-in").forEach((element) => observer.observe(element));
renderSpotlight();

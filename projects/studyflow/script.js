const starterTasks = [
  {
    id: createId(),
    title: "Review JavaScript array methods",
    subject: "Web Development",
    priority: "High",
    done: false,
  },
  {
    id: createId(),
    title: "Summarize database normalization notes",
    subject: "Databases",
    priority: "Medium",
    done: true,
  },
  {
    id: createId(),
    title: "Complete networking flashcards",
    subject: "Networking",
    priority: "Low",
    done: false,
  },
];

const storageKey = "studyflow-tasks";
const taskForm = document.querySelector("#taskForm");
const taskList = document.querySelector("#taskList");
const taskTitle = document.querySelector("#taskTitle");
const taskSubject = document.querySelector("#taskSubject");
const taskPriority = document.querySelector("#taskPriority");
const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const progressPercent = document.querySelector("#progressPercent");
const progressBar = document.querySelector("#progressBar");
const resetButton = document.querySelector("#resetButton");
const filterButtons = document.querySelectorAll(".filter");

let activeFilter = "all";
let tasks = loadTasks();

function createId() {
  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function loadTasks() {
  const saved = localStorage.getItem(storageKey);
  return saved ? JSON.parse(saved) : starterTasks;
}

function saveTasks() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function getVisibleTasks() {
  if (activeFilter === "open") {
    return tasks.filter((task) => !task.done);
  }

  if (activeFilter === "done") {
    return tasks.filter((task) => task.done);
  }

  return tasks;
}

function renderTasks() {
  const visibleTasks = getVisibleTasks();

  if (visibleTasks.length === 0) {
    taskList.innerHTML = `<div class="empty-state">No tasks match this filter yet.</div>`;
  } else {
    taskList.innerHTML = visibleTasks
      .map(
        (task) => `
          <article class="task-item ${task.done ? "is-done" : ""}">
            <button
              class="task-check ${task.done ? "is-done" : ""}"
              type="button"
              aria-label="Toggle ${task.title}"
              data-id="${task.id}"
            ></button>
            <div class="task-content">
              <h3>${task.title}</h3>
              <p>${task.subject}</p>
            </div>
            <span class="priority ${task.priority}">${task.priority}</span>
          </article>
        `
      )
      .join("");
  }

  renderStats();
}

function renderStats() {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.done).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  totalTasks.textContent = total;
  completedTasks.textContent = completed;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  tasks.unshift({
    id: createId(),
    title: taskTitle.value.trim(),
    subject: taskSubject.value,
    priority: taskPriority.value,
    done: false,
  });

  taskForm.reset();
  saveTasks();
  renderTasks();
});

taskList.addEventListener("click", (event) => {
  const button = event.target.closest(".task-check");

  if (!button) {
    return;
  }

  tasks = tasks.map((task) =>
    task.id === button.dataset.id ? { ...task, done: !task.done } : task
  );

  saveTasks();
  renderTasks();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => filterButton.classList.remove("is-active"));
    button.classList.add("is-active");
    renderTasks();
  });
});

resetButton.addEventListener("click", () => {
  tasks = starterTasks.map((task) => ({ ...task, id: createId() }));
  saveTasks();
  renderTasks();
});

renderTasks();

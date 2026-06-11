---
layout: page
title: Task 6
description: Unlock your Sherlocked
importance: 7
---

<style>
.projects-grid {
  display: grid;
  gap: 1.5rem;
  margin: 2rem auto;
  max-width: 720px;
  grid-template-columns: repeat(3, 1fr);
}

/* scoped under .projects-grid so these win over the theme's
   `.project-detail a { border-bottom: 1px solid transparent }`, which
   otherwise erased each card's bottom border */
.projects-grid .task-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.projects-grid .task-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: #d0d0d0;
}

.projects-grid .task-card h3 {
  color: #D72B2B;
  margin: 0;
}

.points-line {
  text-align: center;
  margin-top: 1.75rem;
  font-weight: 700;
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
}
</style>

# Unlock your Sherlocked

## Choose any one of the following options:

<div class="projects-grid">
  <a href="/tasks/task6_a/" class="task-card">
    <h3>Task 6A</h3>
  </a>
  <a href="/tasks/task6_b/" class="task-card">
    <h3>Task 6B</h3>
  </a>
  <a href="/tasks/task6_c/" class="task-card">
    <h3>Task 6C</h3>
  </a>
</div>

<p class="points-line">Points for any one Task: <span style="color: #D72B2B;">150</span></p>

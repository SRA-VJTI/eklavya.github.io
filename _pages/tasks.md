---
layout: page
title: Tasks
permalink: /tasks/
description:
nav: true
nav_order: 2
horizontal: false
---
<!-- pages/tasks.md -->

<style>
.guidelines {
  max-width: 820px;
  margin: 3.5rem auto 1rem;
  padding: 2rem 2.25rem 2.25rem;
  background: #faf9f7;
  border: 1px solid #ececea;
  border-radius: 14px;
}

.guidelines-title {
  font-family: 'Nohemi', Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-size: 1.6rem;
  margin: 0 0 0.4rem;
  padding-bottom: 0.9rem;
  border-bottom: 2px solid #D72B2B;
  color: var(--black);
}

.guidelines-list {
  list-style: none;
  margin: 1.4rem 0 0;
  padding: 0;
  counter-reset: step;
}

.guidelines-list li {
  position: relative;
  padding-left: 2.6rem;
  margin-bottom: 1.05rem;
  font-size: 1.0rem;
  line-height: 1.65;
  color: #333;
  counter-increment: step;
}

.guidelines-list li::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: 0.05em;
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #D72B2B;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 50%;
}

.guidelines-list li:last-child {
  margin-bottom: 0;
}

.guidelines-list code {
  background: #fff;
  border: 1px solid #e3ddd9;
  border-radius: 5px;
  padding: 0.1rem 0.4rem;
  font-size: 0.9em;
  color: #b3231f;
  white-space: nowrap;
}

.guidelines-list strong {
  color: #1a1a1a;
}
</style>

<div class="projects">
{%- assign sorted_tasks = site.tasks | sort: "importance" -%}
{% if page.horizontal -%}
<div class="container">
  <div class="row row-cols-2">
  {%- for project in sorted_tasks -%}
    {%- unless project.url contains "task6_" -%}
      {% include projects.html %}
    {%- endunless -%}
  {%- endfor %}
  </div>
</div>
{%- else -%}
<div class="grid">
  {%- for project in sorted_tasks -%}
    {%- unless project.url contains "task6_" -%}
      {% include projects.html %}
    {%- endunless -%}
  {%- endfor %}
</div>
{%- endif -%}
</div>

<div class="guidelines" markdown="0">
  <h2 class="guidelines-title">Task Submission Guidelines</h2>
  <ol class="guidelines-list">
    <li>Each task's submission is taken through a Google Form.</li>
    <li>Once you have solved a particular task, <strong>do not submit the form immediately.</strong> Check with your mentors first, and send them the final task output along with the remaining deliverables asked for.</li>
    <li>Only once the mentors approve your submission should you submit the Google Form for that task.</li>
    <li>You can submit each task's Google Form <strong>only once</strong>, so make sure your mentors have approved before submitting. A wrong submission cannot be undone.</li>
    <li>Maintain a Google Drive folder named in the format <code>team_teamname_teamnumber</code>.</li>
    <li>For each task, create a sub-folder named in the format <code>team_teamname_task_tasknumber</code>.</li>
    <li>Upload the task's deliverables (mentioned in the task and form descriptions) to that task sub-folder, and attach the link to the sub-folder in the Google Form.</li>
    <li>Submit all your tasks from <strong>one email ID only</strong> (any one team member, but stick to it for all tasks).</li>
  </ol>
</div>

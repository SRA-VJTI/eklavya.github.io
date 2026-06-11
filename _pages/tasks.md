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

<div style="margin: 2rem 0;"></div>

## Task Submission Guidelines

- Each task's submission is taken through a google form.
- Once you have solved a particular task, DO NOT submit the form immediately. Check with your mentors, send them the final task output and the remaining deliverables asked for.
- Once the mentors approve of submission, only then will you submit the google form for the task.
- You can submit each task's google form only once, so make sure your mentors have approved of your submission. You cannot undo a wrong submission.
- You have to maintain a google drive folder named in the format: **team_teamname_teamnumber**
- For submitting each task, you will create a sub-folder for that task, named in this format: **team_teamname_task_tasknumber**
- You will upload the task's deliverables mentioned (in the task description and form description) on the task subfolder, and attach the link to the subfolder in the google form.
- Submit all your tasks from one email id only (can be any one team member, but stick to that for all tasks)

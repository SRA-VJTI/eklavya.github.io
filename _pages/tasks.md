---
layout: page
title: Tasks
permalink: /tasks/
description:
nav: true
nav_order: 2
horizontal: false
---
<!-- pages/projects.md -->

<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.tasks | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}

<!-- Display projects without categories -->

{%- assign sorted_projects = site.tasks | sort: "importance" -%}

  <!-- Generate cards for each project -->

{% if page.horizontal -%}

  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>


## Important For Task Submissions

- [ ] Google Drive folder created with your **team name**
- [ ] Separate subfolders created for each task in the format: `eamName_TeamNumber_Task1`, `TeamName_TeamNumber_Task2`, etc.
- [ ] All required documents added inside the correct task folders
- [ ] Google Doc is added to the task folder in Drive (Wherever required)
- [ ] Document is **shared with edit access**
- [ ] Document sharing is set to: **Anyone with the link can view**
- [ ] Drive folder link is **ready and accessible**
- [ ] Google Form is filled with **only the Drive link**
- [ ] Submission is **confirmed with your mentor**
- [ ] Only **one submission per task** has been made

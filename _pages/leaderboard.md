---
layout: page
title: Leaderboard
permalink: /leaderboard/
description:
nav: true
nav_order: 2
horizontal: false
---

<div id="leaderboard">
  <table class="table" id="leaderboardTable">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Team</th>
        <th scope="col">Score</th>
      </tr>
    </thead>
    <tbody id="leaderboardBody">
      <!-- Table rows will be dynamically generated here -->
    </tbody>
  </table>
</div>

<script src="{{ '/assets/js/leaderboard.js' | relative_url }}"></script>

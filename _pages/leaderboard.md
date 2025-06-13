---
layout: page
title: Leaderboard
permalink: /leaderboard/
description:
nav: true
nav_order: 2
horizontal: false
---

<h1 id="countdownTimer" style="text-align: center; font-size: 2.5em; font-weight: bold; margin-top: 1rem;">
  Time left:
</h1>

<script>
  const countdownTimer = document.getElementById("countdownTimer");

  const countdown = () => {
    const deadline = new Date("June 14, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const diff = deadline - now;

    if (diff <= 0) {
      countdownTimer.textContent = "Time's up!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownTimer.textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  countdown();
  setInterval(countdown, 1000);
</script>


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
      
    </tbody>
  </table>
</div>


<script src="{{ '/assets/js/leaderboard.js' | relative_url }}"></script>

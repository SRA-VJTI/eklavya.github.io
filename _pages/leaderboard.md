---
layout: page
title: Leaderboard
permalink: /leaderboard/
---

<style>
.leaderboard-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem 1rem;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98rRUNTTHddzwYQ0b9iB5NMkjAxGMEXPWxDrufYGEsnPk7aTrvvwppHg&s=10');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: 12px;
  position: relative;
}

.leaderboard-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.80);
  border-radius: 12px;
  z-index: 0;
}

.leaderboard-container > * {
  position: relative;
  z-index: 1;
}

.leaderboard-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
}

.leaderboard-table thead {
  background-color: transparent;
}

.leaderboard-table th {
  padding: 1.2rem;
  text-align: left;
  font-weight: 700;
  color: black;
  border: 2px solid #000000;
  font-size: 1.1rem;
}

.leaderboard-table tbody th {
  color: black;
}

.leaderboard-table tbody th.top-rank {
  font-weight: 900;
}

.leaderboard-table tbody tr {
  border: 2px solid #000000;
}

.leaderboard-table td {
  padding: 1rem 1.2rem;
  text-align: left;
  border: 2px solid #000000;
}

.leaderboard-table tbody td:nth-child(2) {
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.3px;
  color: #1a1a1a;
}

.leaderboard-table tbody tr:hover {
  background-color: #f0f0f0;
}

.leaderboard-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

@media (max-width: 600px) {
  .leaderboard-container {
    margin: 1rem auto;
    padding: 1.25rem 0.75rem;
    background-attachment: scroll;
  }

  .leaderboard-table th,
  .leaderboard-table td {
    padding: 0.6rem 0.7rem;
    font-size: 0.9rem;
  }

  .leaderboard-table tbody td:nth-child(2) {
    font-size: 0.9rem;
  }
}
</style>

<div class="leaderboard-container">
  <div class="leaderboard-table-wrapper">
    <table class="leaderboard-table">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Team</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody id="leaderboardBody">
        <tr>
          <td colspan="3" style="text-align: center; padding: 2rem;">Loading leaderboard...</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<script src="{{ '/assets/js/leaderboard.js' | relative_url }}"></script>

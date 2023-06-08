---
layout: page
title: Leaderboard
permalink: /leaderboard/
description:
nav: true
nav_order: 2
horizontal: false
---

<div id="leaderboard"></div>

<!-- <script src="{{ '/assets/js/leaderboard.js' | relative_url }}"></script> -->

<p> {{site.data.leaderboard | jsonify}} </p>

let SHEET_ID    = "1VKu6xus_T2644oPOtyZ1-PWJeJlf0SdXii2cAYwcY6A";
let SHEET_TITLE = "Eklavya2k25";
let SHEET_RANGE = "A2:C60";

let full_URI = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;

fetch(full_URI)
  .then(res => res.text())
  .then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));

    const leaderboardData = data.table.rows.map(r => ({
      teamName: r.c[0]?.v || "Unknown",
      score:   Number(r.c[1]?.v || 0)
    }));

    leaderboardData.sort((a, b) => b.score - a.score);

    const leaderboardBody = document.getElementById("leaderboardBody");
    leaderboardBody.innerHTML = "";

    if (leaderboardData.length === 0) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.setAttribute("colspan", "3");
      cell.textContent = "No matching record found";
      row.appendChild(cell);
      leaderboardBody.appendChild(row);
    } else {
      let prevScore  = null;
      let rankCounter = 0;

      leaderboardData.forEach(({ teamName, score }) => {
        // on a new score, bump the dense rank
        if (score !== prevScore) {
          rankCounter++;
          prevScore = score;
        }
        const displayRank = rankCounter;

        const tr = document.createElement("tr");

        const rankCell = document.createElement("th");
        rankCell.setAttribute("scope", "row");
        rankCell.textContent = displayRank;
        tr.appendChild(rankCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = teamName;
        tr.appendChild(nameCell);

        const scoreCell = document.createElement("td");
        scoreCell.textContent = score;
        tr.appendChild(scoreCell);

        leaderboardBody.appendChild(tr);
      });
    }
  });

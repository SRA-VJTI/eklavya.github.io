let SHEET_ID    = "10r-P2sPzdDqvmRd1kgQTrPRytjN3flf3qGshn6RaS4E";
let SHEET_TITLE = "Sheet1";
let SHEET_RANGE = "B2:E1000";

let full_URI = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;

fetch(full_URI)
  .then(res => res.text())
  .then(rep => {
    console.log("Raw response:", rep.substring(0, 100));

    if (!rep.includes('"table"')) {
      throw new Error("Invalid response from Google Sheets API - spreadsheet may not be publicly shared");
    }

    let data = JSON.parse(rep.substr(47).slice(0, -2));

    const leaderboardData = data.table.rows.map(r => ({
      teamName: r.c[0]?.v || "Unknown",
      score:   Number(r.c[3]?.v || 0)
    }));

    leaderboardData.sort((a, b) => b.score - a.score);

    const leaderboardBody = document.getElementById("leaderboardBody");
    leaderboardBody.innerHTML = "";

    if (leaderboardData.length === 0) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.setAttribute("colspan", "3");
      cell.textContent = "No data available yet";
      row.appendChild(cell);
      leaderboardBody.appendChild(row);
    } else {
      let prevScore  = null;
      let rankCounter = 0;

      leaderboardData.forEach(({ teamName, score }) => {
        if (score !== prevScore) {
          rankCounter++;
          prevScore = score;
        }
        const displayRank = rankCounter;

        const tr = document.createElement("tr");

        const rankCell = document.createElement("th");
        rankCell.setAttribute("scope", "row");
        rankCell.textContent = displayRank;
        if (displayRank <= 3) {
          rankCell.classList.add("top-rank");
        }
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
  })
  .catch(err => {
    const leaderboardBody = document.getElementById("leaderboardBody");
    leaderboardBody.innerHTML = "";
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.setAttribute("colspan", "3");
    cell.textContent = "Error loading leaderboard: " + err.message;
    cell.style.color = "#d32f2f";
    row.appendChild(cell);
    leaderboardBody.appendChild(row);
    console.error("Leaderboard error:", err);
  });

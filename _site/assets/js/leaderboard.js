let SHEET_ID = "1SicFCrILTarw2dsadPwuciuanI6aIcLU1i8DWhv62k0";
let SHEET_TITLE = "Eklavya Leaderboard 24";
let SHEET_RANGE = "A2:B42";

let full_URI = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}/&range=${SHEET_RANGE}`;

fetch(full_URI)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    let leaderboardData = [];

    for (row in data.table.rows) {
      let teamName = data.table.rows[row]["c"][0]["v"];
      let score = data.table.rows[row]["c"][1]["f"];
      leaderboardData.push({ teamName, score });
    }

    // Sort the leaderboardData array based on the score
    leaderboardData.sort((a, b) => b.score - a.score);

    let leaderboardBody = document.getElementById("leaderboardBody");
    leaderboardBody.innerHTML = ""; // Clear existing content

    if (leaderboardData.length === 0) {
      // If leaderboardData is empty, display "No matching record found" message
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      cell.setAttribute("colspan", "3");
      cell.textContent = "No matching record found";
      row.appendChild(cell);
      leaderboardBody.appendChild(row);
    } else {
      let count = 1;
      for (let i = 0; i < leaderboardData.length; i++) {
        let row = document.createElement("tr");
        let idCell = document.createElement("th");
        idCell.setAttribute("scope", "row");
        idCell.textContent = count++;
        row.appendChild(idCell);

        let firstCell = document.createElement("td");
        firstCell.textContent = leaderboardData[i].teamName;
        row.appendChild(firstCell);

        let lastCell = document.createElement("td");
        lastCell.textContent = leaderboardData[i].score;
        row.appendChild(lastCell);

        leaderboardBody.appendChild(row);
      }
    }
  });
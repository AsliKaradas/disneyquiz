const highscore = localStorage.getItem("playerScore");
let finalScore = document.getElementById("final-score");
finalScore.textContent = highscore;
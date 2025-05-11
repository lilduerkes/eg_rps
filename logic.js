let wins = 0;
let losses = 0;
let ties = 0;

function initPick() {
  setOpponentPick("img/mystery.svg");
}

function setOpponentPick(pick) {
  document.getElementById('oppResult').src = pick;
}

function getRandomPick() {
  const picks = ["img/coolRock.png", "img/fireeee.png", "img/waterrrr.png"];
  return picks[Math.floor(Math.random() * picks.length)];
}

function updateResult(playerPick, opponentPick) {
  let resultText = "";

  if (playerPick === opponentPick) {
    ties++;
    resultText = "It's a Tie";
  } else if (
    (playerPick === "img/coolRock.png" && opponentPick === "img/fireeee.png") ||
    (playerPick === "img/fireeee.png" && opponentPick === "img/waterrrr.png") ||
    (playerPick === "img/waterrrr.png" && opponentPick === "img/coolRock.png")
  ) {
    wins++;
    resultText = "You Win!";
  } else {
    losses++;
    resultText = "You Lose";
  }

  document.getElementById('result').innerHTML = resultText;
  updateScoreboard();
}

function updateScoreboard() {
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('ties').textContent = ties;
}

function resetScore() {
  wins = 0;
  losses = 0;
  ties = 0;
  updateScoreboard();
  document.getElementById('result').innerHTML = "&nbsp;";
  initPick();
}

function rockPick() {
  const playerPick = "img/coolRock.png";
  const opponentPick = getRandomPick();
  setOpponentPick(opponentPick);
  updateResult(playerPick, opponentPick);
}

function paperPick() {
  const playerPick = "img/fireeee.png";
  const opponentPick = getRandomPick();
  setOpponentPick(opponentPick);
  updateResult(playerPick, opponentPick);
}

function scissorsPick() {
  const playerPick = "img/waterrrr.png";
  const opponentPick = getRandomPick();
  setOpponentPick(opponentPick);
  updateResult(playerPick, opponentPick);
}

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
  if (playerPick === opponentPick) {
    document.getElementById('result').innerHTML = "It's a Tie";
  } else if (
    (playerPick === "img/coolRock.png" && opponentPick === "img/fireeee.png") ||
    (playerPick === "img/fireeee.png" && opponentPick === "img/waterrrr.png") ||
    (playerPick === "img/waterrrr.png" && opponentPick === "img/coolRock.png")
  ) {
    document.getElementById('result').innerHTML = "You Win!";
  } else {
    document.getElementById('result').innerHTML = "You Lose";
  }
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

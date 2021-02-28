const state = {
  humanCounter: 0,
  computerCounter: 0,
  isPlaying: true,
};

function determineWinner(humanOption, computerOption) {
  switch (humanOption) {
    case optionEnum.ROCK:
      if (computerOption === optionEnum.SCISSORS) return playerTypeEnum.HUMAN;
      else if (computerOption === optionEnum.PAPER)
        return playerTypeEnum.COMPUTER;
      break;
    case optionEnum.SCISSORS:
      if (computerOption === optionEnum.ROCK) return playerTypeEnum.COMPUTER;
      else if (computerOption === optionEnum.PAPER) return playerTypeEnum.HUMAN;
      break;
    case optionEnum.PAPER:
      if (computerOption === optionEnum.ROCK) return playerTypeEnum.HUMAN;
      else if (computerOption === optionEnum.SCISSORS)
        return playerTypeEnum.COMPUTER;
      break;
    default:
      return;
  }

  return null;
}

function addWin(playerType) {
  const game = document.querySelector(".game");
  switch (playerType) {
    case playerTypeEnum.HUMAN:
      state.humanCounter++;
      const humanCounterElement = document.querySelectorAll(
        ".leaderboard__score"
      )[0];
      humanCounterElement.innerHTML = state.humanCounter;
      game.innerHTML += getMessageElement("You won!", "game__message--green");
      break;
    case playerTypeEnum.COMPUTER:
      state.computerCounter++;
      const computerCounterElement = document.querySelectorAll(
        ".leaderboard__score"
      )[1];
      computerCounterElement.innerHTML = state.computerCounter;
      game.innerHTML += getMessageElement("You lost!", "game__message--red");
      break;
    default:
      game.innerHTML += getMessageElement("You tied!", "game__message--grey");
      break;
  }
}

function getMessageElement(message, className) {
  return `
		<div class="game__message ${className}">${message}</div>
	`;
}

function getRandomOption() {
  return Object.values(optionEnum)[getRandomIntFromRange(0, 2)];
}

function handleOptionClick(humanOption) {
  const computerOption = getRandomOption();
  addWin(determineWinner(humanOption, computerOption));
}

function addKeyPressEventListener() {
  window.addEventListener("keypress", (event) => {
    if (!state.isPlaying) return;

    const computerOption = getRandomOption();
    let humanOption = null;

    switch (event.key.toLowerCase()) {
      case "r":
        humanOption = optionEnum.ROCK;
        break;
      case "p":
        humanOption = optionEnum.PAPER;
        break;
      case "s":
        humanOption = optionEnum.SCISSORS;
        break;
      default:
        return;
    }

    addWin(determineWinner(humanOption, computerOption));
  });
}

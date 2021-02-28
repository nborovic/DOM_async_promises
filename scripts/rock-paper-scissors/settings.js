function setSettings() {
  const playerNameValue = localStorage.getItem("player-name");
  const backgroundColorValue = localStorage.getItem("background-color");

  const player = document.querySelector(".leaderboard__name");
  const body = document.body;

  player.innerHTML = playerNameValue;
  body.style.background = backgroundColorValue;

  const playerNameInput = document.querySelector("input[name='player-name']");
  const backgroundColorInput = document.querySelector(
    "input[name='background-color']"
  );

  playerNameInput.value = playerNameValue;
  backgroundColorInput.value = backgroundColorValue;
}

function menuClickHandler() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.classList.contains("sidebar--closed")) {
    sidebar.classList.remove("sidebar--closed");
    sidebar.classList.add("sidebar--open");
    state.isPlaying = false;
  } else {
    sidebar.classList.remove("sidebar--open");
    sidebar.classList.add("sidebar--closed");
    state.isPlaying = true;
  }
}

function handleSettingsFormSubmit(form) {
  const playerName = form.querySelector('input[name="player-name"]').value;
  const backgroundColor = form.querySelector('input[name="background-color"]')
    .value;

  localStorage.setItem("player-name", playerName);
  localStorage.setItem("background-color", backgroundColor);

  setSettings();
}

function resetSettings() {
  localStorage.setItem("player-name", "HUMAN");
  localStorage.setItem("background-color", "#ffffff");
  setSettings();
}

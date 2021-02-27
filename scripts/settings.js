function menuClickHandler() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.classList.contains("sidebar--closed")) {
    sidebar.classList.remove("sidebar--closed");
    sidebar.classList.add("sidebar--open");
    state.playing = false;
  } else {
    sidebar.classList.remove("sidebar--open");
    sidebar.classList.add("sidebar--closed");
    state.playing = true;
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

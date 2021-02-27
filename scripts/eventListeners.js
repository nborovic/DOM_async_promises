(function setEventListeners() {
  addLoadEventListener();
  addKeyPressEventListener();
})();

function addLoadEventListener() {
  window.addEventListener("load", () => setSettings());
}

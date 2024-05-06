// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropdown = document.getElementById("horn-select");
  const hornImage = document.querySelector("section > img");
  const volumeIcon = document.querySelector("div > img");
  const playButton = document.querySelector("section > button");

  dropdown.addEventListener("change", (event) => {
    hornImage.src = "/assets/" + event.target.value + ".svg"
  });

  playButton.addEventListener("click", (event) => {
    // TODO
  });
}
// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropdown = document.getElementById("horn-select");
  const hornImage = document.querySelector("section#expose > img");
  const volumeIcon = document.querySelector("div#volume-controls > img");
  const playButton = document.querySelector("section#expose > button");
  const audioPlayer = document.querySelector("section#expose > audio");
  const volumeSlider = document.querySelector("input[type='range']")

  dropdown.addEventListener("change", (event) => {
    hornImage.src = "/assets/images/" + event.target.value + ".svg"
    audioPlayer.src = "/assets/audio/" + event.target.value + ".mp3"
  });

  playButton.addEventListener("click", (event) => {
    audioPlayer.play();
  });

  volumeSlider.addEventListener("change", (event) => {
    // TODO
  });
}
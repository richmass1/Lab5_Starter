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
    hornImage.src = "./assets/images/" + event.target.value + ".svg"
    audioPlayer.src = "./assets/audio/" + event.target.value + ".mp3"
  });

  playButton.addEventListener("click", (event) => {
    const jsConfetti = new JSConfetti();
    if (dropdown.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    audioPlayer.play();
  });

  volumeSlider.addEventListener("change", (event) => {
    const vol = event.target.value;
    audioPlayer.volume = vol / 100.0;
    if (vol == 0) {
      volumeIcon.src = "./assets/icons/volume-level-0.svg";
    } else if (vol < 33) {
      volumeIcon.src = "./assets/icons/volume-level-1.svg";
    } else if (vol < 67) {
      volumeIcon.src = "./assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "./assets/icons/volume-level-3.svg";
    }
  });
}
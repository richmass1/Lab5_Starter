// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceIMG = document.querySelector("section#explore > img");
  const txtbox = document.getElementById("text-to-speak");
  const dropdown = document.getElementById("voice-select");
  const playButton = document.querySelector("section#explore > button");

  // populate dropdown with voice options
  let voicelist = [];
  speechSynthesis.addEventListener("voiceschanged", () => {
    voicelist = speechSynthesis.getVoices();
    for (let i = 0; i < voicelist.length; i++) {
    const voiceOption = new Option(voicelist[i].name, i);
    dropdown.add(voiceOption);
  }
  });

  playButton.addEventListener("click", (event) => {
    faceIMG.src = "./assets/images/smiling-open.png";
    let speech = new SpeechSynthesisUtterance(txtbox.value);
    speech.voice = voicelist[dropdown.selectedOptions[0].value];
    speechSynthesis.speak(speech);
    speech.addEventListener("end", () => {
      faceIMG.src = "./assets/images/smiling.png";
    });
  });
}
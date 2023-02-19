const keys = document.querySelectorAll(".drum-key");
const keySound = new Map();

keys.forEach((key) => {
  const keyText = key.firstChild.textContent.trim().toLowerCase();
  const soundText = key.querySelector("p").textContent.trim().toLowerCase();
  keySound.set(keyText, "./sounds/" + soundText + ".wav");
  key.addEventListener("click", () => {
    removeKeyClickedClass();
    addKeyClickedPlayAudio(key);
  });
});

function removeKeyClickedClass() {
  keys.forEach((eachKey) => {
    if (eachKey.classList.contains("key-clicked")) {
      eachKey.classList.remove("key-clicked");
    }
  });
}

function addKeyClickedPlayAudio(key) {
  const keyText = key.firstChild.textContent.trim().toLowerCase();
  key.classList.add("key-clicked");
  playAudio(keySound.get(keyText));
}

function playAudio(pathToFile) {
  const audio = new Audio(pathToFile);
  audio.play();
}

document.addEventListener(
  "keypress",
  (event) => {
    const name = event.key;
    // const code = event.code;
    const clickedKey = name.toLowerCase();
    if (keySound.has(clickedKey)) {
      keys.forEach((eachKey) => {
        if (eachKey.classList.contains("key-clicked")) {
          eachKey.classList.remove("key-clicked");
        }
        console.log(eachKey);
        if (
          eachKey.firstChild.textContent.trim().toLowerCase() === clickedKey
        ) {
          addKeyClickedPlayAudio(eachKey);
        }
      });
    }
  },
  false
);

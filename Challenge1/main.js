const keys = document.querySelectorAll(".drum-key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    playAudioForKey(key.getAttribute("data-key"));
  });
  key.addEventListener("transitionend", removeTransition);
});

function removeTransition(e) {
  // many transition end will be fired border, box-shadow etc
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("key-clicked");
}

function playAudioForKey(key) {
  const audioEle = document.querySelector(`audio[data-key="${key}"]`);
  if (!audioEle) {
    return;
  }
  audioEle.currentTime = 0; // rewind to start on multiple clicks
  audioEle.play();
  const keyEle = document.querySelector(`div[data-key="${key}"]`);
  if (keyEle) {
    keyEle.classList.add("key-clicked");
  }
}

document.addEventListener(
  "keypress",
  (event) => {
    // const keyName = event.key;
    let keyCode = event.keyCode;
    if (keyCode >= 97 && keyCode <= 122) {
      // Check if the key code is for a lowercase letter
      keyCode = keyCode - 32; // Convert to uppercase by subtracting 32 (the difference between the uppercase and lowercase ASCII codes)
    }
    playAudioForKey(keyCode);
  },
  false
);

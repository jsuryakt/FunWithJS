const container = document.querySelector(".main-container");
const hero = document.querySelector(".hero");
const audio = document.querySelector("audio");
const stopBtn = document.querySelector("#stopBtn");
const input = document.querySelector("input");
const video = document.querySelector("#video");
const header = document.querySelector("header");
audio.volume = 0.4;
let keyLogger = [];
const targetCode = "surya";
console.log(screen.orientation.type);
//simple hack to check for mobile device in potrait, if device is in landscape then it will fail
if (screen.orientation.type === "portrait-primary") {
  input.addEventListener("input", (e) => logKey(e.target.value.slice(-1)));
  showInputForMobile();
} else {
  window.addEventListener("keyup", (e) => logKey(e.key));
}

function logKey(key) {
  keyLogger.push(key);
  if (keyLogger.length >= targetCode.length) {
    if (keyLogger.join("").toLowerCase() === targetCode.toLowerCase()) {
      magicFunction();
    }
    keyLogger.shift();
  }
  console.log(keyLogger);
}

function showInputForMobile() {
  input.style.display = "block";
}

function magicFunction() {
  if (hero.classList.contains("magic")) {
    hero.classList.remove("magic");
    stopAudio();
    stopVideo();
    stopBtn.style.display = "none";
    video.style.opacity = "0";
    header.style.bottom = "unset";
    showInputForMobile();
  } else {
    hero.classList.add("magic");
    stopBtn.style.display = "block";
    video.style.opacity = "1";
    audio.play();
    video.play();
    header.style.bottom = "5rem";
    input.style.display = "none";
  }
}

stopBtn.addEventListener("click", () => {
  magicFunction();
});

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}
function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

video.addEventListener("ended", () => {
  magicFunction();
});

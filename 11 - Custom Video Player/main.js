const MUTE = 0;
const LOW_VOLUME = 0.3;
const MEDIUM_VOLUME = 0.6;
const videoElement = document.querySelector(".video");
const videoTime = document.querySelector(".video-time");
const playPauseButton = document.querySelector(".play-pause-btn");
const videoSlider = document.querySelector(".video-slider");
const volumeButton = document.querySelector(".volume-btn");
const volumeSlider = document.querySelector(".volume-slider");
const videoSizeButton = document.querySelector(".video-size-btn");
let prevVolume;
let videoDuration;
init();

function init() {
  updateVideoDuration();
  updateVolume(videoElement.volume);
  setInterval(updateVideoTime, 500);
}

function updateVideoDuration() {
  videoDuration = parseInt(videoElement.duration);
  videoSlider.setAttribute("max", videoDuration);
}

function playOrPause() {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
}

function updatePlayPauseBtn() {
  playPauseButton.innerText = videoElement.paused ? "▶" : "❚ ❚";
}

function rollSeek() {
  videoSlider.value = videoElement.currentTime;
  updateVideoTime();
}

function updateVideoTime() {
  videoTime.textContent = `${convertTime(
    videoElement.currentTime
  )}/${convertTime(videoElement.duration)}`;
}

function convertTime(secs) {
  let minutes = Math.floor(secs / 60)
    .toString()
    .padStart(2, "0");
  let seconds = parseInt(secs % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateSeek(e) {
  const newTime = e.target.value;
  videoElement.currentTime = newTime;
}

function updateVolume(volume) {
  videoElement.volume = parseFloat(volume);
  volumeSlider.value = videoElement.volume;
  updateVolumeIcon(volume);
  if (volume !== 0) {
    prevVolume = volume;
  }
}

function updateVolumeIcon(volume) {
  if (volume == MUTE) {
    volumeButton.textContent = "🔇";
  } else if (volume > MUTE && volume <= LOW_VOLUME) {
    volumeButton.textContent = "🔈";
  } else if (volume > LOW_VOLUME && volume <= MEDIUM_VOLUME) {
    volumeButton.textContent = "🔉";
  } else {
    volumeButton.textContent = "🔊";
  }
}

function toggleMute() {
  if (videoElement.volume === MUTE) {
    if (prevVolume === MUTE) {
      videoElement.volume = MEDIUM_VOLUME;
    } else {
      videoElement.volume = parseFloat(prevVolume);
    }
  } else {
    videoElement.volume = parseFloat(MUTE);
  }
}

function volumeChange(e) {
  const newVolume = e.target.value || videoElement.volume;
  updateVolume(newVolume);
}

playPauseButton.addEventListener("click", playOrPause);
videoElement.addEventListener("click", playOrPause);
videoElement.addEventListener("play", updatePlayPauseBtn);
videoElement.addEventListener("pause", updatePlayPauseBtn);
videoElement.addEventListener("timeupdate", rollSeek);
videoSlider.addEventListener("input", updateSeek);
videoElement.addEventListener("volumechange", volumeChange);
volumeSlider.addEventListener("input", volumeChange);
volumeButton.addEventListener("click", toggleMute);

videoSizeButton.addEventListener("click", () => {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.webkitRequestFullscreen) {
    /* Safari */
    videoElement.webkitRequestFullscreen();
  }
});

videoElement.addEventListener(
  "loadeddata",
  () => {
    // Video is loaded and can be played (if sometimes video doesn't
    // load then duration can be null, so explicitly listening to load)
    updateVideoDuration();
  },
  false
);

// not working
// document.addEventListener("fullscreenchange", () => {
//   if (document.fullscreenElement === videoElement) {
//     videoElement.removeAttribute("controls"); // hide default full screen controls
//     // show your own custom full screen controls
//   }
// });
// ⏸︎

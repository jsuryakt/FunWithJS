const videoElement = document.querySelector(".video");
// const playPauseButton = document.querySelector(".play-pause-btn");
// const videoSlider = document.querySelector(".video-slider");
// const volumeButton = document.querySelector(".volume-btn");
// const volumeSlider = document.querySelector(".volume-slider");
const videoSizeButton = document.querySelector(".video-size-btn");
// let videoSizeType = "SMALL";
// const VIDEO_SIZE_TYPE_SMALL = "SMALL";
// const VIDEO_SIZE_TYPE_FULL = "FULL";
// const INITIAL_WIDTH = 500;
// const INITIAL_HEIGHT = 300;
// volumeButton.addEventListener("click", () => {
//   if (volumeSlider.style.opacity === "1") {
//     volumeSlider.style.display = "none";
//   } else {
//     volumeSlider.style.display = "block";
//   }
// });

videoSizeButton.addEventListener("click", () => {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.webkitRequestFullscreen) {
    /* Safari */
    videoElement.webkitRequestFullscreen();
  }
  // if (videoSizeType === VIDEO_SIZE_TYPE_SMALL) {
  //   videoElement.width = window.innerWidth;
  //   videoElement.height = window.innerHeight;
  //   videoSizeType = VIDEO_SIZE_TYPE_FULL;
  // } else if (VIDEO_SIZE_TYPE_FULL) {
  //   videoElement.width = INITIAL_WIDTH;
  //   videoElement.height = INITIAL_HEIGHT;
  //   videoSizeType = VIDEO_SIZE_TYPE_SMALL;
  // }
});

// document.addEventListener("fullscreenchange", () => {
//   if (document.fullscreenElement === videoElement) {
//     videoElement.removeAttribute("controls"); // hide default full screen controls
//     // show your own custom full screen controls using JavaScript and CSS
//   }
// });

const videoEle = document.querySelector('#main-video');
const canvasEle = document.querySelector('#video-canvas');
const screenshots = document.querySelector('.screenshots');
const spans = document.querySelectorAll('.action span');
const ctx = canvasEle.getContext('2d');
const width = canvasEle.width;
const height = canvasEle.height;

function startVideo() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(stream => {
        videoEle.srcObject = stream;
        videoEle.play();
    });
}

function drawVideoOnCanvas() {
    setInterval(()=>{
        ctx.drawImage(videoEle, 0, 0, width, height);
    }, 16);
}

function takePhotoAndAppendToDOM() {
    const image = canvasEle.toDataURL();
    const link = document.createElement('a');
    link.setAttribute('href', image);
    link.setAttribute('download', 'screenshot.png');
    link.innerHTML = `<img src="${image}">`;
    screenshots.appendChild(link);
}

spans.forEach((span) => {
  span.addEventListener('click', () => {
    const filterName = span.id;
    canvasEle.style.filter = `var(--${filterName})`;
  });
});

startVideo();

videoEle.addEventListener('canplay', drawVideoOnCanvas);

canvasEle.addEventListener('click', takePhotoAndAppendToDOM);
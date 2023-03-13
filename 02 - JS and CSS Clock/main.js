const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

updateSecs();
updateMins();
updateHours();

setInterval(updateSecs, 1000);

function updateSecs() {
  const secs = new Date().getSeconds();
  if (secs === 0) {
    updateMins();
  }
  // each second is 6 degrees, bcz 360/60 = 6
  sec.style.transform = getRotateStyle(secs * 6);
}

function updateMins() {
  const mins = new Date().getMinutes();
  if (mins === 0) {
    updateHours();
  }
  // each minute is 6 degrees, bcz 360/60 = 6
  min.style.transform = getRotateStyle(mins * 6);
}

function updateHours() {
  // each hour is 30 degrees, bcz 360/12 = 30
  hour.style.transform = getRotateStyle(new Date().getHours() * 30);
}

function getRotateStyle(time) {
  // to start from 0 degrees either we add 270 or negate 90, since we are starting from +90 horizontal position
  return `rotate(${(time + 270) % 360}deg)`;
}

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
  sec.style.transform = getRotateStyle(secs * 6);
}

function updateMins() {
  const mins = new Date().getMinutes();
  if (mins === 0) {
    updateHours();
  }
  min.style.transform = getRotateStyle(mins * 6);
}

function updateHours() {
  hour.style.transform = getRotateStyle(new Date().getHours() * 5 * 6);
}

function getRotateStyle(time) {
  return `rotate(${(time + 270) % 360}deg)`;
}

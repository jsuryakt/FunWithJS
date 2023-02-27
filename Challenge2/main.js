const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

updateSecs();
updateMins();
updateHours();

setInterval(updateSecs, 1000);
setInterval(updateMins, 1000*60);
setInterval(updateHours, 1000*60*60);

function updateSecs() {
    sec.style.transform = getRotateStyle(new Date().getSeconds());
}

function updateMins() {
    min.style.transform = getRotateStyle(new Date().getMinutes());
}

function updateHours() {
    hour.style.transform = getRotateStyle(new Date().getHours());
}

function getRotateStyle(time) {
    return `rotate(${(time*6+270)%360}deg)`;
}
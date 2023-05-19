const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((position) => {
    console.log(position);
    speed.innerHTML = position.coords.speed;
    arrow.style.transform = `rotate(${position.coords.heading}deg)`;
}, (err) => {
    console.error(err);
    speed.innerHTML = 'Error!';
    arrow.style.transform = 'rotate(0deg)';
    alert('Hey! You gotta allow that to happen!');
})
;
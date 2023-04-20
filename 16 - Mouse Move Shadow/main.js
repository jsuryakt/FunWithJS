const dance = document.querySelector("#dance");
const moveDistance = 200;
const danceWidth = dance.offsetWidth;
const danceHeight = dance.offsetHeight;
console.log(`danceWidth ${danceWidth} danceHeight ${danceHeight}`);
// -100 to 100
// create a function that takes moveDistance as an input and computes a value between -100 and 100 corresponding to the x and y coordinates of the mouse
function moveBoxShadow(e) {
    const x = e.offsetX;
    const y = e.offsetY;
    const xWalk = Math.round((x / danceWidth) * moveDistance - (moveDistance / 2));
    const yWalk = Math.round((y / danceHeight) * moveDistance - (moveDistance / 2));
    let boxShadow = `${xWalk}px ${yWalk}px red`;
    dance.style.boxShadow = boxShadow;
    console.log(`offsetX ${x} offsetY ${y} xWalk ${xWalk} yWalk ${yWalk}`);
}

//add event listener to the dance box
dance.addEventListener("mousemove", moveBoxShadow);
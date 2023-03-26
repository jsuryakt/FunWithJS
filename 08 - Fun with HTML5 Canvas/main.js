const canvas = document.getElementById("canvas");
const reset = document.querySelector("button");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let isDrawing = false;

reset.addEventListener("click", () => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
});

function draw(e) {
  if (isDrawing) {
    const ctx = canvas.getContext("2d");
    if (ctx.lineWidth <= 0) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    hue = (hue + 1) % 360;
    console.log(hue);

    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }

    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseenter", (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

let mousePosition = {x: 0, y: 0},
  drawId,
  getRandomNumber = (min, max) => Math.round(Math.random() * (max - min + 1)) + min;

function mouseMoving(e) {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
}

function draw() {
  return setInterval(function() {
    let container = document.getElementById("wrap")
    let color = `background:rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
    let ballSize = getRandomNumber(10, 30);
    let size = `height:${ballSize}px; width:${ballSize}px;`;
    let left = `left:${getRandomNumber(mousePosition.x - ballSize, mousePosition.x)}px;`;
    let top = `top:${getRandomNumber(mousePosition.y - ballSize, mousePosition.y)}px; `;
    let style = `${left} ${top} ${color} ${size}`;
    let ball = document.createElement("div");
    ball.classList.add("ball")
    ball.style = style;
    ball.addEventListener("animationend", (e) => e.target.remove());
    container.appendChild(ball);
  }, 50)
}

window.addEventListener("mousemove", mouseMoving);
window.addEventListener("mouseover", function() {
  drawId = draw();
});
window.addEventListener("mouseout", function() {
  clearInterval(drawId);
});